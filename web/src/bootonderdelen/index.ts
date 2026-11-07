import type { ModelDeel, Onderdeel, OnderdeelKlasse, Versie } from './onderdeel.ts';
import { Achterdek } from './achterdek/index.ts';
import { Achterlandvast } from './achterlandvast/index.ts';
import { Achterschot } from './achterschot/index.ts';
import { Anker } from './anker/index.ts';
import { Ankerketting } from './ankerketting/index.ts';
import { Ankerlijn } from './ankerlijn/index.ts';
import { Ankeroog } from './ankeroog/index.ts';
import { Bakskist } from './bakskist/index.ts';
import { BakskistBeslag } from './bakskist_beslag/index.ts';
import { BakskistDeksel } from './bakskist_deksel/index.ts';
import { BakskistHandvatten } from './bakskist_handvatten/index.ts';
import { Berghout } from './berghout/index.ts';
import { BeslagGaffel } from './beslag_gaffel/index.ts';
import { BlokFokkenschoot } from './blok_fokkenschoot/index.ts';
import { BlokFokkenval } from './blok_fokkenval/index.ts';
import { BlokGrootschootGiek } from './blok_grootschoot_giek/index.ts';
import { BlokGrootschootKuip } from './blok_grootschoot_kuip/index.ts';
import { BlokKlauwval } from './blok_klauwval/index.ts';
import { BlokPiekenval } from './blok_piekenval/index.ts';
import { Boegrand } from './boegrand/index.ts';
import { Boegspriet } from './boegspriet/index.ts';
import { BoegsprietBouten } from './boegspriet_bouten/index.ts';
import { Boeisel } from './boeisel/index.ts';
import { BorghaakSpiegel } from './borghaak_spiegel/index.ts';
import { Borgkettinkje } from './borgkettinkje/index.ts';
import { BorglijntjeLummelbout } from './borglijntje_lummelbout/index.ts';
import { BorgoogRoer } from './borgoog_roer/index.ts';
import { Buikdenning } from './buikdenning/index.ts';
import { Dekcontour } from './dekcontour/index.ts';
import { Dodemanseind } from './dodemanseind/index.ts';
import { DoftAchter } from './doft_achter/index.ts';
import { DoftVoor } from './doft_voor/index.ts';
import { Dofthouders } from './dofthouders/index.ts';
import { Dolboord } from './dolboord/index.ts';
import { Dolpotten } from './dolpotten/index.ts';
import { EhboKoffer } from './ehbo_koffer/index.ts';
import { Fok } from './fok/index.ts';
import { FokAchterlijk } from './fok_achterlijk/index.ts';
import { FokHalshoek } from './fok_halshoek/index.ts';
import { FokOnderlijk } from './fok_onderlijk/index.ts';
import { FokSchoothoek } from './fok_schoothoek/index.ts';
import { FokTophoek } from './fok_tophoek/index.ts';
import { FokVoorlijk } from './fok_voorlijk/index.ts';
import { Fokkenschoot } from './fokkenschoot/index.ts';
import { Fokkenval } from './fokkenval/index.ts';
import { Gaffel } from './gaffel/index.ts';
import { Gaffeldraad } from './gaffeldraad/index.ts';
import { Giek } from './giek/index.ts';
import { Grendelbout } from './grendelbout/index.ts';
import { Grootschoot } from './grootschoot/index.ts';
import { Grootschootoog } from './grootschootoog/index.ts';
import { GrootschootoogSteun } from './grootschootoog_steun/index.ts';
import { Grootzeil } from './grootzeil/index.ts';
import { GrootzeilAchterlijk } from './grootzeil_achterlijk/index.ts';
import { GrootzeilBovenlijk } from './grootzeil_bovenlijk/index.ts';
import { GrootzeilHalshoek } from './grootzeil_halshoek/index.ts';
import { GrootzeilKlauwhoek } from './grootzeil_klauwhoek/index.ts';
import { GrootzeilOnderlijk } from './grootzeil_onderlijk/index.ts';
import { GrootzeilSchoothoek } from './grootzeil_schoothoek/index.ts';
import { GrootzeilTophoek } from './grootzeil_tophoek/index.ts';
import { GrootzeilVoorlijk } from './grootzeil_voorlijk/index.ts';
import { GrootzeilZeilnummer } from './grootzeil_zeilnummer/index.ts';
import { GrootzeilZeilteken } from './grootzeil_zeilteken/index.ts';
import { Hanekam } from './hanekam/index.ts';
import { Hanepootloper } from './hanepootloper/index.ts';
import { HarpjeFokkenval } from './harpje_fokkenval/index.ts';
import { HarpjeStrop } from './harpje_strop/index.ts';
import { Harpjes } from './harpjes/index.ts';
import { HarpjesFok } from './harpjes_fok/index.ts';
import { HarpjesMast } from './harpjes_mast/index.ts';
import { HarpjesWantketting } from './harpjes_wantketting/index.ts';
import { Helmstok } from './helmstok/index.ts';
import { Hijsogen } from './hijsogen/index.ts';
import { Hommerring } from './hommerring/index.ts';
import { Hoosblik } from './hoosblik/index.ts';
import { KettinkjeFok } from './kettinkje_fok/index.ts';
import { KikkersMastkoker } from './kikkers_mastkoker/index.ts';
import { KikkersVoordek } from './kikkers_voordek/index.ts';
import { Kim } from './kim/index.ts';
import { Klauw } from './klauw/index.ts';
import { Klauwval } from './klauwval/index.ts';
import { Landvastogen } from './landvastogen/index.ts';
import { Leiogen } from './leiogen/index.ts';
import { Leuvers } from './leuvers/index.ts';
import { Lummelbeslag } from './lummelbeslag/index.ts';
import { Lummelbout } from './lummelbout/index.ts';
import { MarllijnGaffel } from './marllijn_gaffel/index.ts';
import { MarllijnGiek } from './marllijn_giek/index.ts';
import { Mast } from './mast/index.ts';
import { MastbandLummel } from './mastband_lummel/index.ts';
import { Mastbout } from './mastbout/index.ts';
import { Mastkoker } from './mastkoker/index.ts';
import { Masttopring } from './masttopring/index.ts';
import { Meerpen } from './meerpen/index.ts';
import { Mikhouders } from './mikhouders/index.ts';
import { PelikaanhaakRing } from './pelikaanhaak_ring/index.ts';
import { Pettenlijntje } from './pettenlijntje/index.ts';
import { Piekenval } from './piekenval/index.ts';
import { Riem } from './riem/index.ts';
import { Rijglijn } from './rijglijn/index.ts';
import { Roerblad } from './roerblad/index.ts';
import { Roerhaken } from './roerhaken/index.ts';
import { Roerkoning } from './roerkoning/index.ts';
import { Roerkop } from './roerkop/index.ts';
import { Scheg } from './scheg/index.ts';
import { Schootring } from './schootring/index.ts';
import { Sleepogen } from './sleepogen/index.ts';
import { SleepoogBoeg } from './sleepoog_boeg/index.ts';
import { Spanten } from './spanten/index.ts';
import { Spiegel } from './spiegel/index.ts';
import { Spiegelrand } from './spiegelrand/index.ts';
import { StropGaffel } from './strop_gaffel/index.ts';
import { Vingerlingen } from './vingerlingen/index.ts';
import { Vlak } from './vlak/index.ts';
import { Voordek } from './voordek/index.ts';
import { Voorlandvast } from './voorlandvast/index.ts';
import { Voorplecht } from './voorplecht/index.ts';
import { Voorschot } from './voorschot/index.ts';
import { Voorstag } from './voorstag/index.ts';
import { Voorstagspanner } from './voorstagspanner/index.ts';
import { Want } from './want/index.ts';
import { Wantketting } from './wantketting/index.ts';
import { Wantputting } from './wantputting/index.ts';
import { Wervel } from './wervel/index.ts';
import { Wrikgat } from './wrikgat/index.ts';
import { Zeillatten } from './zeillatten/index.ts';
import { Zwaard } from './zwaard/index.ts';
import { Zwaardkast } from './zwaardkast/index.ts';
import { ZwaardloperBoven } from './zwaardloper_boven/index.ts';
import { ZwaardloperOnder } from './zwaardloper_onder/index.ts';
import { Zwaardstrippen } from './zwaardstrippen/index.ts';

// Every part the model renders, a class each (a part on both sides, _bb and _sb, is one). Most have only their base
// yet; riem has versions. A new version: a file beside the part's base.ts, and its index.ts gives versies, standaard
// and maakVersies() (see riem/). A new part: a folder with a base.ts and an index.ts, and its class here.
export const ONDERDELEN = {
  achterdek: Achterdek,
  achterlandvast: Achterlandvast,
  achterschot: Achterschot,
  anker: Anker,
  ankerketting: Ankerketting,
  ankerlijn: Ankerlijn,
  ankeroog: Ankeroog,
  bakskist: Bakskist,
  bakskist_beslag: BakskistBeslag,
  bakskist_deksel: BakskistDeksel,
  bakskist_handvatten: BakskistHandvatten,
  berghout: Berghout,
  beslag_gaffel: BeslagGaffel,
  blok_fokkenschoot: BlokFokkenschoot,
  blok_fokkenval: BlokFokkenval,
  blok_grootschoot_giek: BlokGrootschootGiek,
  blok_grootschoot_kuip: BlokGrootschootKuip,
  blok_klauwval: BlokKlauwval,
  blok_piekenval: BlokPiekenval,
  boegrand: Boegrand,
  boegspriet: Boegspriet,
  boegspriet_bouten: BoegsprietBouten,
  boeisel: Boeisel,
  borghaak_spiegel: BorghaakSpiegel,
  borgkettinkje: Borgkettinkje,
  borglijntje_lummelbout: BorglijntjeLummelbout,
  borgoog_roer: BorgoogRoer,
  buikdenning: Buikdenning,
  dekcontour: Dekcontour,
  dodemanseind: Dodemanseind,
  doft_achter: DoftAchter,
  doft_voor: DoftVoor,
  dofthouders: Dofthouders,
  dolboord: Dolboord,
  dolpotten: Dolpotten,
  ehbo_koffer: EhboKoffer,
  fok: Fok,
  fok_achterlijk: FokAchterlijk,
  fok_halshoek: FokHalshoek,
  fok_onderlijk: FokOnderlijk,
  fok_schoothoek: FokSchoothoek,
  fok_tophoek: FokTophoek,
  fok_voorlijk: FokVoorlijk,
  fokkenschoot: Fokkenschoot,
  fokkenval: Fokkenval,
  gaffel: Gaffel,
  gaffeldraad: Gaffeldraad,
  giek: Giek,
  grendelbout: Grendelbout,
  grootschoot: Grootschoot,
  grootschootoog: Grootschootoog,
  grootschootoog_steun: GrootschootoogSteun,
  grootzeil: Grootzeil,
  grootzeil_achterlijk: GrootzeilAchterlijk,
  grootzeil_bovenlijk: GrootzeilBovenlijk,
  grootzeil_halshoek: GrootzeilHalshoek,
  grootzeil_klauwhoek: GrootzeilKlauwhoek,
  grootzeil_onderlijk: GrootzeilOnderlijk,
  grootzeil_schoothoek: GrootzeilSchoothoek,
  grootzeil_tophoek: GrootzeilTophoek,
  grootzeil_voorlijk: GrootzeilVoorlijk,
  grootzeil_zeilnummer: GrootzeilZeilnummer,
  grootzeil_zeilteken: GrootzeilZeilteken,
  hanekam: Hanekam,
  hanepootloper: Hanepootloper,
  harpje_fokkenval: HarpjeFokkenval,
  harpje_strop: HarpjeStrop,
  harpjes: Harpjes,
  harpjes_fok: HarpjesFok,
  harpjes_mast: HarpjesMast,
  harpjes_wantketting: HarpjesWantketting,
  helmstok: Helmstok,
  hijsogen: Hijsogen,
  hommerring: Hommerring,
  hoosblik: Hoosblik,
  kettinkje_fok: KettinkjeFok,
  kikkers_mastkoker: KikkersMastkoker,
  kikkers_voordek: KikkersVoordek,
  kim: Kim,
  klauw: Klauw,
  klauwval: Klauwval,
  landvastogen: Landvastogen,
  leiogen: Leiogen,
  leuvers: Leuvers,
  lummelbeslag: Lummelbeslag,
  lummelbout: Lummelbout,
  marllijn_gaffel: MarllijnGaffel,
  marllijn_giek: MarllijnGiek,
  mast: Mast,
  mastband_lummel: MastbandLummel,
  mastbout: Mastbout,
  mastkoker: Mastkoker,
  masttopring: Masttopring,
  meerpen: Meerpen,
  mikhouders: Mikhouders,
  pelikaanhaak_ring: PelikaanhaakRing,
  pettenlijntje: Pettenlijntje,
  piekenval: Piekenval,
  riem: Riem,
  rijglijn: Rijglijn,
  roerblad: Roerblad,
  roerhaken: Roerhaken,
  roerkoning: Roerkoning,
  roerkop: Roerkop,
  scheg: Scheg,
  schootring: Schootring,
  sleepogen: Sleepogen,
  sleepoog_boeg: SleepoogBoeg,
  spanten: Spanten,
  spiegel: Spiegel,
  spiegelrand: Spiegelrand,
  strop_gaffel: StropGaffel,
  vingerlingen: Vingerlingen,
  vlak: Vlak,
  voordek: Voordek,
  voorlandvast: Voorlandvast,
  voorplecht: Voorplecht,
  voorschot: Voorschot,
  voorstag: Voorstag,
  voorstagspanner: Voorstagspanner,
  want: Want,
  wantketting: Wantketting,
  wantputting: Wantputting,
  wervel: Wervel,
  wrikgat: Wrikgat,
  zeillatten: Zeillatten,
  zwaard: Zwaard,
  zwaardkast: Zwaardkast,
  zwaardloper_boven: ZwaardloperBoven,
  zwaardloper_onder: ZwaardloperOnder,
  zwaardstrippen: Zwaardstrippen,
} satisfies Record<string, OnderdeelKlasse>;

export type OnderdeelNaam = keyof typeof ONDERDELEN;
/** Which version of which part: what a group gives (groepen.ts `onderdelen`); a part left out has its standaard. */
export type Keuze = Partial<Record<OnderdeelNaam, string>>;

const namen = Object.keys(ONDERDELEN) as OnderdeelNaam[];

/** Every part with the version it has: the one chosen, if that is one of its versions, else the standaard. */
export function volledig(keuze: Keuze | null | undefined): Record<OnderdeelNaam, string> {
  return Object.fromEntries(namen.map((naam) => {
    const onderdeel: OnderdeelKlasse = ONDERDELEN[naam];
    const gekozen = keuze?.[naam];
    return [naam, gekozen && onderdeel.versies.includes(gekozen) ? gekozen : onderdeel.standaard];
  })) as Record<OnderdeelNaam, string>;
}

/** Whether two choices put the same versions on the boat. */
export const zelfde = (a: Keuze | null | undefined, b: Keuze | null | undefined): boolean => {
  const va = volledig(a); const vb = volledig(b);
  return namen.every((naam) => va[naam] === vb[naam]);
};

/** The parts of this model, each its class, with their versions; set() puts on what is chosen, and takes off what
 *  was on. A part the model does not have is left out. */
export function makeBootonderdelen(delen: ModelDeel[]): {
  onderdelen: Map<OnderdeelNaam, Onderdeel>;
  set(keuze: Keuze | null | undefined): void;
} {
  const onderdelen = new Map<OnderdeelNaam, Onderdeel>();
  const versies = new Map<OnderdeelNaam, Record<string, Versie>>();
  for (const naam of namen) {
    const onderdeel = new (ONDERDELEN[naam] as OnderdeelKlasse)(delen);
    if (!onderdeel.delen.length) continue;
    onderdelen.set(naam, onderdeel);
    versies.set(naam, onderdeel.maakVersies());
  }
  // what the model has when it is loaded: every part in its standaard
  const actief = volledig(null);
  return {
    onderdelen,
    set(keuze) {
      const gewenst = volledig(keuze);
      for (const [naam, vs] of versies) {
        if (actief[naam] === gewenst[naam]) continue;
        vs[actief[naam]]?.uit();
        vs[gewenst[naam]]?.aan();
        actief[naam] = gewenst[naam];
      }
    },
  };
}
