import type { ModelDeel, Versie } from '../onderdeel.ts';

// Schot achterste luchtkast (romp): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['achterschot'] as const;

/** Base: the schot achterste luchtkast as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
