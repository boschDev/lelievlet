import type * as THREE from 'three';
import type { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import type { ModelDeel } from '../bootonderdelen/onderdeel.ts';

// The types the lessons of Leren › Lessen share: what main.ts hands each lesson, what of the viewer's modes (modes.ts)
// a lesson reaches into, and what a lesson gives back.

/** A view of a lesson's own, for krachtView (main.ts): metres and model space; oog: the height the camera stands at. */
export interface EigenAanzicht {
  hoogte: number;
  breedte: number;
  doel: [number, number, number];
  richting: [number, number, number];
  oog?: number;
}
/** Where the camera goes: one of krachtView's names ('boven', 'achter', ...) or a view of the lesson's own. */
export type Aanzicht = string | EigenAanzicht;
/** krachtView (main.ts): `covered` px on the right that the card covers. */
export type Fly = (aanzicht: Aanzicht, covered?: number) => void;

/** How she rides the waves (Het weer, Grote schepen): metres up, radians bow up, radians about +x. */
export interface Deining { op?: number; stamp: number; rol: number }
/** Where she is and which way she heads (Voorrang, Het weer): metres from where she lies, kop radians to stuurboord. */
export interface Plek { x?: number; z?: number; kop?: number; pijlMee?: boolean }

/** What the lessons set and read of the viewer's modes (modes.ts initModes): only that part of it. */
export interface LesModes {
  /** As the page's config has it: modus, tuig, koers, commando, ...; direct: at once, not as a handeling. */
  apply(want: { modus?: string; tuig?: string; koers?: number; commando?: string }, opties?: { direct?: boolean }): void;
  current(): { modus: string; tuig: string; koers: number };
  state: { mode: string; course: number };
  dock: { readonly wind: number; schoon(): void };
  kracht: {
    heel: number;
    vlag: number | null;
    slap: number;
    deining: Deining | null;
    opzij: number;
    plek: Plek | null;
  };
  /** The viewer's water (rig.ts makeWater): a disc round her with a hole where she lies. */
  water: THREE.Mesh<THREE.ShapeGeometry, THREE.MeshStandardMaterial>;
}

/** How dark the sky is, as Zoeken holds it; null lets go. */
export type Donker = number | null;

/** What main.ts hands every lesson (`lesson(key)`). */
export interface LesContext {
  sleutel: string;
  fly: Fly;
  wrap: HTMLElement;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  parts: ModelDeel[];
  modes: LesModes;
  setCoveredRight(px: number): void;
  opslaan: boolean;
  dismissProcedure?(): void;
  setDark?(donker: Donker): void;
  /** Zelf verkennen: on to that page of Zoeken. */
  naarZoeken?(cat: string): void;
  /** On to that quiz of Leren › Quiz. */
  naarQuiz?(soort: string): void;
  onOpen?(): void;
}

/** What a lesson gives back to main.ts. */
export interface Les {
  update(dt: number, width: number, height: number): void;
  /** Open it, at its first onderwerp or at the one with that id. */
  open(id?: string): void;
  close(): void;
  dispose(): void;
  /** Its onderwerpen, for the logboek: how many are gevolgd. */
  onderwerpen?: readonly { id: string; vraag?: unknown; delen?: string[] }[];
  /** What is chosen in it now, for the address of the page. */
  readonly keuze?: string;
}
