import { Onderdeel } from '../onderdeel.ts';

// Marllijn (gaffel) (lopend_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class MarllijnGaffel extends Onderdeel {
  static override readonly naam = 'Marllijn (gaffel)';
  static override readonly ids = ['marllijn_gaffel'];
}
