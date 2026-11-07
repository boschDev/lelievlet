import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Voorplecht (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Voorplecht extends Onderdeel {
  static override readonly naam = 'Voorplecht';
  static override readonly groep = ModelGroep.Romp;
  static override readonly ids = ['voorplecht'];
}
