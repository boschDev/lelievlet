import { Onderdeel } from '../onderdeel.ts';

// Blok piekenval (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BlokPiekenval extends Onderdeel {
  static override readonly naam = 'Blok piekenval';
  static override readonly ids = ['blok_piekenval'];
}
