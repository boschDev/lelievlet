import { Onderdeel } from '../onderdeel.ts';

// Blok klauwval (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BlokKlauwval extends Onderdeel {
  static override readonly naam = 'Blok klauwval';
  static override readonly ids = ['blok_klauwval'];
}
