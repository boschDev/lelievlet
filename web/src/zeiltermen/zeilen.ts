import * as THREE from 'three';

// The sails from above, for the maps of Zeiltermen (zeiltermen/index.js) and its quiz (zeiltermen/quiz.js), as
// Krachten en koppels draws them: the onderlijk from the halshoek to the schoothoek.

const ZEILEN = [['grootzeil_halshoek', 'grootzeil_schoothoek'], ['fok_halshoek', 'fok_schoothoek']] as const;

/** A point on the map: [x, z] in metres in the boat's frame, x to the bow, z to stuurboord. */
export type Punt = [number, number];
/** What makeZeilen needs of a part of the viewer: its id and its meshes. */
export interface ZeilDeel { extras: { id: string }; meshes: THREE.Mesh[] }
/** The onderlijk of each sail from above, for wind (off the bow, + over stuurboord) and side (+1: over stuurboord). */
export type Zeilen = (wind: number, side: number) => Punt[][];

export function makeZeilen({ parts, boat }: { parts: ZeilDeel[]; boat: THREE.Object3D }): Zeilen {
  const byId = new Map(parts.map((p) => [p.extras.id, p]));
  /** The middle of a (small) part, in the boat's frame. */
  const partAt = (id: string): THREE.Vector3 | null => {
    const out = new THREE.Vector3(); const tmp = new THREE.Vector3(); let n = 0;
    for (const mesh of byId.get(id)?.meshes ?? []) {
      mesh.updateWorldMatrix(true, false);
      const pos = mesh.geometry.attributes.position;
      for (let i = 0; i < pos.count; i += 2) { out.add(tmp.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld)); n++; }
    }
    return n ? boat.worldToLocal(out.divideScalar(n)) : null;
  };
  /** Each sail's onderlijk from above: a curve from the halshoek to the schoothoek, its bolling the way the wind
   *  blows - to lij, or forward for a sail out athwartships, so a fok bak voor de wind bolls out to the loef side -
   *  deepest a third of the way back (krachten/index.js shapes); [x, z] points for the map. wind: off the bow, +
   *  over stuurboord; side: the wind over (+1 stuurboord), for a sail lying in it. */
  return (wind, side) => ZEILEN.map(([halsId, schootId]) => {
    const hals = partAt(halsId); const schoot = partAt(schootId);
    if (!hals || !schoot) return null;
    const cx = schoot.x - hals.x; const cz = schoot.z - hals.z; const len = Math.hypot(cx, cz) || 1;
    let nx = -cz / len; let nz = cx / len;
    const mee = -(nx * Math.cos(wind) + nz * Math.sin(wind));     // along the way the wind blows
    if (Math.abs(mee) > 0.05 ? mee < 0 : nz * side > 0) { nx = -nx; nz = -nz; }
    const pts: Punt[] = [];
    for (let i = 0; i <= 16; i++) {
      const t = i / 16; const d = 0.1 * len * Math.sin(Math.PI * t ** 0.75);
      pts.push([hals.x + cx * t + nx * d, hals.z + cz * t + nz * d]);
    }
    return pts;
  }).filter((pts) => pts !== null);
}
