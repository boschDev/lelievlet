import type { ModelDeel, Versie } from '../onderdeel.ts';

// Klauwval (lopend_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['klauwval'] as const;

/** Base: the klauwval as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
