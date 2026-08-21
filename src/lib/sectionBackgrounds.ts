import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const IMAGES_DIR = fileURLToPath(new URL('../../public/images', import.meta.url));
const INCLUDE = /^(bg[-_]|carnets-irl|3d-vizualizer)/i;
const EXT = /\.(jpe?g|png|webp)$/i;
const SHUFFLE_SEED = 0x59444e;

let cached: string[] | null = null;

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: T[], seed: number): T[] {
  const rng = mulberry32(seed);
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const current = copy[i]!;
    copy[i] = copy[j]!;
    copy[j] = current;
  }
  return copy;
}

function readPool(): string[] {
  const files = readdirSync(IMAGES_DIR)
    .filter((name) => EXT.test(name) && INCLUDE.test(name))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => `/images/${name}`);

  return shuffle(files, SHUFFLE_SEED);
}

/** Stable shuffled list of scenery / atmosphere photos from `public/images`. */
export function sectionBackgrounds(): string[] {
  if (cached && !import.meta.env.DEV) return cached;
  cached = readPool();
  return cached;
}

export function pickSectionBackground(index: number): string {
  const pool = sectionBackgrounds();
  if (pool.length === 0) return '/images/bg-aerial.jpg';
  const normalized = ((index % pool.length) + pool.length) % pool.length;
  return pool[normalized] ?? '/images/bg-aerial.jpg';
}

/** Per-request cycling so adjacent sections on a page get different photos. */
export function nextSectionBackground(locals: { sectionBgIndex?: number } = {}): string {
  const index = locals.sectionBgIndex ?? 0;
  locals.sectionBgIndex = index + 1;
  return pickSectionBackground(index);
}
