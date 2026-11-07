import type { ModelDeel, Versie } from '../onderdeel.ts';

// Grendelbout (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['grendelbout'] as const;

/** Base: the grendelbout as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
