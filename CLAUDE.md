# Lelievlet 3D — eigen versie

Dit is een bewerking van [wiebren/lelievlet](https://github.com/wiebren/lelievlet) (CC BY-NC-SA 4.0). Pull requests
naar het origineel maken we niet: alles gaat rechtstreeks op `main` van deze repo.

- `origin`: github.com/boschDev/lelievlet — hier committen en pushen we (alleen als daarom gevraagd wordt)
- `upstream`: github.com/wiebren/lelievlet — alleen ophalen en mergen, nooit pushen
- Online: lelievlet.roelandbos.ch, via `docker compose up -d --build` op de server (nginx achter Traefik)

## Werken

- Viewer draaien: `cd web && corepack pnpm dev` (http://localhost:5173). Bouwen: `corepack pnpm run build`; de site
  zoals Docker hem bouwt: `corepack pnpm run build:lib` (naar `web/dist-lib`).
- De viewer is TypeScript. Controleren: `corepack pnpm run typecheck` (moet foutloos). Een bestand met
  `// @ts-nocheck` bovenaan is nog niet getypeerd; wie een bestand typeert, haalt die regel weg. Nieuwe bestanden
  (zoals alles in `bootonderdelen/`) krijgen hem niet: die zijn meteen getypeerd. Imports met de extensie `.ts`.
- Dependencies: alleen toevoegen wat nodig is, met een vaste versie. Let op: `pnpm add` en `pnpm run` kunnen andere
  pakketten (three, vite) ongevraagd ophogen; na afloop `git diff web/package.json web/pnpm-lock.yaml` bekijken.
- Het 3D-model (`web/public/models/`) kan hier niet opnieuw gebouwd worden: `pipeline/` heeft `reference/cad/` nodig,
  en die staat niet in de repo. Wat anders moet aan het model, doet de viewer.
- **Bootonderdelen** (`web/src/bootonderdelen/{onderdeel}/{versie}.ts`): wat per lelievlet in vorm verschilt. Per
  onderdeel een `base.ts` (wat de versies delen, en het onderdeel op zijn kaalst), een bestand per versie en een
  `index.ts` (versies en standaard: de versie die het model heeft). Registreren in `bootonderdelen/index.ts`. Elk
  onderdeel uit `lelievlet.parts.json` heeft een map (`_bb`/`_sb` samen); met alleen een `base` via `alleenBase`. Een
  groep kiest met `onderdelen: { riem: 'blad' }`. Kleur hoort hier niet: dat is Aanpassen (`customize.ts`).
- Stijl van het origineel aanhouden: commentaar in het Engels met de Nederlandse vaktermen (boeisel, bakskleur,
  roerkoning), tekst voor gebruikers in het Nederlands, commitberichten in dezelfde stijl als de bestaande.
- Na een wijziging aan kleuren of groepen: in de browser een boot kiezen onder Aanpassen › Bekend en kijken.
- Geen persoonsgegevens in bestanden: in de README staat de GitHub-naam, geen volledige naam of e-mail.

## Wat in deze versie anders is dan upstream

| Wat | Waar |
|---|---|
| Groep Baracuda (zeven boten, Epifanes-kleuren) | `web/src/groepen.ts`, onderaan `GROEPEN` |
| `BAKSKLEUR` (`'$bakskleur'`) en `RVS` (`'$rvs'`) als kleurwaarde | `groepen.ts` (export), `customize.ts` (`paintOf`, `applyZone`, `STAAL`) |
| Velden `roerbeslagKleur`, `beslagKleur`, `lummelKleur`, `onderdelen` | `customize.ts`, `main.ts`, `README.md`, kop van `groepen.ts` |
| Extra verfzones `roerbeslag`, `vingerlingen`, `beslag`, `lummel` | `customize.ts`: `MEE`, `zoneColor`, `collectZoneMaterials`, `SCHEME` |
| Alles TypeScript (`.js` → `.ts`, imports met `.ts`, `// @ts-nocheck` waar nog niet getypeerd) | `web/src/`, `web/tsconfig.json`, `scripts/*.mjs`, `index.html`, `vite.lib.config.js` |
| Bootonderdelen: een map per onderdeel van het model; de riem met versies `base`, `handvat`, `blad` | `web/src/bootonderdelen/`, aangeroepen in `main.ts` |
| Melden staat standaard uit (`feedback: false`) | `web/src/config.ts` |
| Docker | `Dockerfile`, `docker-compose.yml`, `docker/nginx.conf`, `.dockerignore` |
| Vermelding van de bewerking | `README.md`, blok Licentie |

## Een nieuwe versie van upstream binnenhalen

```
git fetch upstream
git log --oneline main..upstream/main     # wat er nieuw is
git merge upstream/main
```

Doe dit niet blind: bekijk eerst wat er binnenkomt, en let op het volgende.

**Upstream is JavaScript, wij TypeScript.** Git volgt de hernoeming (`modes.js` → `modes.ts`) zolang een bestand
grotendeels gelijk is, dus een wijziging van upstream komt meestal in het goede `.ts`-bestand terecht. Conflicten
komen op de importregels (`.js` ↔ `.ts`) en, hoe meer we typeren, in de code zelf. Daarom:

- Een **nieuw bestand** van upstream komt binnen als `.js`: hernoemen naar `.ts`, `// @ts-nocheck` erboven,
  imports naar `.ts`, en de imports ernaar in andere bestanden ook.
- Een import die upstream toevoegt, wijst naar `.js`: omzetten naar `.ts`.
- Lukt de merge niet meer zinvol (te veel conflicten in getypeerde bestanden), dan per upstream-commit kijken wat er
  veranderd is (`git show <commit>`) en dat met de hand in de `.ts`-bestanden overnemen.
- Na afloop moet `corepack pnpm run typecheck` foutloos zijn.

### Waar conflicten te verwachten zijn

- **`web/src/groepen.ts`**: upstream voegt steeds groepen toe aan het eind van `GROEPEN`, precies waar de Baracuda
  staat. Beide houden, de Baracuda als laatste. Bovenaan staan onze exports `BAKSKLEUR` en `RVS` naast `VLAG`: laten staan.
- **`web/src/customize.ts`**: `paintOf`, `samePaint`/`isGroup`, `pick`, `DEFAULTS`, `baseOf`, `load`, `save` en
  `collectZoneMaterials`. Wij hebben `isGroup` omgebouwd tot `samePaint` (alles van één boot tegelijk); komt upstream
  met een nieuw veld, dan hoort dat er bij ons in `samePaint` bij, niet in een losse `isGroup`.
- **`web/src/main.ts`**: de lijst met velden van Aanpassen staat er **drie keer** (Melden, Installeer als app, de
  momentopname). Onze velden moeten in alle drie blijven staan, ook als upstream er velden bij zet.
- **`README.md`**: de alinea over `groepen.ts` (veldbeschrijvingen) en het blok Licentie.

### Wat na een merge te controleren is

- **Nieuwe velden van upstream** voor een groep (zoals ooit `spiegelBand`): staan ze ook in `samePaint` en `pick`, en
  mogen ze `BAKSKLEUR` zijn? Haal ze dan in `paintOf` door `kleur()`.
- **Namen van onderdelen en materialen.** Onze zones hangen aan id's uit `web/public/models/lelievlet.parts.json`:
  `roerkoning`, `roerhaken`, `vingerlingen`, `mikhouders`, `wantputting_bb/_sb`, `dolpotten_bb/_sb`, `kikkers_voordek`,
  `leiogen_bb/_sb`, `lummelbeslag`, `mastband_lummel`, `giek`, `wervel`, `riem_bb`, `riem_sb`, `wrikriem`, en aan hun
  materiaal (`romp`, `verzinkt`, `bakskleur`, `hout_gelakt`). Komt er een nieuw model binnen, controleer dan of ze nog
  bestaan en hetzelfde materiaal hebben; anders verandert er stil niets op de boot.
- **Onderdelen erbij of eraf** in `lelievlet.parts.json`: elk onderdeel heeft een map in `bootonderdelen/` met zijn
  id's in `IDS` (`base.ts`). Een nieuw onderdeel: map erbij; een verdwenen id: uit `IDS` halen.
- **De riem** (`bootonderdelen/riem/base.ts`) gaat ervan uit dat de band in het model bij het handvat zit en het enige
  stuk met materiaal `bakskleur` op de riem is. Verandert dat in `pipeline/parts.py` (`BANDS`), dan opnieuw kijken.
- **`ROER`** in `customize.ts` is bij ons alleen `['roerblad']`; `roerkoning` en `roerhaken` staan in `ROERBESLAG`.
  Voegt upstream iets aan `ROER` toe, kies dan bewust waar het hoort.
- **Melden** moet uit blijven: `feedback: false` in `DEFAULTS` van `config.ts`. De ontvanger van upstream maakt van
  elke melding een issue op diens GitHub.
- **Adressen van upstream**: `scoutvaardig.nl` (`feedback.ts` `SITE`, `demo/*.html`) en `verhuizen.js`, dat van
  `wiebren.github.io` naar scoutvaardig.nl doorstuurt. Op ons domein doet dat niets, maar let op als upstream daar
  nieuwe doorverwijzingen bij zet die ook voor andere domeinen gelden.
- **De build voor Docker**: `vite.lib.config.js` (welke bestanden uit `demo/` meegaan, de service worker). Verandert
  upstream daar iets, dan `corepack pnpm run build:lib` draaien en kijken of `dist-lib` nog compleet is. Nieuwe
  mappen buiten `web/` die de build nodig heeft, moeten in `.dockerignore` worden doorgelaten.
- **Licentie**: het blok Licentie in de README en `LICENSE` van upstream overnemen; onze bewerkingsregel eronder laten staan.

Daarna: `corepack pnpm run typecheck`, `build` en `build:lib` moeten slagen, en een Baracuda-boot moet er in de browser nog
hetzelfde uitzien (bakskleur op berghout, dolboord, zwaardkast, spiegel, roerbeslag en beslag; RVS op de giek; de
band op de riemen bij het blad).
