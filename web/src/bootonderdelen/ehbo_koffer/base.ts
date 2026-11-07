import type { ModelDeel, Versie } from '../onderdeel.ts';

// EHBO-koffer (interieur): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['ehbo_koffer'] as const;

/** Base: the ehbo-koffer as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
