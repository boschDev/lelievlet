import type { ModelDeel, Versie } from '../onderdeel.ts';

// Mastband met lummelbeslag (rondhout): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['mastband_lummel'] as const;

/** Base: the mastband met lummelbeslag as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
