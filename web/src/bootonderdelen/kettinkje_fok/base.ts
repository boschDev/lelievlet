import { Onderdeel } from '../onderdeel.ts';

// Kettinkje (beslag), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class KettinkjeFok extends Onderdeel {
  static override readonly naam = 'Kettinkje';
  static override readonly ids = ['kettinkje_fok'];
}
