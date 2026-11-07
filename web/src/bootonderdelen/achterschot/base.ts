import { Onderdeel } from '../onderdeel.ts';

// Schot achterste luchtkast (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Achterschot extends Onderdeel {
  static override readonly naam = 'Schot achterste luchtkast';
  static override readonly ids = ['achterschot'];
}
