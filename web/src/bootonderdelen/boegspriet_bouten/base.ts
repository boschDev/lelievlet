import type { ModelDeel, Versie } from '../onderdeel.ts';

// Bouten boegspriet (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['boegspriet_bouten'] as const;

/** Base: the bouten boegspriet as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
