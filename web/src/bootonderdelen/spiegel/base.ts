import { Onderdeel } from '../onderdeel.ts';

// Spiegel (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Spiegel extends Onderdeel {
  static override readonly naam = 'Spiegel';
  static override readonly ids = ['spiegel'];
}
