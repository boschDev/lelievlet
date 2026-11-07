import { Onderdeel } from '../onderdeel.ts';

// Contour boeisel (romp), as the model has it. A version that changes its shape goes in a file of its own beside
// this one, and in index.ts with versies and standaard (see riem/).

export class Dekcontour extends Onderdeel {
  static override readonly naam = 'Contour boeisel';
  static override readonly ids = ['dekcontour'];
}
