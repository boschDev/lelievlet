import { Onderdeel } from '../onderdeel.ts';

// Wervel (rondhout), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Wervel extends Onderdeel {
  static override readonly naam = 'Wervel';
  static override readonly ids = ['wervel'];
}
