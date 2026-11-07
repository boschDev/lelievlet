import type { ModelDeel, Versie } from '../onderdeel.ts';

// Onderlijk fok (zeil): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['fok_onderlijk'] as const;

/** Base: the onderlijk fok as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
