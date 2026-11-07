import { Onderdeel } from '../onderdeel.ts';

// Vlonder (interieur), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Buikdenning extends Onderdeel {
  static override readonly naam = 'Vlonder';
  static override readonly ids = ['buikdenning'];
}
