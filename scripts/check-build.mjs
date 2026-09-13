import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'dist/index.html'), 'utf-8');

const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/);
const rootContent = rootMatch?.[1] ?? '';

console.log('=== dist/index.html verification ===');
console.log('Root div content length:', rootContent.length, 'chars');
console.log('<h1> tags:', (rootContent.match(/<h1/g) || []).length);
console.log('<h2> tags:', (rootContent.match(/<h2/g) || []).length);
console.log('<h3> tags:', (rootContent.match(/<h3/g) || []).length);
console.log('<section> tags:', (rootContent.match(/<section/g) || []).length);
console.log('<p> tags:', (rootContent.match(/<p/g) || []).length);
console.log('<a> tags:', (rootContent.match(/<a /g) || []).length);
console.log('<button> tags:', (rootContent.match(/<button/g) || []).length);
console.log('<li> tags:', (rootContent.match(/<li/g) || []).length);
console.log('<nav> tags:', (rootContent.match(/<nav/g) || []).length);
console.log('<footer> tags:', (rootContent.match(/<footer/g) || []).length);
console.log('<header> tags:', (rootContent.match(/<header/g) || []).length);

const hasRootMarker = html.includes('<div id="root"></div>');
console.log('Still has empty root marker:', hasRootMarker);

const firstH1 = rootContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? 'none';
console.log('First h1 content:', firstH1.replace(/<[^>]+>/g, '').slice(0, 80));

const hasScriptTag = html.includes('src="/src/main.tsx"');
console.log('Has original dev script tag:', hasScriptTag);

const hasBundleScript = html.match(/<script[^>]*src="[^"]*\.js"[^>]*>/g) || [];
console.log('Bundle script tags:', hasBundleScript.length);
hasBundleScript.forEach(s => console.log('  ', s));

const strip = (x) => (x ?? '').replace(/<[^>]+>/g, '');
console.log('=== Content checks ===');
console.log('Sign up CTAs:', (rootContent.match(/Sign up/g) || []).length);
console.log('Log in CTAs:', (rootContent.match(/Log in/g) || []).length);
console.log('THEORLY brand mentions:', (rootContent.match(/THEORLY/g) || []).length);
console.log('"How It Works" section:', /How It Works/.test(rootContent));
console.log('"For Schools" section:', /For Schools/.test(rootContent));
console.log('FAQ section present:', /FAQ/.test(rootContent));
console.log('Footer year 2026:', /2026/.test(rootContent));
console.log('Hero heading (stripped):', strip(rootContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]).slice(0, 60));
