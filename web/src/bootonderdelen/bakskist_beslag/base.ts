import type { ModelDeel, Versie } from '../onderdeel.ts';

// Beslag van de bakskist (interieur): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['bakskist_beslag'] as const;

/** Base: the beslag van de bakskist as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
