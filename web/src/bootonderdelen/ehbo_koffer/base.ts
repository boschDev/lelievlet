import { Onderdeel } from '../onderdeel.ts';

// EHBO-koffer (interieur), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class EhboKoffer extends Onderdeel {
  static override readonly naam = 'EHBO-koffer';
  static override readonly ids = ['ehbo_koffer'];
}
