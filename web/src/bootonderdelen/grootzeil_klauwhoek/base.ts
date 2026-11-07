import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Klauwhoek (zeil), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class GrootzeilKlauwhoek extends Onderdeel {
  static override readonly naam = 'Klauwhoek';
  static override readonly groep = ModelGroep.Zeil;
  static override readonly ids = ['grootzeil_klauwhoek'];
}
