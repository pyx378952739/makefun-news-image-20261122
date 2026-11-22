// news-image-20261122 entry: the image is entry.png beside this file, and
// this program copies it into the grader's output directory. Node 22,
// standard library only. No network, no shell, no randomness: the bytes
// written are exactly the bytes stored in the repository, so repeated runs
// agree.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = new URL('./entry.png', import.meta.url);
if (!existsSync(image)) {
  console.error('error: entry.png is missing next to main.ts');
  process.exit(1);
}
const MAX_BYTES = 1048576;
if (statSync(image).size > MAX_BYTES) {
  console.error(`error: entry.png is over the 1 MiB limit (${MAX_BYTES} bytes)`);
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
copyFileSync(image, join(outputDir, 'entry.png'));
