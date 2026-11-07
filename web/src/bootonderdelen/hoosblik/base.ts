import { Onderdeel } from '../onderdeel.ts';

// Hoosblik (interieur), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Hoosblik extends Onderdeel {
  static override readonly naam = 'Hoosblik';
  static override readonly ids = ['hoosblik'];
}
