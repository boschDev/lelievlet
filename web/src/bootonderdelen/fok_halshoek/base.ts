import type { ModelDeel, Versie } from '../onderdeel.ts';

// Halshoek fok (zeil): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['fok_halshoek'] as const;

/** Base: the halshoek fok as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
