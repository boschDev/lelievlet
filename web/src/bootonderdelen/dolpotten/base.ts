import { Onderdeel } from '../onderdeel.ts';

// Dolpotten (beslag, bakboord en stuurboord), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Dolpotten extends Onderdeel {
  static override readonly naam = 'Dolpotten';
  static override readonly ids = ['dolpotten_bb', 'dolpotten_sb'];
}
