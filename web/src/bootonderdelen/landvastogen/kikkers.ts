import * as THREE from 'three';
import { type Mesh, Versie } from '../onderdeel.ts';
import { Boord, type LandvastogenBase } from './base.ts';

// Kikkers in place of the landvastogen, on one side or both. The model has none there, so each is the kikker of the
// voordek (its port one: bent rod, welded by its middle bend), on the inside of the spiegel athwartships, level, with
// as much room above it (to the dolboord over the spiegel) as under it (to the achterdek) and out to the boeisel. They take the voordek kikkers' paint, and follow it as it changes
// (Aanpassen › beslag). They are picked as the landvastogen: they are under that part.

export class Kikkers extends Versie<LandvastogenBase> {
  readonly naam: string;
  readonly boorden: Boord[];

  constructor(onderdeel: LandvastogenBase, boorden: Boord[], naam: string) {
    super(onderdeel);
    this.boorden = boorden; this.naam = naam;
  }

  override aan(): void {
    const o = this.onderdeel;
    const bron = o.model.find((d) => d.extras.id === 'kikkers_voordek')?.meshes[0];
    const vlak = o.binnenkantSpiegel(); const vrij = o.vrij();
    if (!bron || !vlak || !vrij) return;
    const oogBakboord = o.oogMidden(Boord.Bakboord);          // where the achterlandvast is made fast, before it goes
    // the ogen on these sides away
    o.knip((m) => !this.boorden.includes(Math.sign(m.z) as Boord));
    const kikker = bakboordKikker(bron, o.naarNode(bron));
    // the kikker as the voordek has it: along the boeisel there (langs, level), out of it into the boat (uit, level).
    // On the spiegel: athwartships (z), straight forward into the boat (the plate's normal, level)
    const { langs, uit } = kikker;
    const van = new THREE.Matrix4().makeBasis(langs, uit, langs.clone().cross(uit).negate());
    const a = new THREE.Vector3(0, 0, 1); const b = new THREE.Vector3(vlak.normaal.x, 0, vlak.normaal.z).normalize();
    const draai = new THREE.Matrix4().makeBasis(a, b, a.clone().cross(b).negate()).multiply(van.invert());
    const { lengte, dikte } = kikker;
    // as much room above it (to the dolboord over the spiegel) as under it (to the achterdek) and out to the boeisel
    const ruimte = (vrij.boven - vrij.onder - dikte) / 2;
    const y = (vrij.onder + vrij.boven) / 2;
    for (const boord of this.boorden) {
      const z = boord * (vrij.breedte(y) - ruimte - lengte / 2);
      const x = (vlak.afstand - vlak.normaal.y * y - vlak.normaal.z * z) / vlak.normaal.x;   // on the plate
      const g = kikker.geometrie.clone()
        .translate(-kikker.las.x, -kikker.las.y, -kikker.las.z)
        .applyMatrix4(draai)
        .translate(x, y, z);
      if (boord === Boord.Bakboord && oogBakboord) {
        g.computeBoundingBox();
        o.verlegAchterlandvast(oogBakboord, g.boundingBox!.getCenter(new THREE.Vector3()));
      }
      const verf = bron.material.clone();
      const mesh: Mesh = o.voegToe(g, verf);
      mesh.onBeforeRender = () => {               // the voordek kikkers' paint, as it is now; not their highlight
        const nu = bron.material;
        verf.color.copy(nu.color); verf.metalness = nu.metalness; verf.roughness = nu.roughness;
      };
    }
    kikker.geometrie.dispose();
  }
}

/** The port kikker of the voordek in the boat's space (naar: from its own), and the middle of its weld: where it
 *  touches the boeisel. */
interface Kikker {
  geometrie: THREE.BufferGeometry;
  las: THREE.Vector3;                  // the middle of its weld
  langs: THREE.Vector3;                // along it, level (the boeisel runs in towards the stem there: not along x)
  uit: THREE.Vector3;                  // out of the boeisel into the boat, level
  lengte: number; dikte: number;       // m: along it, and up
}

function bakboordKikker(bron: Mesh, naar: THREE.Matrix4): Kikker {
  const alles = (bron.geometry.index ? bron.geometry.toNonIndexed() : bron.geometry.clone()).applyMatrix4(naar);
  const pos = alles.attributes.position; const nor = alles.attributes.normal;
  const p: number[] = []; const n: number[] = [];
  for (let i = 0; i < pos.count; i += 3) {
    if (pos.getZ(i) + pos.getZ(i + 1) + pos.getZ(i + 2) >= 0) continue;   // port is -z
    for (let j = i; j < i + 3; j++) {
      p.push(pos.getX(j), pos.getY(j), pos.getZ(j));
      if (nor) n.push(nor.getX(j), nor.getY(j), nor.getZ(j));
    }
  }
  alles.dispose();
  const geometrie = new THREE.BufferGeometry();
  geometrie.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  if (n.length) geometrie.setAttribute('normal', new THREE.Float32BufferAttribute(n, 3));
  else geometrie.computeVertexNormals();
  geometrie.computeBoundingBox();
  const box = geometrie.boundingBox!;
  // its length, level: the line through its points that they lie closest along (the main axis of their spread in x, z)
  const P = Array.from({ length: p.length / 3 }, (_, i) => new THREE.Vector3(p[3 * i], p[3 * i + 1], p[3 * i + 2]));
  const midden = P.reduce((s, q) => s.add(q), new THREE.Vector3()).divideScalar(P.length);
  let xx = 0; let xz = 0; let zz = 0;
  for (const q of P) { const dx = q.x - midden.x; const dz = q.z - midden.z; xx += dx * dx; xz += dx * dz; zz += dz * dz; }
  const hoek = 0.5 * Math.atan2(2 * xz, xx - zz);
  const langs = new THREE.Vector3(Math.cos(hoek), 0, Math.sin(hoek));
  const uit = new THREE.Vector3(-langs.z, 0, langs.x);
  if (uit.z < 0) uit.negate();                       // into the boat: to starboard, from the port boeisel
  const op = (q: THREE.Vector3, as: THREE.Vector3): number => q.clone().sub(midden).dot(as);
  const l = P.map((q) => op(q, langs)); const u = P.map((q) => op(q, uit));
  const las = midden.clone()
    .addScaledVector(langs, (Math.min(...l) + Math.max(...l)) / 2)
    .addScaledVector(uit, Math.min(...u));            // its side against the boeisel
  las.y = (box.min.y + box.max.y) / 2;
  return { geometrie, las, langs, uit, lengte: Math.max(...l) - Math.min(...l), dikte: box.max.y - box.min.y };
}

