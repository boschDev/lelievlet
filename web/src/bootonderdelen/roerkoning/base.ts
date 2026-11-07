import { Onderdeel } from '../onderdeel.ts';

// Roerkoning (roer), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Roerkoning extends Onderdeel {
  static override readonly naam = 'Roerkoning';
  static override readonly ids = ['roerkoning'];
}
