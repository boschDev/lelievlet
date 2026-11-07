import type { ModelDeel, Versie } from '../onderdeel.ts';

// Vlak (romp, bakboord en stuurboord): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['vlak_bb', 'vlak_sb'] as const;

/** Base: the vlak as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
