import type { ModelDeel, Versie } from '../onderdeel.ts';

// Steun grootschootoog (beslag): as the model has it. A version that changes it goes in a file of its own beside this one.

export const IDS = ['grootschootoog_steun'] as const;

/** Base: the steun grootschootoog as the model has it. */
export default function base(_delen: ModelDeel[]): Versie {
  return { naam: 'Standaard', aan: () => {}, uit: () => {} };
}
