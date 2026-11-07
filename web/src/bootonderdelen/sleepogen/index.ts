import { Standaard, type Versie } from '../onderdeel.ts';
import { SleepogenBase, SleepogenVersie } from './base.ts';
import { Geen } from './geen.ts';

export { SleepogenVersie };

export class Sleepogen extends SleepogenBase {
  static override readonly versies = Object.values(SleepogenVersie);
  static override readonly standaard = SleepogenVersie.Base;
  override maakVersies(): Record<SleepogenVersie, Versie> {
    return { [SleepogenVersie.Base]: new Standaard(this), [SleepogenVersie.Geen]: new Geen(this) };
  }
}
