import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(root, 'dist');
const serverDir = resolve(distDir, 'server');
const rootMarker = '<div id="root"></div>';

const serverModule = await import(pathToFileURL(resolve(serverDir, 'entry-server.js')).href);
const renderFn = serverModule.render ?? serverModule.default?.render;

if (typeof renderFn !== 'function') {
  console.error('[prerender] No "render" export found in SSR bundle.');
  process.exit(1);
}

const { html } = renderFn('/');

const indexHtml = readFileSync(resolve(distDir, 'index.html'), 'utf-8');

if (!indexHtml.includes(rootMarker)) {
  console.error('[prerender] <div id="root"></div> not found in dist/index.html.');
  process.exit(1);
}

const prerendered = indexHtml.replace(rootMarker, `<div id="root">${html}</div>`);

writeFileSync(resolve(distDir, 'index.html'), prerendered);
writeFileSync(resolve(distDir, '404.html'), prerendered);

rmSync(serverDir, { recursive: true, force: true });

console.log(
  `[prerender] Pre-rendered ${html.length} chars of SSR HTML into dist/index.html (and 404.html).`,
);