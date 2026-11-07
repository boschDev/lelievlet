import { Onderdeel } from '../onderdeel.ts';

// Leiogen fokkenschoot (beslag, bakboord en stuurboord), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Leiogen extends Onderdeel {
  static override readonly naam = 'Leiogen fokkenschoot';
  static override readonly ids = ['leiogen_bb', 'leiogen_sb'];
}
