import type { ModelDeel, Versie } from '../onderdeel.ts';

// Schootring (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['schootring'] as const;

/** Base: the schootring as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
