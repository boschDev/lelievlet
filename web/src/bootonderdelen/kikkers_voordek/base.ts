import type { ModelDeel, Versie } from '../onderdeel.ts';

// Kikkers op het voordek (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['kikkers_voordek'] as const;

/** Base: the kikkers op het voordek as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
