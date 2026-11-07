import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Lummelbout (rondhout), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Lummelbout extends Onderdeel {
  static override readonly naam = 'Lummelbout';
  static override readonly groep = ModelGroep.Rondhout;
  static override readonly ids = ['lummelbout'];
}
