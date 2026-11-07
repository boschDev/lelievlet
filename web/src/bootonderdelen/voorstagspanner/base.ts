import { Onderdeel } from '../onderdeel.ts';

// Voorstagspanner met pelikaanhaak (staand_want), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Voorstagspanner extends Onderdeel {
  static override readonly naam = 'Voorstagspanner met pelikaanhaak';
  static override readonly ids = ['voorstagspanner'];
}
