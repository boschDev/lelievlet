import type { Onderdeel } from '../onderdeel.ts';
import base, { riemen } from './base.ts';
import handvat from './handvat.ts';
import blad from './blad.ts';

export const riem: Onderdeel<'base' | 'handvat' | 'blad'> = {
  naam: 'Riem',
  versies: ['base', 'handvat', 'blad'],
  standaard: 'handvat',
  maak(delen) {
    const rs = riemen(delen);
    return rs.length ? { base: base(rs), handvat: handvat(rs), blad: blad(rs) } : null;
  },
};
