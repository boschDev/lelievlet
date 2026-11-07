import type { ModelDeel, Versie } from '../onderdeel.ts';

// Strippen zwaardsleuf (zwaard): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['zwaardstrippen'] as const;

/** Base: the strippen zwaardsleuf as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
