import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Berghout (romp, bakboord en stuurboord), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Berghout extends Onderdeel {
  static override readonly naam = 'Berghout';
  static override readonly groep = ModelGroep.Romp;
  static override readonly ids = ['berghout_bb', 'berghout_sb'];
}
