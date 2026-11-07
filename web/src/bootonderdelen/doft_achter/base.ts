import type { ModelDeel, Versie } from '../onderdeel.ts';

// Achterste doft (interieur): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['doft_achter'] as const;

/** Base: the achterste doft as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
