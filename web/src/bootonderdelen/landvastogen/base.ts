import * as THREE from 'three';
import { Materiaal, ModelGroep, Onderdeel } from '../onderdeel.ts';

// Landvastogen (beslag): the two eyes of bent rod on the inside of the spiegel, one each side, to make the
// achterlandvast fast. Some boats have a kikker there instead, on one side or both (kikkers.ts).

export enum LandvastogenVersie {
  Base = 'base',                       // an oog each side, as the model has them
  Kikkers = 'kikkers',                 // a kikker each side
  KikkerBakboord = 'kikker_bb',        // a kikker to port, the oog to starboard
  KikkerStuurboord = 'kikker_sb',      // the oog to port, a kikker to starboard
}

/** A side of the boat: port is -z in her space (boeisel_bb), starboard +z. */
export enum Boord {
  Bakboord = -1,
  Stuurboord = 1,
}

/** A plane: the points p with normaal · p = afstand. */
export interface Vlak { normaal: THREE.Vector3; afstand: number }

export class LandvastogenBase extends Onderdeel {
  static override readonly naam = 'Landvastogen';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['landvastogen'];

  /** The middle of the oog on this side, in the boat's space; null when it is not there (any more). */
  oogMidden(boord: Boord): THREE.Vector3 | null {
    const box = new THREE.Box3(); const p = new THREE.Vector3();
    for (const d of this.delen) {
      for (const mesh of d.meshes) {
        const naar = this.naarNode(mesh); const pos = mesh.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          p.fromBufferAttribute(pos, i).applyMatrix4(naar);
          if (Math.sign(p.z) === boord) box.expandByPoint(p);
        }
      }
    }
    return box.isEmpty() ? null : box.getCenter(new THREE.Vector3());
  }

  /** The achterlandvast, made fast to the port oog in the model (pipeline/landvasten.py: coiled on the achterdek, led
   *  aft along it, two round turns through the oog just over the deck), made fast at naar instead: its turns moved
   *  there whole. The line to them follows over the deck - level, the more the nearer it is to them - and only its
   *  last bit climbs to them: the rest stays on the deck. herstel() lays it as it was. */
  verlegAchterlandvast(van: THREE.Vector3, naar: THREE.Vector3): void {
    const deel = this.model.find((d) => d.extras.id === 'achterlandvast');
    if (!deel) return;
    const opzij = new THREE.Vector3(naar.x - van.x, 0, naar.z - van.z); const op = naar.y - van.y;
    const glad = (r: number, binnen: number, buiten: number): number => {
      const t = THREE.MathUtils.clamp((buiten - r) / (buiten - binnen), 0, 1);
      return t * t * (3 - 2 * t);
    };
    const dek = this.dekHoogte();
    for (const mesh of deel.meshes) {
      const heen = this.naarNode(mesh); const terug = heen.clone().invert();
      this.vervorm((p) => {
        p.applyMatrix4(heen);
        const r = Math.hypot(p.x - van.x, p.z - van.z);              // m from the oog, level
        const was = dek(p.x, p.z);
        p.addScaledVector(opzij, glad(r, 0.08, 0.8));               // the turns all the way, the coil not at all
        const is = dek(p.x, p.z);
        const klim = glad(r, 0.06, 0.2);                             // up off the deck only the last 20 cm
        if (was !== null && is !== null) p.y += (is - was) * (1 - klim);   // over the deck's camber, on it as it was
        p.y += op * klim;
        p.applyMatrix4(terug);
      }, [mesh]);
    }
  }

  /** The height of the top of the achterdek at x, z, in the boat's space; null off it. */
  dekHoogte(): (x: number, z: number) => number | null {
    const dek = this.model.find((d) => d.extras.id === 'achterdek')?.meshes ?? [];
    const node = this.delen[0].node; node.updateWorldMatrix(true, false);
    const naarWereld = node.matrixWorld; const terug = naarWereld.clone().invert();
    const ray = new THREE.Raycaster(); const o = new THREE.Vector3(); const omlaag = new THREE.Vector3();
    return (x, z) => {
      o.set(x, 2, z).applyMatrix4(naarWereld); omlaag.set(0, -1, 0).transformDirection(naarWereld);
      ray.set(o, omlaag);
      const hit = ray.intersectObjects(dek, false)[0];
      return hit ? hit.point.applyMatrix4(terug).y : null;
    };
  }

  /** Every point of one of the model's parts, in the boat's space. */
  punten(id: string): THREE.Vector3[] {
    const out: THREE.Vector3[] = [];
    for (const mesh of this.model.find((d) => d.extras.id === id)?.meshes ?? []) {
      const naar = this.naarNode(mesh); const pos = mesh.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) out.push(new THREE.Vector3().fromBufferAttribute(pos, i).applyMatrix4(naar));
    }
    return out;
  }

  /** What is free of the inside of the spiegel above the achterdek, in the boat's space: from the top of the achterdek
   *  where it meets the spiegel (onder) to the underside of the dolboord over it (boven), and how far out from the
   *  middle the plate reaches at a height (breedte: to the boeisel). */
  vrij(): { onder: number; boven: number; breedte(y: number): number } | null {
    const mesh = this.model.find((d) => d.extras.id === 'spiegel')?.meshes.find((m) => m.material.name === Materiaal.Kuip);
    const rand = this.punten('spiegelrand'); const dek = this.punten('achterdek');
    if (!mesh || !rand.length || !dek.length) return null;
    const achterst = Math.min(...dek.map((p) => p.x));
    const onder = Math.max(...dek.filter((p) => p.x < achterst + 0.1).map((p) => p.y));
    const boven = Math.min(...rand.map((p) => p.y));
    // the face's own edges cut at the height: the furthest out of them
    const naar = this.naarNode(mesh);
    const g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry;
    const pos = g.attributes.position;
    const P = Array.from({ length: pos.count }, (_, i) => new THREE.Vector3().fromBufferAttribute(pos, i).applyMatrix4(naar));
    if (g !== mesh.geometry) g.dispose();
    const breedte = (y: number): number => {
      let ver = 0;
      for (let i = 0; i < P.length; i += 3) {
        for (const [a, b] of [[P[i], P[i + 1]], [P[i + 1], P[i + 2]], [P[i + 2], P[i]]]) {
          if ((a.y - y) * (b.y - y) > 0 || a.y === b.y) continue;
          ver = Math.max(ver, Math.abs(a.z + (b.z - a.z) * (y - a.y) / (b.y - a.y)));
        }
      }
      return ver;
    };
    return { onder, boven, breedte };
  }

  /** The inside face of the spiegel in the boat's space, its normal forward into the boat: the plane of its biggest
   *  triangle in the kuip's paint (the face is flat, and by far its biggest triangles are in it). */
  binnenkantSpiegel(): Vlak | null {
    const mesh = this.model.find((d) => d.extras.id === 'spiegel')?.meshes.find((m) => m.material.name === Materiaal.Kuip);
    if (!mesh) return null;
    const naar = this.naarNode(mesh);
    const g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry;
    const pos = g.attributes.position; const tri = new THREE.Triangle(); const n = new THREE.Vector3();
    let best = 0; let vlak: Vlak | null = null;
    for (let i = 0; i < pos.count; i += 3) {
      tri.setFromAttributeAndIndices(pos, i, i + 1, i + 2);
      tri.a.applyMatrix4(naar); tri.b.applyMatrix4(naar); tri.c.applyMatrix4(naar);
      const area = tri.getArea();
      if (area <= best) continue;
      best = area; tri.getNormal(n);
      if (n.x < 0) n.negate();                     // forward: x runs from the spiegel to the bow
      vlak = { normaal: n.clone(), afstand: n.dot(tri.a) };
    }
    if (g !== mesh.geometry) g.dispose();
    return vlak;
  }
}
