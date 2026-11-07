import { Onderdeel } from '../onderdeel.ts';

// Dwarsbuis voordek (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Boegrand extends Onderdeel {
  static override readonly naam = 'Dwarsbuis voordek';
  static override readonly ids = ['boegrand'];
}
