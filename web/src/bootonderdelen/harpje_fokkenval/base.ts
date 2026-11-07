import type { ModelDeel, Versie } from '../onderdeel.ts';

// Harpje (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['harpje_fokkenval'] as const;

/** Base: the harpje as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
