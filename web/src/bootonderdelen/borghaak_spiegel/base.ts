import type { ModelDeel, Versie } from '../onderdeel.ts';

// Haak van het borgkettinkje (roer): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['borghaak_spiegel'] as const;

/** Base: the haak van het borgkettinkje as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
