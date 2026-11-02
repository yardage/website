// Checks the built site in dist/: every internal link and asset resolves, internal page
// links end with "/", and canonical / hreflang / sitemap URLs use the trailing slash.
// Usage: npm run build && npm run check:links
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const SITE = 'https://yardage.io';

if (!existsSync(DIST)) {
  console.error('dist/ not found: run `npm run build` first.');
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const files = walk(DIST);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const errors = [];

const resolves = (pathname) => {
  const clean = decodeURIComponent(pathname).replace(/^\//, '');
  const target = join(DIST, clean);
  if (clean === '' || pathname.endsWith('/')) return existsSync(join(target, 'index.html'));
  return existsSync(target) && statSync(target).isFile();
};

const isPagePath = (pathname) => !/\.[a-z0-9]+$/i.test(pathname);

for (const file of htmlFiles) {
  const page = '/' + relative(DIST, file).split(sep).join('/');
  const html = readFileSync(file, 'utf8');
  if (html.includes('http-equiv="refresh"')) continue; // Astro redirect stubs

  const urls = [...html.matchAll(/\s(?:href|src|srcset|data-lightbox-src)="([^"]+)"/g)].flatMap((m) =>
    m[0].includes('srcset') ? m[1].split(',').map((part) => part.trim().split(/\s+/)[0]) : [m[1]],
  );
  for (const url of urls) {
    if (/^(mailto:|tel:|#|data:|javascript:)/.test(url)) continue;
    let parsed;
    try {
      parsed = new URL(url, SITE + page);
    } catch {
      errors.push(`${page}: invalid URL ${url}`);
      continue;
    }
    if (parsed.origin !== SITE) continue; // external
    if (!resolves(parsed.pathname)) errors.push(`${page}: broken link ${url}`);
    else if (isPagePath(parsed.pathname) && !parsed.pathname.endsWith('/'))
      errors.push(`${page}: page link without trailing slash ${url}`);
  }

  for (const m of html.matchAll(/<link rel="(canonical|alternate)"[^>]*href="([^"]+)"/g)) {
    if (!m[2].endsWith('/')) errors.push(`${page}: ${m[1]} without trailing slash ${m[2]}`);
  }
}

for (const file of files.filter((f) => /sitemap-\d+\.xml$/.test(f))) {
  const xml = readFileSync(file, 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>|href="([^"]+)"/g)) {
    const url = m[1] ?? m[2];
    const { pathname } = new URL(url);
    if (!url.endsWith('/')) errors.push(`${file}: sitemap URL without trailing slash ${url}`);
    if (!resolves(pathname)) errors.push(`${file}: sitemap URL not built ${url}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s) in ${htmlFiles.length} HTML files.`);
  process.exit(1);
}
console.log(`OK: ${htmlFiles.length} HTML files, no broken internal link, trailing slashes everywhere.`);
