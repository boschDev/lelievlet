import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Achterste doft (interieur), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class DoftAchter extends Onderdeel {
  static override readonly naam = 'Achterste doft';
  static override readonly groep = ModelGroep.Interieur;
  static override readonly ids = ['doft_achter'];
}
