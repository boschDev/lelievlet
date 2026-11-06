import type * as THREE from 'three';

// Bootonderdelen: the parts of the boat that are not the same on every lelievlet. Each kind of part has a folder,
// bootonderdelen/{onderdeel}/, with a base.ts - what the versions share, and the part at its plainest - and a file per
// version ({versie}.ts): how that version looks. A version is about the shape and what is on the part, not its
// paint; the paint is Aanpassen's (customize.ts).
//
// The model (lelievlet.glb) has each part in one shape, the standaard; a version changes it in the viewer. A group
// (groepen.ts `onderdelen`) picks a version per part; a part it does not name keeps the standaard.

/** A part of the model as main.ts collects it: its node, what the model says of it, its meshes. */
export interface ModelDeel {
  node: THREE.Object3D;
  extras: { id: string; naam: string; groep: string; materiaal: string };
  meshes: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>[];
}

/** One version of a part: put on the boat, and taken off again before another goes on. */
export interface Versie {
  naam: string;              // as the user reads it
  aan(): void;
  uit(): void;
}

/** A kind of part and its versions. */
export interface Onderdeel<V extends string = string> {
  naam: string;
  versies: readonly V[];
  standaard: V;              // the version the model has, and a boat keeps unless her group names another
  /** The versions for this model; null when the part is not in it. */
  maak(delen: ModelDeel[]): Record<V, Versie> | null;
}
