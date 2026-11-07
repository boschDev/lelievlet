import type { ModelDeel, Versie } from '../onderdeel.ts';

// Marllijn (gaffel) (lopend_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['marllijn_gaffel'] as const;

/** Base: the marllijn (gaffel) as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
