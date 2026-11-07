import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Schootring (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Schootring extends Onderdeel {
  static override readonly naam = 'Schootring';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['schootring'];
}
