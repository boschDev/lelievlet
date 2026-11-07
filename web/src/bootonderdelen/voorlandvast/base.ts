import { Onderdeel } from '../onderdeel.ts';

// Voorlandvast (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Voorlandvast extends Onderdeel {
  static override readonly naam = 'Voorlandvast';
  static override readonly ids = ['voorlandvast'];
}
