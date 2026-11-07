import type { ModelDeel, Versie } from '../onderdeel.ts';

// Bakboord zijstag (staand_want, bakboord en stuurboord): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['want_bb', 'want_sb'] as const;

/** Base: the bakboord zijstag as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
