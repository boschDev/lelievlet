import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Ring van de pelikaanhaak (staand_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class PelikaanhaakRing extends Onderdeel {
  static override readonly naam = 'Ring van de pelikaanhaak';
  static override readonly groep = ModelGroep.StaandWant;
  static override readonly ids = ['pelikaanhaak_ring'];
}
