import type { ModelDeel, Versie } from '../onderdeel.ts';

// Mikhouders (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['mikhouders'] as const;

/** Base: the mikhouders as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
