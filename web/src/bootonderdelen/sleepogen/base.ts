import { ModelGroep, Onderdeel } from '../onderdeel.ts';

// Sleepogen (beslag): the two eyes on the outside of the spiegel, for towing and being towed (pipeline/sleepogen.py).
// The sleepoog on the stem is a part of its own (sleepoog_boeg/).

export enum SleepogenVersie {
  Base = 'base',             // as the model has them
  Geen = 'geen',             // none: the spiegel bare on the outside
}

export class SleepogenBase extends Onderdeel {
  static override readonly naam = 'Sleepogen';
  static override readonly groep = ModelGroep.Beslag;
  static override readonly ids = ['sleepogen'];
}
