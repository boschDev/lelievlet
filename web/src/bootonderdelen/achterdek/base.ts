import { Onderdeel } from '../onderdeel.ts';

// Achterdek (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Achterdek extends Onderdeel {
  static override readonly naam = 'Achterdek';
  static override readonly ids = ['achterdek'];
}
