import a from './a.ts';
import b from './b.ts';
import cd from './cd.ts';
import e from './e.ts';
import fgh from './fgh.ts';
import abc, { EXTRA as extraAbc } from './extra-abc.ts';
import extraE, { EXTRA as extraEx } from './extra-e.ts';
import gh, { EXTRA as extraGh } from './extra-gh.ts';
import lichten, { EXTRA as extraLichten } from './extra-lichten.ts';
import { plaatshouder } from './kader.ts';

/** The drawing of a sign: its size and its SVG; missing when it is a stand-in. */
export interface Bord { w: number; h: number; svg: string; missing?: boolean }

/** A sign beyond those of tekens.ts, where Zoeken lists it. */
export interface ExtraBord {
  code: string; naam: string; kleur: string; groep: string; betekenis: string; lelievlet?: string; cwo?: boolean;
}

// Every sign drawn so far, by code: { w, h, svg }. A code nobody has drawn gets a stand-in.
export const BORDEN: Record<string, Bord> = { ...a, ...b, ...cd, ...e, ...fgh, ...abc, ...extraE, ...gh, ...lichten };

/**
 * The signs beyond those of tekens.js (extra-*.js), each with { code, naam, kleur, groep, betekenis,
 * lelievlet, cwo }: where Zoeken lists it by its looks, and what it means. Most of them CWO does not ask
 * about: they are there to look up, marked so, and never come up in the quiz. The few the Katwijk CWO
 * book teaches carry cwo: true and are CWO like the rest.
 */
export const EXTRA: ExtraBord[] = [...extraAbc, ...extraEx, ...extraGh, ...extraLichten];
export const NIET_CWO = new Set(EXTRA.filter((x) => !x.cwo).map((x) => x.code));

/** The drawing of a sign, or its stand-in: { w, h, svg, missing }. */
export const bord = (code: string): Bord => BORDEN[code] ?? { w: 600, h: 600, svg: plaatshouder(code), missing: true };
