import { Onderdeel } from '../onderdeel.ts';

// Voorstag met spanner (staand_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Voorstag extends Onderdeel {
  static override readonly naam = 'Voorstag met spanner';
  static override readonly ids = ['voorstag'];
}
