import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Hanepootloper (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Hanepootloper extends Onderdeel {
  static override readonly naam = 'Hanepootloper';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['hanepootloper'];
}
