import { Onderdeel } from '../onderdeel.ts';

// Steun grootschootoog (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class GrootschootoogSteun extends Onderdeel {
  static override readonly naam = 'Steun grootschootoog';
  static override readonly ids = ['grootschootoog_steun'];
}
