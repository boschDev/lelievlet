import type { ModelDeel, Versie } from '../onderdeel.ts';

// Fokkenval (lopend_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['fokkenval'] as const;

/** Base: the fokkenval as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
