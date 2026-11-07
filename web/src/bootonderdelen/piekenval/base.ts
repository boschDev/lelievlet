import type { ModelDeel, Versie } from '../onderdeel.ts';

// Piekenval (lopend_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['piekenval'] as const;

/** Base: the piekenval as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
