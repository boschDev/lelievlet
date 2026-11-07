import { Onderdeel } from '../onderdeel.ts';

// Schoothoek grootzeil (zeil), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class GrootzeilSchoothoek extends Onderdeel {
  static override readonly naam = 'Schoothoek grootzeil';
  static override readonly ids = ['grootzeil_schoothoek'];
}
