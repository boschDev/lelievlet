import { Onderdeel } from '../onderdeel.ts';

// Ankerlijn (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Ankerlijn extends Onderdeel {
  static override readonly naam = 'Ankerlijn';
  static override readonly ids = ['ankerlijn'];
}
