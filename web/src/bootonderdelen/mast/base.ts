import { Onderdeel } from '../onderdeel.ts';

// Mast (rondhout), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Mast extends Onderdeel {
  static override readonly naam = 'Mast';
  static override readonly ids = ['mast'];
}
