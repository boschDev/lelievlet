import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Helmstok (roer), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Helmstok extends Onderdeel {
  static override readonly naam = 'Helmstok';
  static override readonly groep = ModelGroep.Roer;
  static override readonly ids = ['helmstok'];
}
