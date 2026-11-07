import { Onderdeel } from '../onderdeel.ts';

// Wantketting (staand_want, bakboord en stuurboord), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Wantketting extends Onderdeel {
  static override readonly naam = 'Wantketting';
  static override readonly ids = ['wantketting_bb', 'wantketting_sb'];
}
