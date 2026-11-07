import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Schot voorste luchtkast (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Voorschot extends Onderdeel {
  static override readonly naam = 'Schot voorste luchtkast';
  static override readonly groep = ModelGroep.Romp;
  static override readonly ids = ['voorschot'];
}
