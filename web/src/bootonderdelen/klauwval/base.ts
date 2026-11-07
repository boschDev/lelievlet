import { Onderdeel } from '../onderdeel.ts';

// Klauwval (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Klauwval extends Onderdeel {
  static override readonly naam = 'Klauwval';
  static override readonly ids = ['klauwval'];
}
