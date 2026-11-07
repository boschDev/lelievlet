import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Wantputting (beslag, bakboord en stuurboord), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Wantputting extends Onderdeel {
  static override readonly naam = 'Wantputting';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['wantputting_bb', 'wantputting_sb'];
}
