import type { ModelDeel, Versie } from '../onderdeel.ts';

// Voorstag met spanner (staand_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['voorstag'] as const;

/** Base: the voorstag met spanner as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
