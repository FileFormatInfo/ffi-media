import { cp, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const sourceRoot = path.resolve('src/content/media');
const outputRoot = path.resolve('dist/media');

async function copyAssets(sourceDirectory, relativeDirectory = '') {
  const entries = await readdir(sourceDirectory, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(sourceDirectory, entry.name);
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) {
      await copyAssets(sourcePath, relativePath);
    } else if (!entry.name.endsWith('.md') && !entry.name.endsWith('.mdx')) {
      const destinationPath = path.join(outputRoot, relativePath);
      await mkdir(path.dirname(destinationPath), { recursive: true });
      await cp(sourcePath, destinationPath);
    }
  }
}

await copyAssets(sourceRoot);
