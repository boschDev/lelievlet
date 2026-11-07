import { Onderdeel } from '../onderdeel.ts';

// Voordek (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Voordek extends Onderdeel {
  static override readonly naam = 'Voordek';
  static override readonly ids = ['voordek'];
}
