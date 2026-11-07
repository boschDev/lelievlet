import type { ModelDeel, Versie } from '../onderdeel.ts';

// Achterlijk fok (zeil): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['fok_achterlijk'] as const;

/** Base: the achterlijk fok as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
