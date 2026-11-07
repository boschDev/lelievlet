import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Schoothoek fok (zeil), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class FokSchoothoek extends Onderdeel {
  static override readonly naam = 'Schoothoek fok';
  static override readonly groep = ModelGroep.Zeil;
  static override readonly ids = ['fok_schoothoek'];
}
