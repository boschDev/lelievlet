import type { ModelDeel, Versie } from '../onderdeel.ts';

// Ring van de pelikaanhaak (staand_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['pelikaanhaak_ring'] as const;

/** Base: the ring van de pelikaanhaak as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
