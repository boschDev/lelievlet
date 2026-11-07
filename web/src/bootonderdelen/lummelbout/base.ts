import type { ModelDeel, Versie } from '../onderdeel.ts';

// Lummelbout (rondhout): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['lummelbout'] as const;

/** Base: the lummelbout as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
