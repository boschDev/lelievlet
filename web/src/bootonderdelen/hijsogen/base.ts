import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Hijsogen (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Hijsogen extends Onderdeel {
  static override readonly naam = 'Hijsogen';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['hijsogen'];
}
