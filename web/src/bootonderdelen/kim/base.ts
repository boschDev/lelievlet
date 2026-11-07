import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Kim (romp, bakboord en stuurboord), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Kim extends Onderdeel {
  static override readonly naam = 'Kim';
  static override readonly groep = ModelGroep.Romp;
  static override readonly ids = ['kim_bb', 'kim_sb'];
}
