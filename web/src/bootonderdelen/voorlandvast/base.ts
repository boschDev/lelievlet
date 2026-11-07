import type { ModelDeel, Versie } from '../onderdeel.ts';

// Voorlandvast (lopend_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['voorlandvast'] as const;

/** Base: the voorlandvast as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
