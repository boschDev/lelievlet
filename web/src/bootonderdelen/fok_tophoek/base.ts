import type { ModelDeel, Versie } from '../onderdeel.ts';

// Tophoek fok (zeil): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['fok_tophoek'] as const;

/** Base: the tophoek fok as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
