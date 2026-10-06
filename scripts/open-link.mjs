// Usage: node scripts/open-link.mjs architecture/my-diagram/diagram.mmd
// Prints the "Open in Planloom" link for a Mermaid file.
import { readFileSync } from 'node:fs';

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/open-link.mjs <path-to-diagram.mmd>');
  process.exit(1);
}
const source = readFileSync(file, 'utf8');
const encoded = Buffer.from(source, 'utf8').toString('base64url');
console.log(`https://planloom.app/mermaid-to-canvas?src=${encoded}#tool`);
