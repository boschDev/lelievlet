import { Onderdeel } from '../onderdeel.ts';

// Grootschootoog (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Grootschootoog extends Onderdeel {
  static override readonly naam = 'Grootschootoog';
  static override readonly ids = ['grootschootoog'];
}
