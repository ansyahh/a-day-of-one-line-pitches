// A one-line pitch entry (Node 22, standard library only): it writes the entry's single
// sentence to /output/entry.txt. The sentence is the whole entry: one sentence, 185
// characters, that would convince a friend who has never coded to let an AI agent build
// their first app idea on make.fun.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PITCH =
  'You have never coded and never need to: just describe your app idea in plain words ' +
  'and an AI agent on make.fun builds it into a working app today, free to try, and the idea stays yours.';

// The gate takes 1 to 240 characters, not only white space: refuse to write an entry
// that would be invalid, instead of submitting it and scoring 0.
if (PITCH.length < 1 || PITCH.length > 240 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), PITCH, 'utf8');
