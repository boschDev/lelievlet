import type { BaseVersie, ModelDeel, Onderdeel, OnderdeelKlasse, Versie } from './onderdeel.ts';
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
/** The name of every part, as a group gives it (groepen.ts `onderdelen`). */
export enum OnderdeelNaam {
  Achterdek = 'achterdek',
  Achterlandvast = 'achterlandvast',
  Achterschot = 'achterschot',
  Anker = 'anker',
  Ankerketting = 'ankerketting',
  Ankerlijn = 'ankerlijn',
  Ankeroog = 'ankeroog',
  Bakskist = 'bakskist',
  BakskistBeslag = 'bakskist_beslag',
  BakskistDeksel = 'bakskist_deksel',
  BakskistHandvatten = 'bakskist_handvatten',
  Berghout = 'berghout',
  BeslagGaffel = 'beslag_gaffel',
  BlokFokkenschoot = 'blok_fokkenschoot',
  BlokFokkenval = 'blok_fokkenval',
  BlokGrootschootGiek = 'blok_grootschoot_giek',
  BlokGrootschootKuip = 'blok_grootschoot_kuip',
  BlokKlauwval = 'blok_klauwval',
  BlokPiekenval = 'blok_piekenval',
  Boegrand = 'boegrand',
  Boegspriet = 'boegspriet',
  BoegsprietBouten = 'boegspriet_bouten',
  Boeisel = 'boeisel',
  BorghaakSpiegel = 'borghaak_spiegel',
  Borgkettinkje = 'borgkettinkje',
  BorglijntjeLummelbout = 'borglijntje_lummelbout',
  BorgoogRoer = 'borgoog_roer',
  Buikdenning = 'buikdenning',
  Dekcontour = 'dekcontour',
  Dodemanseind = 'dodemanseind',
  DoftAchter = 'doft_achter',
  DoftVoor = 'doft_voor',
  Dofthouders = 'dofthouders',
  Dolboord = 'dolboord',
  Dolpotten = 'dolpotten',
  EhboKoffer = 'ehbo_koffer',
  Fok = 'fok',
  FokAchterlijk = 'fok_achterlijk',
  FokHalshoek = 'fok_halshoek',
  FokOnderlijk = 'fok_onderlijk',
  FokSchoothoek = 'fok_schoothoek',
  FokTophoek = 'fok_tophoek',
  FokVoorlijk = 'fok_voorlijk',
  Fokkenschoot = 'fokkenschoot',
  Fokkenval = 'fokkenval',
  Gaffel = 'gaffel',
  Gaffeldraad = 'gaffeldraad',
  Giek = 'giek',
  Grendelbout = 'grendelbout',
  Grootschoot = 'grootschoot',
  Grootschootoog = 'grootschootoog',
  GrootschootoogSteun = 'grootschootoog_steun',
  Grootzeil = 'grootzeil',
  GrootzeilAchterlijk = 'grootzeil_achterlijk',
  GrootzeilBovenlijk = 'grootzeil_bovenlijk',
  GrootzeilHalshoek = 'grootzeil_halshoek',
  GrootzeilKlauwhoek = 'grootzeil_klauwhoek',
  GrootzeilOnderlijk = 'grootzeil_onderlijk',
  GrootzeilSchoothoek = 'grootzeil_schoothoek',
  GrootzeilTophoek = 'grootzeil_tophoek',
  GrootzeilVoorlijk = 'grootzeil_voorlijk',
  GrootzeilZeilnummer = 'grootzeil_zeilnummer',
  GrootzeilZeilteken = 'grootzeil_zeilteken',
  Hanekam = 'hanekam',
  Hanepootloper = 'hanepootloper',
  HarpjeFokkenval = 'harpje_fokkenval',
  HarpjeStrop = 'harpje_strop',
  Harpjes = 'harpjes',
  HarpjesFok = 'harpjes_fok',
  HarpjesMast = 'harpjes_mast',
  HarpjesWantketting = 'harpjes_wantketting',
  Helmstok = 'helmstok',
  Hijsogen = 'hijsogen',
  Hommerring = 'hommerring',
  Hoosblik = 'hoosblik',
  KettinkjeFok = 'kettinkje_fok',
  KikkersMastkoker = 'kikkers_mastkoker',
  KikkersVoordek = 'kikkers_voordek',
  Kim = 'kim',
  Klauw = 'klauw',
  Klauwval = 'klauwval',
  Landvastogen = 'landvastogen',
  Leiogen = 'leiogen',
  Leuvers = 'leuvers',
  Lummelbeslag = 'lummelbeslag',
  Lummelbout = 'lummelbout',
  MarllijnGaffel = 'marllijn_gaffel',
  MarllijnGiek = 'marllijn_giek',
  Mast = 'mast',
  MastbandLummel = 'mastband_lummel',
  Mastbout = 'mastbout',
  Mastkoker = 'mastkoker',
  Masttopring = 'masttopring',
  Meerpen = 'meerpen',
  Mikhouders = 'mikhouders',
  PelikaanhaakRing = 'pelikaanhaak_ring',
  Pettenlijntje = 'pettenlijntje',
  Piekenval = 'piekenval',
  Riem = 'riem',
  Rijglijn = 'rijglijn',
  Roerblad = 'roerblad',
  Roerhaken = 'roerhaken',
  Roerkoning = 'roerkoning',
  Roerkop = 'roerkop',
  Scheg = 'scheg',
  Schootring = 'schootring',
  Sleepogen = 'sleepogen',
  SleepoogBoeg = 'sleepoog_boeg',
  Spanten = 'spanten',
  Spiegel = 'spiegel',
  Spiegelrand = 'spiegelrand',
  StropGaffel = 'strop_gaffel',
  Vingerlingen = 'vingerlingen',
  Vlak = 'vlak',
  Voordek = 'voordek',
  Voorlandvast = 'voorlandvast',
  Voorplecht = 'voorplecht',
  Voorschot = 'voorschot',
  Voorstag = 'voorstag',
  Voorstagspanner = 'voorstagspanner',
  Want = 'want',
  Wantketting = 'wantketting',
  Wantputting = 'wantputting',
  Wervel = 'wervel',
  Wrikgat = 'wrikgat',
  Zeillatten = 'zeillatten',
  Zwaard = 'zwaard',
  Zwaardkast = 'zwaardkast',
  ZwaardloperBoven = 'zwaardloper_boven',
  ZwaardloperOnder = 'zwaardloper_onder',
  Zwaardstrippen = 'zwaardstrippen',
}

export const ONDERDELEN = {
  [OnderdeelNaam.Achterdek]: Achterdek,
  [OnderdeelNaam.Achterlandvast]: Achterlandvast,
  [OnderdeelNaam.Achterschot]: Achterschot,
  [OnderdeelNaam.Anker]: Anker,
  [OnderdeelNaam.Ankerketting]: Ankerketting,
  [OnderdeelNaam.Ankerlijn]: Ankerlijn,
  [OnderdeelNaam.Ankeroog]: Ankeroog,
  [OnderdeelNaam.Bakskist]: Bakskist,
  [OnderdeelNaam.BakskistBeslag]: BakskistBeslag,
  [OnderdeelNaam.BakskistDeksel]: BakskistDeksel,
  [OnderdeelNaam.BakskistHandvatten]: BakskistHandvatten,
  [OnderdeelNaam.Berghout]: Berghout,
  [OnderdeelNaam.BeslagGaffel]: BeslagGaffel,
  [OnderdeelNaam.BlokFokkenschoot]: BlokFokkenschoot,
  [OnderdeelNaam.BlokFokkenval]: BlokFokkenval,
  [OnderdeelNaam.BlokGrootschootGiek]: BlokGrootschootGiek,
  [OnderdeelNaam.BlokGrootschootKuip]: BlokGrootschootKuip,
  [OnderdeelNaam.BlokKlauwval]: BlokKlauwval,
  [OnderdeelNaam.BlokPiekenval]: BlokPiekenval,
  [OnderdeelNaam.Boegrand]: Boegrand,
  [OnderdeelNaam.Boegspriet]: Boegspriet,
  [OnderdeelNaam.BoegsprietBouten]: BoegsprietBouten,
  [OnderdeelNaam.Boeisel]: Boeisel,
  [OnderdeelNaam.BorghaakSpiegel]: BorghaakSpiegel,
  [OnderdeelNaam.Borgkettinkje]: Borgkettinkje,
  [OnderdeelNaam.BorglijntjeLummelbout]: BorglijntjeLummelbout,
  [OnderdeelNaam.BorgoogRoer]: BorgoogRoer,
  [OnderdeelNaam.Buikdenning]: Buikdenning,
  [OnderdeelNaam.Dekcontour]: Dekcontour,
  [OnderdeelNaam.Dodemanseind]: Dodemanseind,
  [OnderdeelNaam.DoftAchter]: DoftAchter,
  [OnderdeelNaam.DoftVoor]: DoftVoor,
  [OnderdeelNaam.Dofthouders]: Dofthouders,
  [OnderdeelNaam.Dolboord]: Dolboord,
  [OnderdeelNaam.Dolpotten]: Dolpotten,
  [OnderdeelNaam.EhboKoffer]: EhboKoffer,
  [OnderdeelNaam.Fok]: Fok,
  [OnderdeelNaam.FokAchterlijk]: FokAchterlijk,
  [OnderdeelNaam.FokHalshoek]: FokHalshoek,
  [OnderdeelNaam.FokOnderlijk]: FokOnderlijk,
  [OnderdeelNaam.FokSchoothoek]: FokSchoothoek,
  [OnderdeelNaam.FokTophoek]: FokTophoek,
  [OnderdeelNaam.FokVoorlijk]: FokVoorlijk,
  [OnderdeelNaam.Fokkenschoot]: Fokkenschoot,
  [OnderdeelNaam.Fokkenval]: Fokkenval,
  [OnderdeelNaam.Gaffel]: Gaffel,
  [OnderdeelNaam.Gaffeldraad]: Gaffeldraad,
  [OnderdeelNaam.Giek]: Giek,
  [OnderdeelNaam.Grendelbout]: Grendelbout,
  [OnderdeelNaam.Grootschoot]: Grootschoot,
  [OnderdeelNaam.Grootschootoog]: Grootschootoog,
  [OnderdeelNaam.GrootschootoogSteun]: GrootschootoogSteun,
  [OnderdeelNaam.Grootzeil]: Grootzeil,
  [OnderdeelNaam.GrootzeilAchterlijk]: GrootzeilAchterlijk,
  [OnderdeelNaam.GrootzeilBovenlijk]: GrootzeilBovenlijk,
  [OnderdeelNaam.GrootzeilHalshoek]: GrootzeilHalshoek,
  [OnderdeelNaam.GrootzeilKlauwhoek]: GrootzeilKlauwhoek,
  [OnderdeelNaam.GrootzeilOnderlijk]: GrootzeilOnderlijk,
  [OnderdeelNaam.GrootzeilSchoothoek]: GrootzeilSchoothoek,
  [OnderdeelNaam.GrootzeilTophoek]: GrootzeilTophoek,
  [OnderdeelNaam.GrootzeilVoorlijk]: GrootzeilVoorlijk,
  [OnderdeelNaam.GrootzeilZeilnummer]: GrootzeilZeilnummer,
  [OnderdeelNaam.GrootzeilZeilteken]: GrootzeilZeilteken,
  [OnderdeelNaam.Hanekam]: Hanekam,
  [OnderdeelNaam.Hanepootloper]: Hanepootloper,
  [OnderdeelNaam.HarpjeFokkenval]: HarpjeFokkenval,
  [OnderdeelNaam.HarpjeStrop]: HarpjeStrop,
  [OnderdeelNaam.Harpjes]: Harpjes,
  [OnderdeelNaam.HarpjesFok]: HarpjesFok,
  [OnderdeelNaam.HarpjesMast]: HarpjesMast,
  [OnderdeelNaam.HarpjesWantketting]: HarpjesWantketting,
  [OnderdeelNaam.Helmstok]: Helmstok,
  [OnderdeelNaam.Hijsogen]: Hijsogen,
  [OnderdeelNaam.Hommerring]: Hommerring,
  [OnderdeelNaam.Hoosblik]: Hoosblik,
  [OnderdeelNaam.KettinkjeFok]: KettinkjeFok,
  [OnderdeelNaam.KikkersMastkoker]: KikkersMastkoker,
  [OnderdeelNaam.KikkersVoordek]: KikkersVoordek,
  [OnderdeelNaam.Kim]: Kim,
  [OnderdeelNaam.Klauw]: Klauw,
  [OnderdeelNaam.Klauwval]: Klauwval,
  [OnderdeelNaam.Landvastogen]: Landvastogen,
  [OnderdeelNaam.Leiogen]: Leiogen,
  [OnderdeelNaam.Leuvers]: Leuvers,
  [OnderdeelNaam.Lummelbeslag]: Lummelbeslag,
  [OnderdeelNaam.Lummelbout]: Lummelbout,
  [OnderdeelNaam.MarllijnGaffel]: MarllijnGaffel,
  [OnderdeelNaam.MarllijnGiek]: MarllijnGiek,
  [OnderdeelNaam.Mast]: Mast,
  [OnderdeelNaam.MastbandLummel]: MastbandLummel,
  [OnderdeelNaam.Mastbout]: Mastbout,
  [OnderdeelNaam.Mastkoker]: Mastkoker,
  [OnderdeelNaam.Masttopring]: Masttopring,
  [OnderdeelNaam.Meerpen]: Meerpen,
  [OnderdeelNaam.Mikhouders]: Mikhouders,
  [OnderdeelNaam.PelikaanhaakRing]: PelikaanhaakRing,
  [OnderdeelNaam.Pettenlijntje]: Pettenlijntje,
  [OnderdeelNaam.Piekenval]: Piekenval,
  [OnderdeelNaam.Riem]: Riem,
  [OnderdeelNaam.Rijglijn]: Rijglijn,
  [OnderdeelNaam.Roerblad]: Roerblad,
  [OnderdeelNaam.Roerhaken]: Roerhaken,
  [OnderdeelNaam.Roerkoning]: Roerkoning,
  [OnderdeelNaam.Roerkop]: Roerkop,
  [OnderdeelNaam.Scheg]: Scheg,
  [OnderdeelNaam.Schootring]: Schootring,
  [OnderdeelNaam.Sleepogen]: Sleepogen,
  [OnderdeelNaam.SleepoogBoeg]: SleepoogBoeg,
  [OnderdeelNaam.Spanten]: Spanten,
  [OnderdeelNaam.Spiegel]: Spiegel,
  [OnderdeelNaam.Spiegelrand]: Spiegelrand,
  [OnderdeelNaam.StropGaffel]: StropGaffel,
  [OnderdeelNaam.Vingerlingen]: Vingerlingen,
  [OnderdeelNaam.Vlak]: Vlak,
  [OnderdeelNaam.Voordek]: Voordek,
  [OnderdeelNaam.Voorlandvast]: Voorlandvast,
  [OnderdeelNaam.Voorplecht]: Voorplecht,
  [OnderdeelNaam.Voorschot]: Voorschot,
  [OnderdeelNaam.Voorstag]: Voorstag,
  [OnderdeelNaam.Voorstagspanner]: Voorstagspanner,
  [OnderdeelNaam.Want]: Want,
  [OnderdeelNaam.Wantketting]: Wantketting,
  [OnderdeelNaam.Wantputting]: Wantputting,
  [OnderdeelNaam.Wervel]: Wervel,
  [OnderdeelNaam.Wrikgat]: Wrikgat,
  [OnderdeelNaam.Zeillatten]: Zeillatten,
  [OnderdeelNaam.Zwaard]: Zwaard,
  [OnderdeelNaam.Zwaardkast]: Zwaardkast,
  [OnderdeelNaam.ZwaardloperBoven]: ZwaardloperBoven,
  [OnderdeelNaam.ZwaardloperOnder]: ZwaardloperOnder,
  [OnderdeelNaam.Zwaardstrippen]: Zwaardstrippen,
} satisfies Record<OnderdeelNaam, OnderdeelKlasse>;

/** Which version of which part: what a group gives (groepen.ts `onderdelen`); a part left out has its standaard. */
export type Keuze = { [N in OnderdeelNaam]?: VersieVan<N> };
/** The versions a part has: its own enum (RiemVersie), or BaseVersie for a part with only its base. */
export type VersieVan<N extends OnderdeelNaam> = string extends (typeof ONDERDELEN)[N]['versies'][number]
  ? BaseVersie : (typeof ONDERDELEN)[N]['versies'][number];

const namen = Object.values(OnderdeelNaam);

/** Every part with the version it has: the one chosen, if that is one of its versions, else the standaard. */
export function volledig(keuze: Keuze | null | undefined): Required<Keuze> {
  return Object.fromEntries(namen.map((naam) => {
    const onderdeel: OnderdeelKlasse = ONDERDELEN[naam];
    const gekozen: string | undefined = keuze?.[naam];
    return [naam, gekozen && onderdeel.versies.includes(gekozen) ? gekozen : onderdeel.standaard];
  })) as Required<Keuze>;
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
  const actief: Record<OnderdeelNaam, string> = volledig(null);
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
