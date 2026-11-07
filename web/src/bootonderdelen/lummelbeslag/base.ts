import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Lummelbeslag (rondhout), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Lummelbeslag extends Onderdeel {
  static override readonly naam = 'Lummelbeslag';
  static override readonly groep = ModelGroep.Rondhout;
  static override readonly ids = ['lummelbeslag'];
}
