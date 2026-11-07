import { Onderdeel } from '../onderdeel.ts';

// Wrikgat (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Wrikgat extends Onderdeel {
  static override readonly naam = 'Wrikgat';
  static override readonly ids = ['wrikgat'];
}
