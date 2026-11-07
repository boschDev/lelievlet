import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Scheg (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Scheg extends Onderdeel {
  static override readonly naam = 'Scheg';
  static override readonly groep = ModelGroep.Romp;
  static override readonly ids = ['scheg'];
}
