import { Onderdeel } from '../onderdeel.ts';

// Leuvers (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Leuvers extends Onderdeel {
  static override readonly naam = 'Leuvers';
  static override readonly ids = ['leuvers'];
}
