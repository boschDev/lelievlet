import { Onderdeel } from '../onderdeel.ts';

// Harpje (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class HarpjeStrop extends Onderdeel {
  static override readonly naam = 'Harpje';
  static override readonly ids = ['harpje_strop'];
}
