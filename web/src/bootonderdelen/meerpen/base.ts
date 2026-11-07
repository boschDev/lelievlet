import { Onderdeel } from '../onderdeel.ts';

// Meerpen (interieur), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Meerpen extends Onderdeel {
  static override readonly naam = 'Meerpen';
  static override readonly ids = ['meerpen'];
}
