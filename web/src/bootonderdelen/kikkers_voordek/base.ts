import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Kikkers op het voordek (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class KikkersVoordek extends Onderdeel {
  static override readonly naam = 'Kikkers op het voordek';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['kikkers_voordek'];
}
