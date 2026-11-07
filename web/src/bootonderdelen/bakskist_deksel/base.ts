import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Deksel van de bakskist (interieur), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BakskistDeksel extends Onderdeel {
  static override readonly naam = 'Deksel van de bakskist';
  static override readonly groep = ModelGroep.Interieur;
  static override readonly ids = ['bakskist_deksel'];
}
