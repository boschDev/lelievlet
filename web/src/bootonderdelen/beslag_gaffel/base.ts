import type { ModelDeel, Versie } from '../onderdeel.ts';

// Banden van de gaffeldraad (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['beslag_gaffel'] as const;

/** Base: the banden van de gaffeldraad as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
