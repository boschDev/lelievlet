import type { ModelDeel, Versie } from '../onderdeel.ts';

// Fokkenschoot (lopend_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['fokkenschoot'] as const;

/** Base: the fokkenschoot as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
