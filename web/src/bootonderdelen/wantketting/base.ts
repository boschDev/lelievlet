import type { ModelDeel, Versie } from '../onderdeel.ts';

// Wantketting (staand_want, bakboord en stuurboord): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['wantketting_bb', 'wantketting_sb'] as const;

/** Base: the wantketting as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
