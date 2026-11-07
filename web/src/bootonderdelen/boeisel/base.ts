import type { ModelDeel, Versie } from '../onderdeel.ts';

// Boeisel (romp, bakboord en stuurboord): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['boeisel_bb', 'boeisel_sb'] as const;

/** Base: the boeisel as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
