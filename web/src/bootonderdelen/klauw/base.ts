import { Onderdeel } from '../onderdeel.ts';

// Klauw (rondhout), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Klauw extends Onderdeel {
  static override readonly naam = 'Klauw';
  static override readonly ids = ['klauw'];
}
