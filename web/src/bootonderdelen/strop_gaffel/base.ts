import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Strop van de gaffel (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class StropGaffel extends Onderdeel {
  static override readonly naam = 'Strop van de gaffel';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['strop_gaffel'];
}
