import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Vingerlingen (roer), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Vingerlingen extends Onderdeel {
  static override readonly naam = 'Vingerlingen';
  static override readonly groep = ModelGroep.Roer;
  static override readonly ids = ['vingerlingen'];
}
