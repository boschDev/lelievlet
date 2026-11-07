import { Onderdeel } from '../onderdeel.ts';

// Roerblad (roer), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Roerblad extends Onderdeel {
  static override readonly naam = 'Roerblad';
  static override readonly ids = ['roerblad'];
}
