/** Prefix a site path with Astro `base` (e.g. `/website/`). */
export function withBase(path: string): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  if (path.startsWith('#')) return path;

  const hashIndex = path.indexOf('#');
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? '' : path.slice(hashIndex);

  const normalized = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  return `${base}${normalized}${hash}`;
}
