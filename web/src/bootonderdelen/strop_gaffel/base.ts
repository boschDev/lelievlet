import type { ModelDeel, Versie } from '../onderdeel.ts';

// Strop van de gaffel (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['strop_gaffel'] as const;

/** Base: the strop van de gaffel as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
