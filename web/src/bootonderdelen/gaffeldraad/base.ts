import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Gaffeldraad (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Gaffeldraad extends Onderdeel {
  static override readonly naam = 'Gaffeldraad';
  static override readonly groep = ModelGroep.LopendWant;
  static override readonly ids = ['gaffeldraad'];
}
