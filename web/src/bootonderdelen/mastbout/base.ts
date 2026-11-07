import { Onderdeel } from '../onderdeel.ts';

// Mastbout (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Mastbout extends Onderdeel {
  static override readonly naam = 'Mastbout';
  static override readonly ids = ['mastbout'];
}
