import { Onderdeel } from '../onderdeel.ts';

// Anker (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Anker extends Onderdeel {
  static override readonly naam = 'Anker';
  static override readonly ids = ['anker'];
}
