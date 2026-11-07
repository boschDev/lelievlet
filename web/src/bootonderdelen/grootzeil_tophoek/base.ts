import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Tophoek grootzeil (piek) (zeil), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class GrootzeilTophoek extends Onderdeel {
  static override readonly naam = 'Tophoek grootzeil (piek)';
  static override readonly groep = ModelGroep.Zeil;
  static override readonly ids = ['grootzeil_tophoek'];
}
