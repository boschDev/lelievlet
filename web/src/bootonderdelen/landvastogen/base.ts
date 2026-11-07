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
