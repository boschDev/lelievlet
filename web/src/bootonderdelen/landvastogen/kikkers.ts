import * as THREE from 'three';
import { type Mesh, Versie } from '../onderdeel.ts';
import { Boord, type LandvastogenBase } from './base.ts';

// Kikkers in place of the landvastogen, on one side or both. The model has none there, so each is the kikker of the
// voordek (its port one: bent rod, welded by its middle bend), stood on the inside of the spiegel athwartships where
// the oog was, sticking out square from the plate. They take the voordek kikkers' paint, and follow it as it changes
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
    const vlak = o.binnenkantSpiegel();
    if (!bron || !vlak) return;
    const plek = new Map(this.boorden.map((b) => [b, o.oog(b)]));    // before the oog goes: where it is
    // the ogen on these sides away
    o.knip((m) => !this.boorden.includes(Math.sign(m.z) as Boord));
    const kikker = bakboordKikker(bron, o.naarNode(bron));
    // the kikker as the voordek has it: along the boat (x), out of the boeisel into the boat (+z), flat (y); on the
    // spiegel: athwartships (z), out of the plate into the boat (its normal), and the third as the first two make it
    const van = new THREE.Matrix4().makeBasis(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 1, 0));
    const a = new THREE.Vector3(0, 0, 1); const b = vlak.normaal;
    const draai = new THREE.Matrix4().makeBasis(a, b, a.clone().cross(b).negate()).multiply(van.invert());
    for (const op of plek.values()) {
      op.x = (vlak.afstand - vlak.normaal.y * op.y - vlak.normaal.z * op.z) / vlak.normaal.x;   // on the plate
      const g = kikker.geometrie.clone()
        .translate(-kikker.las.x, -kikker.las.y, -kikker.las.z)
        .applyMatrix4(draai)
        .translate(op.x, op.y, op.z);
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
function bakboordKikker(bron: Mesh, naar: THREE.Matrix4): { geometrie: THREE.BufferGeometry; las: THREE.Vector3 } {
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
  return { geometrie, las: new THREE.Vector3((box.min.x + box.max.x) / 2, (box.min.y + box.max.y) / 2, box.min.z) };
}

