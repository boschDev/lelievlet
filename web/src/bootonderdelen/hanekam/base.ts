import { Onderdeel } from '../onderdeel.ts';

// Hanenkam (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Hanekam extends Onderdeel {
  static override readonly naam = 'Hanenkam';
  static override readonly ids = ['hanekam'];
}
