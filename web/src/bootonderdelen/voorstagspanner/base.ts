import type { ModelDeel, Versie } from '../onderdeel.ts';

// Voorstagspanner met pelikaanhaak (staand_want): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['voorstagspanner'] as const;

/** Base: the voorstagspanner met pelikaanhaak as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
