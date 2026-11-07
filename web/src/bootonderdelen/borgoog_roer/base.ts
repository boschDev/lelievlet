import type { ModelDeel, Versie } from '../onderdeel.ts';

// Oog van het borgkettinkje (roer): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['borgoog_roer'] as const;

/** Base: the oog van het borgkettinkje as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
