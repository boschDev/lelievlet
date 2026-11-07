import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Hommerring (rondhout), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Hommerring extends Onderdeel {
  static override readonly naam = 'Hommerring';
  static override readonly groep = ModelGroep.Rondhout;
  static override readonly ids = ['hommerring'];
}
