import type { ModelDeel, Versie } from '../onderdeel.ts';

// Achterlijk grootzeil (zeil): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['grootzeil_achterlijk'] as const;

/** Base: the achterlijk grootzeil as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
