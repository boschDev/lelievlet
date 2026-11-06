// Which onderwerpen of the lessons have been gevolgd: one key in localStorage for all of them, by the lesson's key
// (as in the list of Leren › Lessen) and the onderwerp's id - not its place in the row, so a lesson that is later
// split up per niveau, or put in another order, keeps what was done. Per onderwerp: when it was seen, and the first
// answer to its vraag. An onderwerp counts as gevolgd once it was seen and, if it has a question, that was
// answered.
//
//   { v: 1, lessen: { [les]: { [onderwerp]: { gezien: ms, antwoord?: 'goed' | 'fout' }, [deel]: { gehaald: ms } } },
//     quizzen?: { [quiz]: { goed, fout } } }
//
// A deel is a part of an onderwerp with a question of its own (Voorrang: a situatie, 'zeilen:Jij: wind over
// stuurboord'); it is gehaald once answered right, and an onderwerp with delen counts only when all of them are.
//
// Like everywhere else the access is wrapped: without storage (or with aanpassen.opslaan false) it works for
// this visit only.

/** What is kept of one onderwerp, or of one deel. */
export interface Stand { gezien?: number; antwoord?: 'goed' | 'fout'; gehaald?: number }
/** The score of a quiz. */
export interface QuizScore { goed: number; fout: number }
interface Staat {
  v: 1;
  lessen: Record<string, Record<string, Stand>>;
  quizzen?: Record<string, QuizScore>;
}

const KEY = 'lelievlet.lessen.v1';
let staat: Staat | null = null;
let opslaan = true;
const luisteraars = new Set<() => void>();

const lees = (): Staat => {
  if (staat) return staat;
  staat = { v: 1, lessen: {} };
  if (!opslaan) return staat;
  try {
    const saved: Staat | null = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    if (saved?.v === 1 && saved.lessen && typeof saved.lessen === 'object') staat = saved;
  } catch { /* nothing kept, or something else under the key */ }
  return staat;
};
/** What is stored now, read afresh: another tab (or the installed app) may have written since. */
const vers = () => { if (opslaan) staat = null; return lees(); };
const schrijf = () => {
  if (opslaan) try { localStorage.setItem(KEY, JSON.stringify(staat)); } catch { /* it works without */ }
  for (const fn of luisteraars) fn();
};

export const voortgang = {
  /** false: nothing is read or written (config aanpassen.opslaan). */
  set opslaan(on: boolean) { opslaan = on; staat = null; },
  /** The onderwerp was opened. */
  gezien(les: string, id: string) {
    const s = vers(); const l = (s.lessen[les] ??= {});
    if (l[id]?.gezien) return;
    l[id] = { ...l[id], gezien: Date.now() }; schrijf();
  },
  /** Its vraag was answered; only the first answer is kept. */
  antwoord(les: string, id: string, goed: boolean) {
    const s = vers(); const l = (s.lessen[les] ??= {});
    if (l[id]?.antwoord) return;
    l[id] = { gezien: Date.now(), ...l[id], antwoord: goed ? 'goed' : 'fout' }; schrijf();
  },
  /** A deel answered right; it stays gehaald. */
  gehaald(les: string, id: string) {
    const s = vers(); const l = (s.lessen[les] ??= {});
    if (l[id]?.gehaald) return;
    l[id] = { ...l[id], gehaald: Date.now() }; schrijf();
  },
  /** Whether that deel was answered right. */
  isGehaald(les: string, id: string): boolean { return Boolean(lees().lessen[les]?.[id]?.gehaald); },
  /** Whether it counts as gevolgd: seen, its question (if it has one: `vraag`) answered, and all its `delen` gehaald. */
  gevolgd(les: string, id: string, vraag = false, delen: readonly string[] = []): boolean {
    const o = lees().lessen[les]?.[id];
    return Boolean(o?.gezien && (!vraag || o.antwoord) && delen.every((d) => this.isGehaald(les, d)));
  },
  /** How many of `onderwerpen` ([{ id, vraag, delen }]) are gevolgd. */
  telling(les: string, onderwerpen: readonly { id: string; vraag?: unknown; delen?: string[] }[]): { gevolgd: number; van: number } {
    return { gevolgd: onderwerpen.filter((o) => this.gevolgd(les, o.id, Boolean(o.vraag), o.delen)).length, van: onderwerpen.length };
  },
  /** An answer in a quiz that keeps no score of its own (Voorrang, Zeiltermen): counted for the logboek. */
  quiz(naam: string, goed: boolean) {
    const s = vers(); const q = ((s.quizzen ??= {})[naam] ??= { goed: 0, fout: 0 });
    q[goed ? 'goed' : 'fout'] += 1; schrijf();
  },
  /** Its { goed, fout } so far, or null. */
  quizScore(naam: string): QuizScore | null { return lees().quizzen?.[naam] ?? null; },
  /** fn() after every change. */
  bijWijziging(fn: () => void): () => boolean { luisteraars.add(fn); return () => luisteraars.delete(fn); },
};
