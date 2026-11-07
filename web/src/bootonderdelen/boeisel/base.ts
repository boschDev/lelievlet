import { Onderdeel } from '../onderdeel.ts';

// Boeisel (romp, bakboord en stuurboord), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Boeisel extends Onderdeel {
  static override readonly naam = 'Boeisel';
  static override readonly ids = ['boeisel_bb', 'boeisel_sb'];
}
