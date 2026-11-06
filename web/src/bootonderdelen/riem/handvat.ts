import type { Versie } from '../onderdeel.ts';
import { type Riem, zonderHandvatBand } from './base.ts';

/** Handvat: the band in the bakskleur near the handle, as the model has it (the standaard). */
export default function handvat(rs: Riem[]): Versie {
  return {
    naam: 'Markering bij het handvat',
    aan: () => zonderHandvatBand(rs, false),
    uit: () => {},
  };
}
