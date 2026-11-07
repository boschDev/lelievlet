import { Versie } from '../onderdeel.ts';
import type { RiemBase } from './base.ts';

/** Handvat: the band in the bakskleur near the handle, as the model has it (the standaard). */
export class Handvat extends Versie<RiemBase> {
  readonly naam = 'Markering bij het handvat';
  override aan(): void { this.onderdeel.zonderHandvatBand(false); }
  override uit(): void {}
}
