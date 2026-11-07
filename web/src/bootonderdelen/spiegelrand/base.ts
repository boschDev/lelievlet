import type { ModelDeel, Versie } from '../onderdeel.ts';

// Dolboord over de spiegel (romp): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['spiegelrand'] as const;

/** Base: the dolboord over de spiegel as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
