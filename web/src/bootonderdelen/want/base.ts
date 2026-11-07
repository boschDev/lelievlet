import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Bakboord zijstag (staand_want, bakboord en stuurboord), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Want extends Onderdeel {
  static override readonly naam = 'Bakboord zijstag';
  static override readonly groep = ModelGroep.StaandWant;
  static override readonly ids = ['want_bb', 'want_sb'];
}
