import { Onderdeel } from '../onderdeel.ts';

// Mastkoker (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Mastkoker extends Onderdeel {
  static override readonly naam = 'Mastkoker';
  static override readonly ids = ['mastkoker'];
}
