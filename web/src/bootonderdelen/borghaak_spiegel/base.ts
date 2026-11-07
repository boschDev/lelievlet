import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Haak van het borgkettinkje (roer), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class BorghaakSpiegel extends Onderdeel {
  static override readonly naam = 'Haak van het borgkettinkje';
  static override readonly groep = ModelGroep.Roer;
  static override readonly ids = ['borghaak_spiegel'];
}
