import { unpack } from './config.ts';

// The logboek: a star in the bottom left corner with a count, and behind it what has been done and found - how far
// each lesson is gevolgd and how each quiz went, the gevolgen found by pushing a thing too far, and the entries by
// name. It only keeps the record - nothing here brings anything about - and the star stays out of sight until there
// is something in it.
//
// The entries and the gevolgen live in localStorage under one key (the lessons and quizzes keep their own); like
// everywhere else the access is wrapped, so the viewer works just as well without storage.

const STORE = 'lelievlet.logboek.v1';
const ENTRIES = {
  th: 'IzRYRXyBtsM=',
  rl: 'KSBDXHSL',
  wp: 'PCBBXD6asdK7ECBLZI4=',
  dn: 'LyREWXeAvg==',
  bs: 'KS5IUG2eq97+FA==',
  sv: 'OCJCQmqHt9DtDC1N',
  sp: 'ODFEWXCPstLp',
  sl: 'OC1IUm6EvJftEi1Nb4s=',
  mo: 'JiBDF3GYvMX5DyNYbg==',
  ve: 'MSREW3CbtNr+EmwbM9Ta',
  av: 'Ki9GUmzOr9LpDCNYb4s=',
  zb: 'MTZMVmyKu9juFGxGZZY=',
  nz: 'JSBOX2qUvN73BSI=',
  bi: 'KTNCQHCdvNa7KT9Ga4uP',
};
type Entry = keyof typeof ENTRIES;
const KEYS = Object.keys(ENTRIES) as Entry[];

// What the lessons let happen when a thing is pushed too far - found by trying it, and counted in the logboek
// under a heading of their own. A lesson reports one with gevolg(key); before the logboek is there it is lost.
export const GEVOLGEN = {
  omgewaaid: 'Bomen omgewaaid',
  omgeslagen: 'Omgeslagen',
  scheppen: 'Water scheppen',
  klapgijp: 'Klapgijp',
  onweer: 'Onweer',
  mist: 'Mist',
  brug: 'Mast tegen de brug',
  zuiging: 'Zuiging',
};
export type Gevolg = keyof typeof GEVOLGEN;

/** How far the lessons and quizzes are (main.ts). */
export interface Voortgang {
  lessen: { naam: string; gevolgd: number; van: number }[];
  quizzen: { naam: string; stand: string }[];
}

/** What initLogboek hands back. */
export interface Logboek {
  note(key: string): void;
  readonly entries: string[];
  set voortgang(fn: () => Voortgang);
  refresh(): void;
  dispose(): boolean;
}
const melders = new Set<(key: string) => void>();                                       // each viewer's logboek on the page
/** A gevolg (a key of GEVOLGEN) was seen. */
export const gevolg = (key: string): void => { for (const m of melders) m(key); };

export function initLogboek(ui: ShadowRoot, { opslaan = true }: { opslaan?: boolean } = {}): Logboek {
  const $ = (id: string) => ui.getElementById(id)!;
  const toggle = $('log-toggle'); const count = $('log-count'); const list = $('log-list');

  let kept: string[] = []; let keptGevolgen: string[] = [];
  try {
    const raw = opslaan ? JSON.parse(localStorage.getItem(STORE) ?? 'null') : null;
    if (Array.isArray(raw?.entries)) kept = raw.entries;
    if (Array.isArray(raw?.gevolgen)) keptGevolgen = raw.gevolgen;
  } catch { /* no storage, or it holds something else: start from nothing */ }
  const have = new Set<string>(kept.filter((key) => key in ENTRIES));
  const seen = new Set<string>(keptGevolgen.filter((key) => key in GEVOLGEN));
  // how far the lessons and quizzes are: { lessen: [{ naam, gevolgd, van }], quizzen: [{ naam, stand }] }, from main.js
  let voortgang = (): Voortgang => ({ lessen: [], quizzen: [] });

  const el = <K extends keyof HTMLElementTagNameMap>(tag: K, props: Partial<HTMLElementTagNameMap[K]> = {}, ...kids: (Node | string)[]) => { const e = Object.assign(document.createElement(tag), props); e.append(...kids); return e; };
  const regel = (naam: string, stand: string, klaar = false) => el('li', { className: `stand${klaar ? ' klaar' : ''}` }, el('span', { textContent: naam }), el('em', { textContent: stand }));
  const deel = (kop: string, rows: HTMLElement[], hint?: string) => [el('h3', { textContent: kop }), el('ul', {}, ...rows), ...(hint ? [el('p', { className: 'hint', textContent: hint })] : [])];

  const show = () => {
    const v = voortgang();
    const begonnen = v.lessen.some((l) => l.gevolgd) || v.quizzen.some((q) => q.stand);
    toggle.hidden = !(have.size || seen.size || begonnen);
    count.textContent = String(have.size + seen.size); count.hidden = !(have.size + seen.size);
    const parts: HTMLElement[] = [];
    if (v.lessen.length) {
      parts.push(...deel('Lessen', v.lessen.map((l) => regel(l.naam, l.gevolgd === l.van ? 'gevolgd' : `${l.gevolgd} van ${l.van}`, l.gevolgd === l.van))));
    }
    if (v.quizzen.length) parts.push(...deel('Quiz', v.quizzen.map((q) => regel(q.naam, q.stand || 'nog niet gedaan'))));
    // what was found, gevolgen and the rest in one list
    const gevonden = [...(Object.keys(GEVOLGEN) as Gevolg[]).filter((key) => seen.has(key)).map((key) => GEVOLGEN[key]),
      ...KEYS.filter((key) => have.has(key)).map((key) => unpack(ENTRIES[key]))];
    const open = Object.keys(GEVOLGEN).length + KEYS.length - gevonden.length;
    parts.push(...deel('Ontdekt', gevonden.map((naam) => el('li', { textContent: naam })),
      open ? 'Zet in een les eens iets te ver door, en kijk wat er gebeurt. Er is nog meer te vinden…' : ''));
    list.replaceChildren(...parts);
  };

  const write = () => {
    if (opslaan) try {
      // another tab, or another viewer on the page, may have written since: join, do not overwrite
      const stored = JSON.parse(localStorage.getItem(STORE) ?? 'null');
      for (const k of Array.isArray(stored?.entries) ? stored.entries : []) if (k in ENTRIES) have.add(k);
      for (const k of Array.isArray(stored?.gevolgen) ? stored.gevolgen : []) if (k in GEVOLGEN) seen.add(k);
      localStorage.setItem(STORE, JSON.stringify({ v: 1, entries: [...have], gevolgen: [...seen] }));
    } catch { /* it works without */ }
    show();
  };
  /** An entry, the first time: it is written down and the star says one more. */
  const note = (key: string) => {
    if (!(key in ENTRIES) || have.has(key)) return;
    have.add(key); write();
  };
  const melden = (key: string) => {
    if (!(key in GEVOLGEN) || seen.has(key)) return;
    seen.add(key); write();
  };
  melders.add(melden);
  show();
  return { note, get entries() { return [...have]; },
           /** Where the lessons and quizzes stand (see `voortgang` above); shown again at once. */
           set voortgang(fn: () => Voortgang) { voortgang = fn; show(); },
           /** Read the lessons and quizzes again. */
           refresh: show,
           /** The viewer taken down: no more gevolgen to this one. */
           dispose: () => melders.delete(melden) };
}
