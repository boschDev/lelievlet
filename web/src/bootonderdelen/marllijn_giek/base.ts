import type { ModelDeel, Versie } from '../onderdeel.ts';

// Marllijn (giek) (lopend_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['marllijn_giek'] as const;

/** Base: the marllijn (giek) as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
