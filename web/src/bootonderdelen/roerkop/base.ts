import { Onderdeel } from '../onderdeel.ts';

// Roerkop (helmhoutbeslag) (roer), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Roerkop extends Onderdeel {
  static override readonly naam = 'Roerkop (helmhoutbeslag)';
  static override readonly ids = ['roerkop'];
}
