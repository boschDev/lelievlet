import { Standaard, type Versie } from '../onderdeel.ts';
import { Boord, LandvastogenBase, LandvastogenVersie } from './base.ts';
import { Kikkers } from './kikkers.ts';

export { LandvastogenVersie };

export class Landvastogen extends LandvastogenBase {
  static override readonly versies = Object.values(LandvastogenVersie);
  static override readonly standaard = LandvastogenVersie.Base;
  override maakVersies(): Record<LandvastogenVersie, Versie> {
    return {
      [LandvastogenVersie.Base]: new Standaard(this),
      [LandvastogenVersie.Kikkers]: new Kikkers(this, [Boord.Bakboord, Boord.Stuurboord], 'Kikkers in plaats van de landvastogen'),
      [LandvastogenVersie.KikkerBakboord]: new Kikkers(this, [Boord.Bakboord], 'Kikker aan bakboord, landvastoog aan stuurboord'),
      [LandvastogenVersie.KikkerStuurboord]: new Kikkers(this, [Boord.Stuurboord], 'Landvastoog aan bakboord, kikker aan stuurboord'),
    };
  }
}
