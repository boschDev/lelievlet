import type { ModelDeel, Onderdeel, Versie } from './onderdeel.ts';
import { achterdek } from './achterdek/index.ts';
import { achterlandvast } from './achterlandvast/index.ts';
import { achterschot } from './achterschot/index.ts';
import { anker } from './anker/index.ts';
import { ankerketting } from './ankerketting/index.ts';
import { ankerlijn } from './ankerlijn/index.ts';
import { ankeroog } from './ankeroog/index.ts';
import { bakskist } from './bakskist/index.ts';
import { bakskist_beslag } from './bakskist_beslag/index.ts';
import { bakskist_deksel } from './bakskist_deksel/index.ts';
import { bakskist_handvatten } from './bakskist_handvatten/index.ts';
import { berghout } from './berghout/index.ts';
import { beslag_gaffel } from './beslag_gaffel/index.ts';
import { blok_fokkenschoot } from './blok_fokkenschoot/index.ts';
import { blok_fokkenval } from './blok_fokkenval/index.ts';
import { blok_grootschoot_giek } from './blok_grootschoot_giek/index.ts';
import { blok_grootschoot_kuip } from './blok_grootschoot_kuip/index.ts';
import { blok_klauwval } from './blok_klauwval/index.ts';
import { blok_piekenval } from './blok_piekenval/index.ts';
import { boegrand } from './boegrand/index.ts';
import { boegspriet } from './boegspriet/index.ts';
import { boegspriet_bouten } from './boegspriet_bouten/index.ts';
import { boeisel } from './boeisel/index.ts';
import { borghaak_spiegel } from './borghaak_spiegel/index.ts';
import { borgkettinkje } from './borgkettinkje/index.ts';
import { borglijntje_lummelbout } from './borglijntje_lummelbout/index.ts';
import { borgoog_roer } from './borgoog_roer/index.ts';
import { buikdenning } from './buikdenning/index.ts';
import { dekcontour } from './dekcontour/index.ts';
import { dodemanseind } from './dodemanseind/index.ts';
import { doft_achter } from './doft_achter/index.ts';
import { doft_voor } from './doft_voor/index.ts';
import { dofthouders } from './dofthouders/index.ts';
import { dolboord } from './dolboord/index.ts';
import { dolpotten } from './dolpotten/index.ts';
import { ehbo_koffer } from './ehbo_koffer/index.ts';
import { fok } from './fok/index.ts';
import { fok_achterlijk } from './fok_achterlijk/index.ts';
import { fok_halshoek } from './fok_halshoek/index.ts';
import { fok_onderlijk } from './fok_onderlijk/index.ts';
import { fok_schoothoek } from './fok_schoothoek/index.ts';
import { fok_tophoek } from './fok_tophoek/index.ts';
import { fok_voorlijk } from './fok_voorlijk/index.ts';
import { fokkenschoot } from './fokkenschoot/index.ts';
import { fokkenval } from './fokkenval/index.ts';
import { gaffel } from './gaffel/index.ts';
import { gaffeldraad } from './gaffeldraad/index.ts';
import { giek } from './giek/index.ts';
import { grendelbout } from './grendelbout/index.ts';
import { grootschoot } from './grootschoot/index.ts';
import { grootschootoog } from './grootschootoog/index.ts';
import { grootschootoog_steun } from './grootschootoog_steun/index.ts';
import { grootzeil } from './grootzeil/index.ts';
import { grootzeil_achterlijk } from './grootzeil_achterlijk/index.ts';
import { grootzeil_bovenlijk } from './grootzeil_bovenlijk/index.ts';
import { grootzeil_halshoek } from './grootzeil_halshoek/index.ts';
import { grootzeil_klauwhoek } from './grootzeil_klauwhoek/index.ts';
import { grootzeil_onderlijk } from './grootzeil_onderlijk/index.ts';
import { grootzeil_schoothoek } from './grootzeil_schoothoek/index.ts';
import { grootzeil_tophoek } from './grootzeil_tophoek/index.ts';
import { grootzeil_voorlijk } from './grootzeil_voorlijk/index.ts';
import { grootzeil_zeilnummer } from './grootzeil_zeilnummer/index.ts';
import { grootzeil_zeilteken } from './grootzeil_zeilteken/index.ts';
import { hanekam } from './hanekam/index.ts';
import { hanepootloper } from './hanepootloper/index.ts';
import { harpje_fokkenval } from './harpje_fokkenval/index.ts';
import { harpje_strop } from './harpje_strop/index.ts';
import { harpjes } from './harpjes/index.ts';
import { harpjes_fok } from './harpjes_fok/index.ts';
import { harpjes_mast } from './harpjes_mast/index.ts';
import { harpjes_wantketting } from './harpjes_wantketting/index.ts';
import { helmstok } from './helmstok/index.ts';
import { hijsogen } from './hijsogen/index.ts';
import { hommerring } from './hommerring/index.ts';
import { hoosblik } from './hoosblik/index.ts';
import { kettinkje_fok } from './kettinkje_fok/index.ts';
import { kikkers_mastkoker } from './kikkers_mastkoker/index.ts';
import { kikkers_voordek } from './kikkers_voordek/index.ts';
import { kim } from './kim/index.ts';
import { klauw } from './klauw/index.ts';
import { klauwval } from './klauwval/index.ts';
import { landvastogen } from './landvastogen/index.ts';
import { leiogen } from './leiogen/index.ts';
import { leuvers } from './leuvers/index.ts';
import { lummelbeslag } from './lummelbeslag/index.ts';
import { lummelbout } from './lummelbout/index.ts';
import { marllijn_gaffel } from './marllijn_gaffel/index.ts';
import { marllijn_giek } from './marllijn_giek/index.ts';
import { mast } from './mast/index.ts';
import { mastband_lummel } from './mastband_lummel/index.ts';
import { mastbout } from './mastbout/index.ts';
import { mastkoker } from './mastkoker/index.ts';
import { masttopring } from './masttopring/index.ts';
import { meerpen } from './meerpen/index.ts';
import { mikhouders } from './mikhouders/index.ts';
import { pelikaanhaak_ring } from './pelikaanhaak_ring/index.ts';
import { pettenlijntje } from './pettenlijntje/index.ts';
import { piekenval } from './piekenval/index.ts';
import { riem } from './riem/index.ts';
import { rijglijn } from './rijglijn/index.ts';
import { roerblad } from './roerblad/index.ts';
import { roerhaken } from './roerhaken/index.ts';
import { roerkoning } from './roerkoning/index.ts';
import { roerkop } from './roerkop/index.ts';
import { scheg } from './scheg/index.ts';
import { schootring } from './schootring/index.ts';
import { sleepogen } from './sleepogen/index.ts';
import { sleepoog_boeg } from './sleepoog_boeg/index.ts';
import { spanten } from './spanten/index.ts';
import { spiegel } from './spiegel/index.ts';
import { spiegelrand } from './spiegelrand/index.ts';
import { strop_gaffel } from './strop_gaffel/index.ts';
import { vingerlingen } from './vingerlingen/index.ts';
import { vlak } from './vlak/index.ts';
import { voordek } from './voordek/index.ts';
import { voorlandvast } from './voorlandvast/index.ts';
import { voorplecht } from './voorplecht/index.ts';
import { voorschot } from './voorschot/index.ts';
import { voorstag } from './voorstag/index.ts';
import { voorstagspanner } from './voorstagspanner/index.ts';
import { want } from './want/index.ts';
import { wantketting } from './wantketting/index.ts';
import { wantputting } from './wantputting/index.ts';
import { wervel } from './wervel/index.ts';
import { wrikgat } from './wrikgat/index.ts';
import { zeillatten } from './zeillatten/index.ts';
import { zwaard } from './zwaard/index.ts';
import { zwaardkast } from './zwaardkast/index.ts';
import { zwaardloper_boven } from './zwaardloper_boven/index.ts';
import { zwaardloper_onder } from './zwaardloper_onder/index.ts';
import { zwaardstrippen } from './zwaardstrippen/index.ts';

// Every part the model renders, a folder each (a part on both sides, _bb and _sb, is one). Most have only their base
// yet (alleenBase in onderdeel.ts); riem has versions. A new version: a file beside the part's base.ts, and in its
// index.ts. A new part: a folder with a base.ts and an index.ts, and its name here.
export const ONDERDELEN = {
  achterdek,
  achterlandvast,
  achterschot,
  anker,
  ankerketting,
  ankerlijn,
  ankeroog,
  bakskist,
  bakskist_beslag,
  bakskist_deksel,
  bakskist_handvatten,
  berghout,
  beslag_gaffel,
  blok_fokkenschoot,
  blok_fokkenval,
  blok_grootschoot_giek,
  blok_grootschoot_kuip,
  blok_klauwval,
  blok_piekenval,
  boegrand,
  boegspriet,
  boegspriet_bouten,
  boeisel,
  borghaak_spiegel,
  borgkettinkje,
  borglijntje_lummelbout,
  borgoog_roer,
  buikdenning,
  dekcontour,
  dodemanseind,
  doft_achter,
  doft_voor,
  dofthouders,
  dolboord,
  dolpotten,
  ehbo_koffer,
  fok,
  fok_achterlijk,
  fok_halshoek,
  fok_onderlijk,
  fok_schoothoek,
  fok_tophoek,
  fok_voorlijk,
  fokkenschoot,
  fokkenval,
  gaffel,
  gaffeldraad,
  giek,
  grendelbout,
  grootschoot,
  grootschootoog,
  grootschootoog_steun,
  grootzeil,
  grootzeil_achterlijk,
  grootzeil_bovenlijk,
  grootzeil_halshoek,
  grootzeil_klauwhoek,
  grootzeil_onderlijk,
  grootzeil_schoothoek,
  grootzeil_tophoek,
  grootzeil_voorlijk,
  grootzeil_zeilnummer,
  grootzeil_zeilteken,
  hanekam,
  hanepootloper,
  harpje_fokkenval,
  harpje_strop,
  harpjes,
  harpjes_fok,
  harpjes_mast,
  harpjes_wantketting,
  helmstok,
  hijsogen,
  hommerring,
  hoosblik,
  kettinkje_fok,
  kikkers_mastkoker,
  kikkers_voordek,
  kim,
  klauw,
  klauwval,
  landvastogen,
  leiogen,
  leuvers,
  lummelbeslag,
  lummelbout,
  marllijn_gaffel,
  marllijn_giek,
  mast,
  mastband_lummel,
  mastbout,
  mastkoker,
  masttopring,
  meerpen,
  mikhouders,
  pelikaanhaak_ring,
  pettenlijntje,
  piekenval,
  riem,
  rijglijn,
  roerblad,
  roerhaken,
  roerkoning,
  roerkop,
  scheg,
  schootring,
  sleepogen,
  sleepoog_boeg,
  spanten,
  spiegel,
  spiegelrand,
  strop_gaffel,
  vingerlingen,
  vlak,
  voordek,
  voorlandvast,
  voorplecht,
  voorschot,
  voorstag,
  voorstagspanner,
  want,
  wantketting,
  wantputting,
  wervel,
  wrikgat,
  zeillatten,
  zwaard,
  zwaardkast,
  zwaardloper_boven,
  zwaardloper_onder,
  zwaardstrippen,
} satisfies Record<string, Onderdeel>;

export type OnderdeelNaam = keyof typeof ONDERDELEN;
/** Which version of which part: what a group gives (groepen.ts `onderdelen`); a part left out has its standaard. */
export type Keuze = Partial<Record<OnderdeelNaam, string>>;

const namen = Object.keys(ONDERDELEN) as OnderdeelNaam[];

/** Every part with the version it has: the one chosen, if that is one of its versions, else the standaard. */
export function volledig(keuze: Keuze | null | undefined): Record<OnderdeelNaam, string> {
  return Object.fromEntries(namen.map((naam) => {
    const onderdeel: Onderdeel = ONDERDELEN[naam];
    const gekozen = keuze?.[naam];
    return [naam, gekozen && onderdeel.versies.includes(gekozen) ? gekozen : onderdeel.standaard];
  })) as Record<OnderdeelNaam, string>;
}

/** Whether two choices put the same versions on the boat. */
export const zelfde = (a: Keuze | null | undefined, b: Keuze | null | undefined): boolean => {
  const va = volledig(a); const vb = volledig(b);
  return namen.every((naam) => va[naam] === vb[naam]);
};

/** The parts of this model with their versions; set() puts on what is chosen, and takes off what was on. */
export function makeBootonderdelen(delen: ModelDeel[]): { set(keuze: Keuze | null | undefined): void } {
  const versies = new Map<OnderdeelNaam, Record<string, Versie>>();
  for (const naam of namen) {
    const gemaakt = (ONDERDELEN[naam] as Onderdeel).maak(delen);
    if (gemaakt) versies.set(naam, gemaakt);
  }
  // what the model has when it is loaded: every part in its standaard
  const actief = volledig(null);
  return {
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
