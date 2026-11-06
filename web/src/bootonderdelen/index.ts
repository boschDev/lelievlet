import type { ModelDeel, Onderdeel, Versie } from './onderdeel.ts';
import { riem } from './riem/index.ts';

// Every kind of part that has versions. A new one: a folder beside riem/ with a base.ts, a file per version and an
// index.ts, and its name here.
export const ONDERDELEN = { riem } satisfies Record<string, Onderdeel>;

export type OnderdeelNaam = keyof typeof ONDERDELEN;
/** Which version of which part: what a group gives (groepen.ts `onderdelen`); a part left out has its standaard. */
export type Keuze = Partial<Record<OnderdeelNaam, string>>;

const namen = Object.keys(ONDERDELEN) as OnderdeelNaam[];

/** Every part with the version it has: the one chosen, if that is one of its versions, else the standaard. */
export function volledig(keuze: Keuze | null | undefined): Record<OnderdeelNaam, string> {
  return Object.fromEntries(namen.map((naam) => {
    const onderdeel: Onderdeel = ONDERDELEN[naam];
    const gekozen = keuze?.[naam];
    return [naam, gekozen && onderdeel.versies.includes(gekozen) ? gekozen : onderdeel.standaard];
  })) as Record<OnderdeelNaam, string>;
}

/** Whether two choices put the same versions on the boat. */
export const zelfde = (a: Keuze | null | undefined, b: Keuze | null | undefined): boolean => {
  const va = volledig(a); const vb = volledig(b);
  return namen.every((naam) => va[naam] === vb[naam]);
};

/** The parts of this model with their versions; set() puts on what is chosen, and takes off what was on. */
export function makeBootonderdelen(delen: ModelDeel[]): { set(keuze: Keuze | null | undefined): void } {
  const versies = new Map<OnderdeelNaam, Record<string, Versie>>();
  for (const naam of namen) {
    const gemaakt = (ONDERDELEN[naam] as Onderdeel).maak(delen);
    if (gemaakt) versies.set(naam, gemaakt);
  }
  // what the model has when it is loaded: every part in its standaard
  const actief = volledig(null);
  return {
    set(keuze) {
      const gewenst = volledig(keuze);
      for (const [naam, vs] of versies) {
        if (actief[naam] === gewenst[naam]) continue;
        vs[actief[naam]]?.uit();
        vs[gewenst[naam]]?.aan();
        actief[naam] = gewenst[naam];
      }
    },
  };
}
