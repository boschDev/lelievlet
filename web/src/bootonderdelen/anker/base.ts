import type { ModelDeel, Versie } from '../onderdeel.ts';

// Anker (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['anker'] as const;

/** Base: the anker as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
