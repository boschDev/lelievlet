import type { Versie } from '../onderdeel.ts';
import { Kaal, RiemBase } from './base.ts';
import { Handvat } from './handvat.ts';
import { Blad } from './blad.ts';

export class Riem extends RiemBase {
  static override readonly versies = ['base', 'handvat', 'blad'] as const;
  static override readonly standaard = 'handvat';
  override maakVersies(): Record<(typeof Riem.versies)[number], Versie> {
    return { base: new Kaal(this), handvat: new Handvat(this), blad: new Blad(this) };
  }
}
