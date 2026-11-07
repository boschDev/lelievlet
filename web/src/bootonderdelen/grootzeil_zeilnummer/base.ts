import { Onderdeel } from '../onderdeel.ts';

// Zeilnummer (zeil), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class GrootzeilZeilnummer extends Onderdeel {
  static override readonly naam = 'Zeilnummer';
  static override readonly ids = ['grootzeil_zeilnummer'];
}
