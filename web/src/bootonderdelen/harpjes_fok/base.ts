import { Onderdeel } from '../onderdeel.ts';

// Harpjes (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class HarpjesFok extends Onderdeel {
  static override readonly naam = 'Harpjes';
  static override readonly ids = ['harpjes_fok'];
}
