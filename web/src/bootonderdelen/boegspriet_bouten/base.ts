import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Bouten boegspriet (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BoegsprietBouten extends Onderdeel {
  static override readonly naam = 'Bouten boegspriet';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['boegspriet_bouten'];
}
