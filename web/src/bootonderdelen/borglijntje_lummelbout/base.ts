import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Borglijntje lummelbout (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BorglijntjeLummelbout extends Onderdeel {
  static override readonly naam = 'Borglijntje lummelbout';
  static override readonly groep = ModelGroep.LopendWant;
  static override readonly ids = ['borglijntje_lummelbout'];
}
