import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = readFileSync(join(root, 'index.html'), 'utf8');
const failures = [];
const warnings = [];

const requiredPatterns = [
  ['page title', /<title>[^<]+<\/title>/i],
  ['meta description', /<meta\s+name="description"/i],
  ['canonical URL', /<link\s+rel="canonical"/i],
  ['main landmark', /<main\s+id="main-content"/i],
];

for (const [label, pattern] of requiredPatterns) {
  if (!pattern.test(html)) failures.push(`Missing ${label}.`);
}

if (/cdn\.tailwindcss\.com/i.test(html)) {
  failures.push('The unused Tailwind CDN runtime was reintroduced.');
}

const pageNames = ['index.html', 'terms.html', 'privacy.html'].filter(name => existsSync(join(root, name)));
for (const pageName of pageNames) {
  const pageHtml = readFileSync(join(root, pageName), 'utf8');
  const blankLinks = pageHtml.match(/<a\b[^>]*target="_blank"[^>]*>/gi) ?? [];
  for (const tag of blankLinks) {
    if (!/rel="[^"]*noopener[^"]*noreferrer[^"]*"/i.test(tag)) {
      failures.push(`${pageName}: external link is missing rel="noopener noreferrer": ${tag}`);
    }
  }

  const refs = new Set();
  for (const match of pageHtml.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) refs.add(match[1]);
  for (const match of pageHtml.matchAll(/background-image:\s*url\(["']?([^"')]+)["']?\)/gi)) refs.add(match[1]);

  for (const ref of refs) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/i.test(ref)) continue;
    const relative = decodeURIComponent(ref.split(/[?#]/, 1)[0]).replace(/^\//, '');
    if (relative && !existsSync(join(root, relative))) {
      failures.push(`${pageName}: missing local asset: ${ref}`);
    }
  }
}

if (/TERMS &amp; CONDITIONS<\/a>/i.test(html) && /href="#"[^>]*>TERMS &amp; CONDITIONS/i.test(html)) {
  warnings.push('Terms & Conditions still needs an approved destination.');
}
if (/PRIVACY POLICY<\/a>/i.test(html) && /href="#"[^>]*>PRIVACY POLICY/i.test(html)) {
  warnings.push('Privacy Policy still needs an approved destination.');
}
if (/backing and amplify(?:\s|<)/i.test(html)) warnings.push('Hero copy still contains “backing and amplify.”');
if (/co-lead the Consumer team and investing/i.test(html)) warnings.push('Nicole bio still contains “co-lead … and investing.”');

for (const warning of warnings) console.warn(`WARNING: ${warning}`);

if (failures.length) {
  for (const failure of failures) console.error(`ERROR: ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Site checks passed with ${warnings.length} launch warning(s).`);
}
