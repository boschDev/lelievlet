import type { ModelDeel, Versie } from '../onderdeel.ts';

// Roerkop (helmhoutbeslag) (roer): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['roerkop'] as const;

/** Base: the roerkop (helmhoutbeslag) as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
