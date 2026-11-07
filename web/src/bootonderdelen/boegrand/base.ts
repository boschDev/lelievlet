import type { ModelDeel, Versie } from '../onderdeel.ts';

// Dwarsbuis voordek (romp): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['boegrand'] as const;

/** Base: the dwarsbuis voordek as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
