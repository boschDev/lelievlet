import { Onderdeel } from '../onderdeel.ts';

// Spanten (wrangen) (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Spanten extends Onderdeel {
  static override readonly naam = 'Spanten (wrangen)';
  static override readonly ids = ['spanten'];
}
