import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Mastband met lummelbeslag (rondhout), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class MastbandLummel extends Onderdeel {
  static override readonly naam = 'Mastband met lummelbeslag';
  static override readonly groep = ModelGroep.Rondhout;
  static override readonly ids = ['mastband_lummel'];
}
