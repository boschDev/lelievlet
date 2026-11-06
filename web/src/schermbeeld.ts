// What stands open over the boat, drawn into the picture Melden sends (main.js snapshot): the cards of a lesson or a
// quiz, the words on the boat, the bar of a manoeuvre, the card of a part. The picture of the canvas alone would leave
// them out, and the easy way to draw html - an svg with a foreignObject - leaves a canvas Safari will not let go of
// (tainted), while most reports come from an iPhone. So the panels are drawn again by hand, as near as it goes: each
// element's background and border, its text word by word where the page has put it, an svg (the maps of the cards)
// as a picture of its own, and the pictures in it. Not shadows, not gradients: what it says, and where.

/** The panels that stand open, in the order they lie over each other (later over earlier). */
const OPEN = ['.kr-labels', '#procedure', '#info', '.focus-card', '.les-kaart', '#krachten', '.kr-terug', '.popover', '#cmd-panel'];

/** x, y, w, h on the picture. */
type Vak = [number, number, number, number];

const zichtbaar = (el: Element | null): el is HTMLElement | SVGElement => {
  if (!el || (el as HTMLElement).hidden) return false;
  const cs = getComputedStyle(el);
  return cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0.05;
};
const kleur = (c: string): boolean => Boolean(c) && c !== 'transparent' && !/rgba\([^)]*,\s*0\)$/.test(c);

/**
 * Draws the open panels of `ui` (the viewer's shadow root) onto `g`, a 2d context `out` big over `box` (the viewer's
 * rect on the page). Returns a promise that is done once the svgs and pictures are in too (they load first).
 */
export function tekenPanelen(ui: ShadowRoot, g: CanvasRenderingContext2D, box: DOMRect, out: { width: number }): Promise<unknown[]> {
  const k = out.width / box.width;                                 // page px -> picture px
  const later: Promise<unknown>[] = [];
  const css = [...ui.querySelectorAll('style')].map((s) => s.textContent).join('\n');

  const rond = (x: number, y: number, w: number, h: number, r: number) => { g.beginPath(); if (g.roundRect) g.roundRect(x, y, w, h, r); else g.rect(x, y, w, h); };
  const plek = (r: DOMRect): Vak => [(r.left - box.left) * k, (r.top - box.top) * k, r.width * k, r.height * k];

  function element(el: Element, clip: Vak | null): void {
    if (!zichtbaar(el)) return;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const [x, y, w, h] = plek(r);
    g.save();
    if (clip) { g.beginPath(); g.rect(...clip); g.clip(); }
    const radius = parseFloat(cs.borderTopLeftRadius) * k || 0;
    if (kleur(cs.backgroundColor)) { g.fillStyle = cs.backgroundColor; rond(x, y, w, h, radius); g.fill(); }
    const bw = parseFloat(cs.borderTopWidth) * k;
    if (bw > 0 && kleur(cs.borderTopColor) && cs.borderTopStyle !== 'none') { g.strokeStyle = cs.borderTopColor; g.lineWidth = bw; rond(x + bw / 2, y + bw / 2, w - bw, h - bw, radius); g.stroke(); }
    g.restore();
    // what scrolls or is cut off inside this one stays inside it
    const binnen = cs.overflow !== 'visible' || cs.overflowY !== 'visible' ? snij(clip, [x, y, w, h]) : clip;
    if (el instanceof SVGSVGElement) { svg(el, [x, y, w, h], binnen); return; }
    if (el.tagName === 'IMG') { plaatje(el as HTMLImageElement, [x, y, w, h], binnen); return; }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { const f = el as HTMLInputElement | HTMLTextAreaElement; tekst(f.value || f.placeholder || '', null, cs, binnen, [x, y, w, h]); return; }
    if (el.tagName === 'SELECT') { tekst((el as HTMLSelectElement).selectedOptions[0]?.textContent ?? '', null, cs, binnen, [x, y, w, h]); return; }
    for (const kind of el.childNodes) {
      if (kind.nodeType === Node.TEXT_NODE) tekst(kind.textContent ?? '', kind, cs, binnen);
      else if (kind.nodeType === Node.ELEMENT_NODE) element(kind as Element, binnen);
    }
  }

  const snij = (a: Vak | null, b: Vak): Vak => {
    if (!a) return b;
    const x0 = Math.max(a[0], b[0]); const y0 = Math.max(a[1], b[1]);
    return [x0, y0, Math.max(0, Math.min(a[0] + a[2], b[0] + b[2]) - x0), Math.max(0, Math.min(a[1] + a[3], b[1] + b[3]) - y0)];
  };

  // the words of a text node where they stand: a range round each, so the lines break as the page broke them
  function tekst(inhoud: string, node: Node | null, cs: CSSStyleDeclaration, clip: Vak | null, vak?: Vak): void {
    if (!inhoud.trim() || !kleur(cs.color)) return;
    const size = parseFloat(cs.fontSize) * k;
    g.save();
    if (clip) { g.beginPath(); g.rect(...clip); g.clip(); }
    g.font = `${cs.fontStyle} ${cs.fontWeight} ${size}px ${cs.fontFamily}`;
    g.fillStyle = cs.color; g.textBaseline = 'alphabetic';
    const hoofd = cs.textTransform === 'uppercase';
    if (!node) {                                                   // a field: its text on one line, from its padding
      const t = hoofd ? inhoud.toUpperCase() : inhoud;
      g.fillText(t, vak![0] + parseFloat(cs.paddingLeft) * k, vak![1] + vak![3] / 2 + size * 0.35, vak![2]);
      g.restore(); return;
    }
    const range = document.createRange();
    for (const m of inhoud.matchAll(/\S+/g)) {
      range.setStart(node, m.index!); range.setEnd(node, m.index! + m[0].length);
      const r = range.getClientRects()[0];
      if (!r || !r.width) continue;
      const [x, y, , h] = plek(r);
      g.fillText(hoofd ? m[0].toUpperCase() : m[0], x, y + h / 2 + size * 0.35);
    }
    g.restore();
  }

  // an svg as a picture of its own - with the viewer's styles in it, which it would not have out of the page
  function svg(el: SVGSVGElement, [x, y, w, h]: Vak, clip: Vak | null): void {
    const kopie = el.cloneNode(true) as SVGSVGElement;
    kopie.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    kopie.setAttribute('width', String(el.getBoundingClientRect().width)); kopie.setAttribute('height', String(el.getBoundingClientRect().height));
    const stijl = document.createElementNS('http://www.w3.org/2000/svg', 'style'); stijl.textContent = css;
    kopie.style.fontFamily = getComputedStyle(el).fontFamily;     // out of the page it would fall back to a serif
    kopie.prepend(stijl);
    const bron = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(kopie))}`;
    later.push(laad(bron).then((img) => teken(img, [x, y, w, h], clip)).catch(() => {}));
  }
  function plaatje(el: HTMLImageElement, vak: Vak, clip: Vak | null): void {
    if (el.complete && el.naturalWidth) teken(el, vak, clip);
    else later.push(laad(el.currentSrc || el.src).then((img) => teken(img, vak, clip)).catch(() => {}));
  }
  const laad = (src: string) => new Promise<HTMLImageElement>((ok, mis) => { const img = new Image(); img.onload = () => ok(img); img.onerror = mis; img.src = src; });
  function teken(img: HTMLImageElement, vak: Vak, clip: Vak | null): void {
    g.save();
    if (clip) { g.beginPath(); g.rect(...clip); g.clip(); }
    try { g.drawImage(img, ...vak); } catch { /* a picture from elsewhere: left out */ }
    g.restore();
  }

  for (const sel of OPEN) for (const el of ui.querySelectorAll(sel)) if (el.id !== 'feedback') element(el, null);
  return Promise.all(later);
}
