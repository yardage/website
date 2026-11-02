/**
 * Sample yardage book pages shown on the site (AGENTS.md, visuals rule):
 * 2 to 3 holes per golf at most, web resolution only, never enlarged, no download.
 * Owner rule: only well-framed holes whose distance markers are consistent, i.e. the
 * pages listed below. Do not add a hole without the owner’s approval.
 *
 * Club names are kept here but not shown yet: the owner decides whether they appear.
 * Turn `SHOW_CLUB_NAMES` on to put them in the captions.
 *
 * Only imported pages reach `dist/`. Validated but unused for now:
 * `ableiges-trou-02-p1-tour.webp` (page 1 of the TOUR sample).
 */
import type { ImageMetadata } from 'astro';
import ableiges2TourP2 from '../assets/carnets/ableiges-trou-02-p2-tour.webp';
import ableiges4P1 from '../assets/carnets/ableiges-trou-04-p1-standard.webp';
import ableiges4P2 from '../assets/carnets/ableiges-trou-04-p2-standard.webp';
import national1P1 from '../assets/carnets/national-trou-01-p1-standard.webp';
import national1P2 from '../assets/carnets/national-trou-01-p2-standard.webp';
import national2P1 from '../assets/carnets/national-trou-02-p1-standard.webp';
import national2P2 from '../assets/carnets/national-trou-02-p2-standard.webp';
import saintNom1P1 from '../assets/carnets/saint-nom-trou-01-p1-standard.webp';
import saintNom1P2 from '../assets/carnets/saint-nom-trou-01-p2-standard.webp';
// Green of Ableiges hole 2 (STANDARD book), kept only to show the slopes in colour.
import slopeGreen from '../assets/carnets/carnet-trou-2-green.png';
import { type Locale, t } from '../i18n';

export const SHOW_CLUB_NAMES = false;

export type Edition = 'STANDARD' | 'SLOPE' | 'TOUR';

export interface SampleInfo {
  club: string;
  hole: number;
  edition: Edition;
}

export interface BookSample extends SampleInfo {
  /** Page 1 (whole hole) and page 2 (green and approach). */
  pages: readonly [ImageMetadata, ImageMetadata];
}

export const samples = {
  ableiges4: { club: 'Golf d’Ableiges', hole: 4, edition: 'STANDARD', pages: [ableiges4P1, ableiges4P2] },
  national1: { club: 'Golf National', hole: 1, edition: 'STANDARD', pages: [national1P1, national1P2] },
  national2: { club: 'Golf National', hole: 2, edition: 'STANDARD', pages: [national2P1, national2P2] },
  saintNom1: {
    club: 'Golf de Saint-Nom-la-Bretèche',
    hole: 1,
    edition: 'STANDARD',
    pages: [saintNom1P1, saintNom1P2],
  },
} as const satisfies Record<string, BookSample>;

/** "Exemple de page — STANDARD, trou 4" (or the club name instead of "Exemple de page"). */
export function sampleCaption(locale: Locale, sample: SampleInfo): string {
  const copy = t(locale).samples;
  const lead = SHOW_CLUB_NAMES ? sample.club : copy.label;
  return `${lead} — ${sample.edition}, ${copy.hole} ${sample.hole}`;
}

/** Alt text of page 1 or page 2 of a sample. */
export function sampleAlt(locale: Locale, sample: SampleInfo, page: 0 | 1): string {
  return t(locale)
    .samples.alt[page].replace('{edition}', sample.edition)
    .replace('{hole}', String(sample.hole));
}

/**
 * One visual per edition, in the order of `home.editions.items` (STANDARD, SLOPE, TOUR).
 * No validated SLOPE page yet: SLOPE shows the green of Ableiges hole 2 (STANDARD book),
 * coloured by slope, captioned as a relief illustration rather than a SLOPE page.
 */
export function editionVisuals(locale: Locale): { src: ImageMetadata; alt: string; caption: string }[] {
  const copy = t(locale).samples;
  const standard = samples.national1;
  const tour: SampleInfo = { club: 'Golf d’Ableiges', hole: 2, edition: 'TOUR' };
  return [
    { src: standard.pages[0], alt: sampleAlt(locale, standard, 0), caption: sampleCaption(locale, standard) },
    {
      src: slopeGreen,
      alt: copy.slope.alt,
      caption: `${SHOW_CLUB_NAMES ? 'Golf d’Ableiges' : copy.label} — ${copy.slope.caption}`,
    },
    { src: ableiges2TourP2, alt: sampleAlt(locale, tour, 1), caption: sampleCaption(locale, tour) },
  ];
}
