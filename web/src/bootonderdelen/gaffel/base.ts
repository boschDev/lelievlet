import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Gaffel (rondhout), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Gaffel extends Onderdeel {
  static override readonly naam = 'Gaffel';
  static override readonly groep = ModelGroep.Rondhout;
  static override readonly ids = ['gaffel'];
}
