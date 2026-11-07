import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Banden van de gaffeldraad (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BeslagGaffel extends Onderdeel {
  static override readonly naam = 'Banden van de gaffeldraad';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['beslag_gaffel'];
}
