import { Onderdeel } from '../onderdeel.ts';

// Strippen zwaardsleuf (zwaard), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Zwaardstrippen extends Onderdeel {
  static override readonly naam = 'Strippen zwaardsleuf';
  static override readonly ids = ['zwaardstrippen'];
}
