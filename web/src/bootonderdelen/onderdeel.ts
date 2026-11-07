import * as THREE from 'three';

// Bootonderdelen: every part of the boat the model renders, a class each, and the versions some of them have. Each
// part has a folder, bootonderdelen/{onderdeel}/, with a base.ts - the part's class, what its versions share, and the
// part at its plainest - and a file per version ({versie}.ts): how that version looks. A version is about the shape
// and what is on the part, not its paint; the paint is Aanpassen's (customize.ts).
//
// The model (lelievlet.glb) has each part in one shape, the standaard. Its class holds the part's meshes and is where
// its shape is changed in the viewer: hidden, deformed, given a geometry of its own (Onderdeel below). A version
// does that through its part; uit() puts the part back as the model has it. A group (groepen.ts `onderdelen`) picks
// a version per part; a part it does not name keeps the standaard.
//
// A shape changed here is what is drawn and picked. The lines along the edges (edges.ts) are drawn once, after the
// model has loaded, from the shape as it was: a version that changes the shape much, changes them too.

export type Mesh = THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;

/** A part of the model as main.ts collects it: its node, what the model says of it, its meshes. */
export interface ModelDeel {
  node: THREE.Object3D;
  extras: { id: string; naam: string; groep: string; materiaal: string };
  meshes: Mesh[];
}

/** The model's parts with these ids. */
export const delenVan = (delen: ModelDeel[], ids: readonly string[]): ModelDeel[] => delen.filter((d) => ids.includes(d.extras.id));

/** A kind of part as a class: what the registry (index.ts) knows of it before there is a model. */
export interface OnderdeelKlasse {
  readonly naam: string;                    // as the user reads it
  readonly ids: readonly string[];          // its parts in the model (lelievlet.parts.json), _bb and _sb both
  readonly versies: readonly string[];
  readonly standaard: string;               // the version the model has, and a boat keeps unless her group names another
  new (delen: ModelDeel[]): Onderdeel;
}

/** A part of the boat: its meshes in the model, and its shape. A subclass gives naam and ids (static); one with
 *  versions gives versies and standaard too, and makes them in maakVersies(). */
export abstract class Onderdeel {
  static readonly naam: string = '';
  static readonly ids: readonly string[] = [];
  static readonly versies: readonly string[] = ['base'];
  static readonly standaard: string = 'base';

  /** This part's parts in the model. */
  readonly delen: ModelDeel[];
  /** The geometry the model has, of each mesh whose shape is changed now. */
  readonly #model = new Map<Mesh, THREE.BufferGeometry>();
  /** Meshes made for this part (voegToe), off again in herstel(). */
  readonly #eigen: { mesh: Mesh; deel: ModelDeel }[] = [];
  /** Meshes hidden (verberg), each with whether it was visible. */
  readonly #verborgen = new Map<THREE.Object3D, boolean>();

  constructor(alle: ModelDeel[]) {
    this.delen = delenVan(alle, (this.constructor as OnderdeelKlasse).ids);
  }

  get naam(): string { return (this.constructor as OnderdeelKlasse).naam; }

  /** Every mesh of the part, those made for it too. */
  get meshes(): Mesh[] { return this.delen.flatMap((d) => d.meshes); }

  /** The meshes of one of its parts in the model (e.g. 'berghout_bb'). */
  meshesVan(id: string): Mesh[] { return this.delen.find((d) => d.extras.id === id)?.meshes ?? []; }

  /** Its versions, by name; a part with only its base has the model's shape and nothing else. */
  maakVersies(): Record<string, Versie> { return { base: new Standaard(this) }; }

  // ---- the shape

  /** Gives a mesh another geometry; the model's is kept for herstel(). */
  zetVorm(mesh: Mesh, geometry: THREE.BufferGeometry): void {
    if (!this.#model.has(mesh)) this.#model.set(mesh, mesh.geometry);
    else if (mesh.geometry !== this.#model.get(mesh)) mesh.geometry.dispose();
    geometry.computeBoundingBox(); geometry.computeBoundingSphere();
    mesh.geometry = geometry;
  }

  /** The model's shape moved point by point: f gets each point in the mesh's own space and moves it. From the
   *  model's shape every time, so a version can call it again with other values. */
  vervorm(f: (p: THREE.Vector3, mesh: Mesh) => void, meshes: Mesh[] = this.meshes, normalen = true): void {
    for (const mesh of meshes) {
      const g = (this.#model.get(mesh) ?? mesh.geometry).clone();
      const pos = g.attributes.position; const p = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) { f(p.fromBufferAttribute(pos, i), mesh); pos.setXYZ(i, p.x, p.y, p.z); }
      if (normalen) g.computeVertexNormals();
      this.zetVorm(mesh, g);
    }
  }

  /** The part, or some of its meshes, out of sight; herstel() shows them again. */
  verberg(meshes: Mesh[] = this.meshes): void {
    for (const m of meshes) {
      if (!this.#verborgen.has(m)) this.#verborgen.set(m, m.visible);
      m.visible = false;
    }
  }

  /** A mesh of its own for the part, under one of its parts in the model (the first unless named), in that part's
   *  space: picked and coloured as that part. herstel() takes it off again. */
  voegToe(geometry: THREE.BufferGeometry, material: THREE.MeshStandardMaterial, id?: string): Mesh {
    const deel = (id ? this.delen.find((d) => d.extras.id === id) : this.delen[0])!;
    const mesh: Mesh = new THREE.Mesh(geometry, material);
    deel.node.add(mesh); deel.meshes.push(mesh);
    this.#eigen.push({ mesh, deel });
    return mesh;
  }

  /** Back as the model has it: its own geometry on each mesh, everything hidden shown, every mesh made taken off. */
  herstel(): void {
    for (const [mesh, g] of this.#model) {
      if (mesh.geometry !== g) mesh.geometry.dispose();
      mesh.geometry = g;
    }
    this.#model.clear();
    for (const [m, zichtbaar] of this.#verborgen) m.visible = zichtbaar;
    this.#verborgen.clear();
    for (const { mesh, deel } of this.#eigen.splice(0)) {
      mesh.removeFromParent(); mesh.geometry.dispose();
      deel.meshes.splice(deel.meshes.indexOf(mesh), 1);
    }
  }
}

/** One version of a part: put on the boat, and taken off again before another goes on. Its part is where it changes
 *  the shape; uit() leaves the part as the model has it (herstel(), unless the version undoes its own). */
export abstract class Versie<O extends Onderdeel = Onderdeel> {
  abstract readonly naam: string;          // as the user reads it
  readonly onderdeel: O;
  constructor(onderdeel: O) { this.onderdeel = onderdeel; }
  aan(): void {}
  uit(): void { this.onderdeel.herstel(); }
}

/** The base of a part that has nothing but: the model's shape. */
export class Standaard extends Versie {
  readonly naam = 'Standaard';
}
