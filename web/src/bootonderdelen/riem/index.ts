import type { Versie } from '../onderdeel.ts';
import { Kaal, RiemBase, RiemVersie } from './base.ts';
import { Handvat } from './handvat.ts';
import { Blad } from './blad.ts';

export { RiemVersie };

export class Riem extends RiemBase {
  static override readonly versies = Object.values(RiemVersie);
  static override readonly standaard = RiemVersie.Handvat;
  override maakVersies(): Record<RiemVersie, Versie> {
    return { [RiemVersie.Base]: new Kaal(this), [RiemVersie.Handvat]: new Handvat(this), [RiemVersie.Blad]: new Blad(this) };
  }
}
