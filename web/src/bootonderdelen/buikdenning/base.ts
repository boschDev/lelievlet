import type { ModelDeel, Versie } from '../onderdeel.ts';

// Vlonder (interieur): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['buikdenning'] as const;

/** Base: the vlonder as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
