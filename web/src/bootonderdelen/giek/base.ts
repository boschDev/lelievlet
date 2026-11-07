import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Giek (rondhout), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Giek extends Onderdeel {
  static override readonly naam = 'Giek';
  static override readonly groep = ModelGroep.Rondhout;
  static override readonly ids = ['giek'];
}
