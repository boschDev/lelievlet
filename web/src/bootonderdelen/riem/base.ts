import * as THREE from 'three';
import { Materiaal, type Mesh, type ModelDeel, ModelGroep, Onderdeel, Versie } from '../onderdeel.ts';

// De riem: the two roeiriemen and the wrikriem. The model has them with a band in the bakskleur cut in near the
// handle (pipeline/parts.py BANDS): that is the version handvat. The base is the riem without any marking, all of
// it in its varnish; blad has the band near the tip of the blade instead.

/** The versions of the riem: where the band in the bakskleur is, if anywhere. */
export enum RiemVersie {
  Base = 'base',             // no band
  Handvat = 'handvat',       // at the handle, as the model has it
  Blad = 'blad',             // near the tip of the blade
}

/** One riem, measured along its length: from the tip of the blade towards the handle. */
export interface RiemMaat {
  hout: Mesh;                                                           // the varnished wood
  band: Mesh;                                                           // the band at the handle, as the model has it
  eigen: THREE.MeshStandardMaterial;                                    // the band's own paint (the bakskleur zone)
  tip: THREE.Vector3;                                                   // the tip of the blade, in the space of hout
  as: THREE.Vector3;                                                    // unit vector from the tip to the handle
  breedte: number;                                                      // m: how wide the band at the handle is
}

/** The vertices of a mesh in the space of another mesh of the same part. */
function positionsIn(mesh: THREE.Mesh, space: THREE.Mesh): THREE.Vector3[] {
  const to = new THREE.Matrix4().copy(space.matrixWorld).invert().multiply(mesh.matrixWorld);
  const attr = mesh.geometry.getAttribute('position');
  return Array.from({ length: attr.count }, (_, i) => new THREE.Vector3().fromBufferAttribute(attr, i).applyMatrix4(to));
}

/** The riemen of the model, measured; those without a band at the handle are left out. */
function meet(delen: ModelDeel[]): RiemMaat[] {
  const out: RiemMaat[] = [];
  for (const deel of delen) {
    const hout = deel?.meshes.find((m) => m.material.name === Materiaal.HoutGelakt);
    const band = deel?.meshes.find((m) => m.material.name === Materiaal.Bakskleur);
    if (!hout || !band) continue;
    hout.updateWorldMatrix(true, false); band.updateWorldMatrix(true, false);
    const houtPunten = positionsIn(hout, hout); const bandPunten = positionsIn(band, hout);
    // along the riem: from the point of the riem furthest from the band at the handle, the tip of the blade
    const midden = bandPunten.reduce((s, p) => s.add(p), new THREE.Vector3()).divideScalar(bandPunten.length);
    const tip = houtPunten.reduce((far, p) => (p.distanceToSquared(midden) > far.distanceToSquared(midden) ? p : far), houtPunten[0]);
    const as = midden.clone().sub(tip).normalize();
    const langs = bandPunten.map((p) => p.clone().sub(tip).dot(as));
    out.push({ hout, band, eigen: band.material, tip, as, breedte: Math.max(...langs) - Math.min(...langs) });
  }
  return out;
}

/** The riem's class: its versions in index.ts (Riem). */
export class RiemBase extends Onderdeel {
  static override readonly naam = 'Riem';
  static override readonly groep = ModelGroep.Roeien;
  static override readonly ids = ['riem_bb', 'riem_sb', 'wrikriem'];

  /** Each riem measured, when the model is loaded. */
  readonly riemen: RiemMaat[] = meet(this.delen);

  /** The band at the handle in the riem's own varnish (true), or in its own paint again (false). */
  zonderHandvatBand(weg: boolean): void {
    for (const r of this.riemen) r.band.material = weg ? r.hout.material : r.eigen;
  }
}

/** Base: no marking at all. */
export class Kaal extends Versie<RiemBase> {
  readonly naam = 'Zonder markering';
  override aan(): void { this.onderdeel.zonderHandvatBand(true); }
  override uit(): void { this.onderdeel.zonderHandvatBand(false); }
}
