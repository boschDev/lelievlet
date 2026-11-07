import { Onderdeel } from '../onderdeel.ts';

// Blok fokkenval (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BlokFokkenval extends Onderdeel {
  static override readonly naam = 'Blok fokkenval';
  static override readonly ids = ['blok_fokkenval'];
}
