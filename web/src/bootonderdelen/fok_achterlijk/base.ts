import { Onderdeel } from '../onderdeel.ts';

// Achterlijk fok (zeil), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class FokAchterlijk extends Onderdeel {
  static override readonly naam = 'Achterlijk fok';
  static override readonly ids = ['fok_achterlijk'];
}
