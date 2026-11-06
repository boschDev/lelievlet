// Configuration of one viewer. A group embeds the model in its own page and passes what differs for
// them: the colours and lettering their boats have, the names they use (many parts go by more than
// one name, and which one is taught differs per group), what their quiz asks, and whether the
// debug aids are on. Everything is optional; what is left out is as the viewer has it.
//
//   Lelievlet.create(element, {
//     assets: 'https://…/',                       // where models/ and textures/ are; default: next to the script
//     volledigScherm: true,                       // false: no full screen button, and the f key does nothing
//     installeren: true,                          // false: no "Installeer als app" in the settings panel
//     feedback: { url: 'https://…/melding' },       // where Melden POSTs its report as JSON; true or null: saved as a file. false (the default): no Melden
//     aanpassen: {
//       zeilnummer: '442', naam: 'Fluessen', plaats: 'Zwolle',
//       naamKleur: '#0b0b0b', plaatsKleur: '#0b0b0b',       // the lettering on the boeisel
//       bakskleur: '#c8141f',                               // beslag and the painted bands
//       zeilkleur: 40,                                      // the sails: 0 bright white, 10 the model's own, .. 100 very dark brown
//       rompnummer: true,                                   // the zeilnummer midships on the boeisel too, in the naamKleur
//       kleuren: { romp: '#111111', berghout: '#0a0a0b', boeisel: '#e6d85a', dolboord: '#0a0a0b',
//                  voordek: '#8f9499', achterdek: '#8f9499', kuip: '#8f9499', zwaardkast: '#8f9499' },
//       opslaan: true,                                      // false: never read or write localStorage
//     },
//     quiz: {
//       weg: [27, 'Kleed'],                          // numbers or names to leave out
//       erbij: [{ naam: 'Anker', delen: ['anker'], niveau: 1 }],
//       niveau: 2,                                   // level the start panel opens on: 'roeien', or Zeilen 1-3
//     },
//     toestand: {                                  // where the viewer starts; handle.set() takes it on from there
//       modus: 'roeien',                             // zeilen | roeien | wrikken
//       tuig: 'op',                                  // op | gestreken | mast
//       koers: -90,                                  // 0 kop in de wind, 45 .. 180; negative: wind over bakboord
//       reven: 2,                                    // turns of the giek, 0 .. 5
//       roeien: 'vier',                              // naast | kruis | vier
//       commando: 'slag',                            // for the whole boat, or { bb: 'strijk', sb: 'haal' }
//       zwaard: 'half',                              // neer | half | op
//       aanzicht: 'zij',                             // 3d | zij | boven | voor | achter
//       selectie: ['hommerring'],                    // part ids; the camera goes to them unless aanzicht or camera is given
//       camera: { positie: [-2.1, 2.4, 4.6], doel: [2.4, 1.6, 0] },   // model space, metres; wins over aanzicht
//     },
//     debug: { modelnummer: true, quiztabellen: true, toestand: true },
//   })
//
// The Aanpassen values REPLACE the viewer's own defaults for this instance; what the user saved in
// this browser still wins over them, unless `aanpassen.opslaan` is false.

/** A quiz entry: the standard ones (quizdata.ts) and those a page adds (`quiz.erbij`). */
export interface QuizEntry { nr: number; naam: string; niveau?: number; delen: string[]; eigen?: boolean }

/** The configuration in force (see above). Keys the viewer does not know are kept as they were given. */
export interface Config {
  assets: string | null;
  volledigScherm: boolean;
  installeren: boolean;
  adres: boolean;
  feedback: false | { url: string | null };
  aanpassen: { opslaan: boolean; [key: string]: unknown };
  toestand: Record<string, unknown>;
  quiz: { weg: (number | string)[]; erbij: Partial<QuizEntry>[]; niveau: number };
  debug: { modelnummer: boolean; quiztabellen: boolean; toestand: boolean };
  [key: string]: unknown;
}

export const DEFAULTS: Config = {
  assets: null,
  volledigScherm: true,
  installeren: true,
  adres: false,                    // true: the address of the page follows what is open, and opens it again (adres.js)
  feedback: false,                 // off: the original's receiver files reports as issues on its own GitHub, not ours
  aanpassen: { opslaan: true },
  toestand: {},
  quiz: { weg: [], erbij: [], niveau: 3 },
  debug: { modelnummer: false, quiztabellen: false, toestand: false },
};

const isPlain = (v: unknown): v is Record<string, unknown> => v !== null && typeof v === 'object' && !Array.isArray(v);

/** Deep merge of plain objects; arrays and everything else are taken whole from `over`. */
export function merge(base: unknown, over: unknown): unknown {
  if (!isPlain(over)) return over === undefined ? base : over;
  const out = { ...(isPlain(base) ? base : {}) };
  for (const [key, value] of Object.entries(over)) out[key] = merge(out[key], value);
  return out;
}

/**
 * The configuration in force: the defaults with the embedder's on top. `debug: true` switches all
 * the debug aids on at once. Unknown keys are kept (and reported once), so a typing mistake in a
 * page's configuration shows up in the console instead of silently doing nothing.
 */
export function resolveConfig(given: Record<string, unknown> = {}): Config {
  const config = merge(DEFAULTS, given) as Config;
  // debug: true switches every aid on; anything that is no object (null, 0, 'ja') counts as on or off by
  // what it is worth
  if (given.debug !== undefined && (given.debug === null || typeof given.debug !== 'object')) {
    config.debug = Object.fromEntries(Object.keys(DEFAULTS.debug).map((key) => [key, Boolean(given.debug)])) as Config['debug'];
  }
  if (given.feedback === true || given.feedback === null) config.feedback = { url: null };   // no receiver of our own: saved as a file
  const unknown = Object.keys(given).filter((key) => !(key in DEFAULTS));
  if (unknown.length) console.warn(`[lelievlet] onbekende instelling(en): ${unknown.join(', ')}`);
  return config;
}

/** Where an event really began, inside the shadow root too (main.ts); it may be no element at all. */
export type RealTarget = (e: Event) => EventTarget & Partial<Pick<Element, 'closest'>>;

/** What keeps a key to itself: a field the user types in (here, or on the page around the viewer). */
export const TYPING = 'input:not([type=checkbox]), textarea, select, [contenteditable]:not([contenteditable="false"])';

/** Whether any debug aid is on: the handle is only handed out then. */
export const debugOn = (config: Partial<Config> | null | undefined): boolean => Object.values(config?.debug ?? {}).some(Boolean);


/** The quiz entries for this configuration: the standard list less `weg`, plus `erbij`. */
export function quizEntries<E extends QuizEntry>(config: Partial<Config> | null | undefined, standard: E[]): (E | QuizEntry)[] {
  const weg = new Set((config?.quiz?.weg ?? []).map((x) => (typeof x === 'number' ? x : String(x).toLowerCase())));
  const kept = standard.filter((e) => !weg.has(e.nr) && !weg.has(e.naam.toLowerCase()));
  const extra = (config?.quiz?.erbij ?? []).filter((e) => e && e.naam && Array.isArray(e.delen) && e.delen.length)
    .map((e, i) => ({ nr: e.nr ?? 1000 + i, niveau: 3, ...e, eigen: true }) as QuizEntry);
  return [...kept, ...extra];
}

// Text that is kept packed in the source and unpacked where it is used.
const KEY = [...'lelievlet'].map((c) => c.charCodeAt(0));
const mix = (b: number, i: number): number => b ^ KEY[i % KEY.length] ^ ((i * 29 + 7) & 0xff);
export const unpack = (s: string): string => new TextDecoder().decode(Uint8Array.from(atob(s), (c, i) => mix(c.charCodeAt(0), i)));
export const pack = (t: string): string => btoa(String.fromCharCode(...new TextEncoder().encode(t).map(mix)));
