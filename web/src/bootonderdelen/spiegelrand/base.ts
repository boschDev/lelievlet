import { Onderdeel } from '../onderdeel.ts';

// Dolboord over de spiegel (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Spiegelrand extends Onderdeel {
  static override readonly naam = 'Dolboord over de spiegel';
  static override readonly ids = ['spiegelrand'];
}
