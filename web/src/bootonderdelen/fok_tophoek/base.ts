import { Onderdeel } from '../onderdeel.ts';

// Tophoek fok (zeil), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class FokTophoek extends Onderdeel {
  static override readonly naam = 'Tophoek fok';
  static override readonly ids = ['fok_tophoek'];
}
