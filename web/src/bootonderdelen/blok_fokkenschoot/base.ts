import type { ModelDeel, Versie } from '../onderdeel.ts';

// Blok fokkenschoot (lopend_want, bakboord en stuurboord): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['blok_fokkenschoot_bb', 'blok_fokkenschoot_sb'] as const;

/** Base: the blok fokkenschoot as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
