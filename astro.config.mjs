// @ts-check
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';import { defineConfig } from "astro/config";

const contentRoot = path.resolve('src/content');
const contentSections = new Set(['media']);
const contentTypes = {
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
};

function serveContentAssets() {
  return {
    name: 'serve-content-assets-in-development',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (!request.url || request.method !== 'GET') {
            return next();
        }

        const pathname = decodeURIComponent(request.url.split('?')[0]);
        const [section] = pathname.split('/').filter(Boolean);
        if (!contentSections.has(section)) {
            return next();
        }

        const assetPath = path.resolve(contentRoot, `.${pathname}`);
        if (!assetPath.startsWith(`${contentRoot}${path.sep}`)) {
            return next();
        }

        try {
          const asset = await stat(assetPath);
          if (!asset.isFile()) return next();
          response.setHeader('Content-Type', contentTypes[path.extname(assetPath).toLowerCase()] ?? 'application/octet-stream');
          createReadStream(assetPath).pipe(response);
        } catch {
          next();
        }
      });
    },
  };
}

export default defineConfig({
    build: {
        format: "preserve",
    },
    compressHTML: false,
    output: "static",
    server: {
        port: process.env.PORT ? parseInt(process.env.PORT) : 4000,
        host: true,
    },
    site: "https://www.fileformat.info",
    trailingSlash: "ignore",
    vite: {
        plugins: [serveContentAssets()],
    },
});
