import { Onderdeel } from '../onderdeel.ts';

// Landvastogen (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Landvastogen extends Onderdeel {
  static override readonly naam = 'Landvastogen';
  static override readonly ids = ['landvastogen'];
}
