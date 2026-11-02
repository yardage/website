/**
 * Sample yardage book pages shown on the site (AGENTS.md, visuals rule):
 * 2 to 3 holes per golf at most, web resolution only, never enlarged, no download.
 *
 * Club names are kept here but not shown yet: the owner decides whether they appear.
 * Turn `SHOW_CLUB_NAMES` on to put them in the captions.
 */
import type { ImageMetadata } from 'astro';
import ableiges2TourP1 from '../assets/carnets/ableiges-trou-02-p1-tour.webp';
import ableiges2TourP2 from '../assets/carnets/ableiges-trou-02-p2-tour.webp';
import ableiges2P1 from '../assets/carnets/carnet-trou-2-page.png';
import ableiges2P2 from '../assets/carnets/carnet-trou-2-green.png';
import ableiges4P1 from '../assets/carnets/ableiges-trou-04-p1-standard.webp';
import ableiges4P2 from '../assets/carnets/ableiges-trou-04-p2-standard.webp';
import national1P1 from '../assets/carnets/national-trou-01-p1-standard.webp';
import national1P2 from '../assets/carnets/national-trou-01-p2-standard.webp';
import national2P1 from '../assets/carnets/national-trou-02-p1-standard.webp';
import national2P2 from '../assets/carnets/national-trou-02-p2-standard.webp';
import saintNom1P1 from '../assets/carnets/saint-nom-trou-01-p1-standard.webp';
import saintNom1P2 from '../assets/carnets/saint-nom-trou-01-p2-standard.webp';
import { type Locale, t } from '../i18n';

export const SHOW_CLUB_NAMES = false;

export type Edition = 'STANDARD' | 'SLOPE' | 'TOUR';

export interface BookSample {
  club: string;
  hole: number;
  edition: Edition;
  /** Page 1 (whole hole) and page 2 (green and approach). */
  pages: readonly [ImageMetadata, ImageMetadata];
}

export const samples = {
  /** Shown in the home hero and on the method page; its green shows the slopes in colour. */
  ableiges2: { club: 'Golf d’Ableiges', hole: 2, edition: 'SLOPE', pages: [ableiges2P1, ableiges2P2] },
  ableiges2Tour: { club: 'Golf d’Ableiges', hole: 2, edition: 'TOUR', pages: [ableiges2TourP1, ableiges2TourP2] },
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

/** One visual per edition, in the order of `home.editions.items` (STANDARD, SLOPE, TOUR). */
export const editionSamples: readonly { sample: BookSample; page: 0 | 1 }[] = [
  { sample: samples.national2, page: 0 },
  { sample: samples.ableiges2, page: 1 },
  { sample: samples.ableiges2Tour, page: 1 },
];

/** "Exemple de page — STANDARD, trou 4" (or the club name instead of "Exemple de page"). */
export function sampleCaption(locale: Locale, sample: BookSample): string {
  const copy = t(locale).samples;
  const lead = SHOW_CLUB_NAMES ? sample.club : copy.label;
  return `${lead} — ${sample.edition}, ${copy.hole} ${sample.hole}`;
}

/** Alt text of page 1 or page 2 of a sample. */
export function sampleAlt(locale: Locale, sample: BookSample, page: 0 | 1): string {
  return t(locale)
    .samples.alt[page].replace('{edition}', sample.edition)
    .replace('{hole}', String(sample.hole));
}
