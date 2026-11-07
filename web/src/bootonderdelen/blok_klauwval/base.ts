import type { ModelDeel, Versie } from '../onderdeel.ts';

// Blok klauwval (lopend_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['blok_klauwval'] as const;

/** Base: the blok klauwval as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
