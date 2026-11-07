import { Onderdeel } from '../onderdeel.ts';

// Blok fokkenschoot (lopend_want, bakboord en stuurboord), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BlokFokkenschoot extends Onderdeel {
  static override readonly naam = 'Blok fokkenschoot';
  static override readonly ids = ['blok_fokkenschoot_bb', 'blok_fokkenschoot_sb'];
}
