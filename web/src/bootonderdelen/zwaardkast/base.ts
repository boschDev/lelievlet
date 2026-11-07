import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Zwaardkast (zwaard), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Zwaardkast extends Onderdeel {
  static override readonly naam = 'Zwaardkast';
  static override readonly groep = ModelGroep.Zwaard;
  static override readonly ids = ['zwaardkast'];
}
