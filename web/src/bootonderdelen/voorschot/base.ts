import type { ModelDeel, Versie } from '../onderdeel.ts';

// Schot voorste luchtkast (romp): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['voorschot'] as const;

/** Base: the schot voorste luchtkast as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
