import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Zwaardloper (zwaard), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class ZwaardloperOnder extends Onderdeel {
  static override readonly naam = 'Zwaardloper';
  static override readonly groep = ModelGroep.Zwaard;
  static override readonly ids = ['zwaardloper_onder'];
}
