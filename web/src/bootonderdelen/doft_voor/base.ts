import { Onderdeel } from '../onderdeel.ts';

// Voorste doft (mastdoft) (interieur), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class DoftVoor extends Onderdeel {
  static override readonly naam = 'Voorste doft (mastdoft)';
  static override readonly ids = ['doft_voor'];
}
