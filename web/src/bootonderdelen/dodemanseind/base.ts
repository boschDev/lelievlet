import { Onderdeel } from '../onderdeel.ts';

// Dodemanseind (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Dodemanseind extends Onderdeel {
  static override readonly naam = 'Dodemanseind';
  static override readonly ids = ['dodemanseind'];
}
