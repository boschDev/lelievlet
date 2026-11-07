import { Onderdeel } from '../onderdeel.ts';

// Kikkers op de mastkoker (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class KikkersMastkoker extends Onderdeel {
  static override readonly naam = 'Kikkers op de mastkoker';
  static override readonly ids = ['kikkers_mastkoker'];
}
