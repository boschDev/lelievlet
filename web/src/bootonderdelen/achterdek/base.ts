import type { ModelDeel, Versie } from '../onderdeel.ts';

// Achterdek (romp): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['achterdek'] as const;

/** Base: the achterdek as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
