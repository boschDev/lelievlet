import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Handvatten van de bakskist (interieur), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BakskistHandvatten extends Onderdeel {
  static override readonly naam = 'Handvatten van de bakskist';
  static override readonly groep = ModelGroep.Interieur;
  static override readonly ids = ['bakskist_handvatten'];
}
