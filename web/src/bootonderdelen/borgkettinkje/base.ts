import type { ModelDeel, Versie } from '../onderdeel.ts';

// Borgkettinkje (roer): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['borgkettinkje'] as const;

/** Base: the borgkettinkje as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
