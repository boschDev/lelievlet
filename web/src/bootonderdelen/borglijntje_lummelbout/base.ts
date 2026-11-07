import type { ModelDeel, Versie } from '../onderdeel.ts';

// Borglijntje lummelbout (lopend_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['borglijntje_lummelbout'] as const;

/** Base: the borglijntje lummelbout as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
