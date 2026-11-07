import { Versie } from '../onderdeel.ts';
import type { SleepogenBase } from './base.ts';

/** Geen: no sleepogen on the spiegel. Out of sight, and so not picked either (main.ts picks visible meshes only). */
export class Geen extends Versie<SleepogenBase> {
  readonly naam = 'Geen sleepogen';
  override aan(): void { this.onderdeel.verberg(); }
}
