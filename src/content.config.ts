import { readdir } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, type Loader } from "astro/loaders";

const markdownLoader = glob({
	pattern: "**/*.md",
	base: "./src/content/media",
});

const imageExtensions = new Set([".jpeg"]);

const mediaLoader: Loader = {
	name: "media-entry-loader",
	async load(context) {
		await markdownLoader.load(context);

		for (const [id, entry] of context.store.entries()) {
			if (!entry.filePath) {
				throw new Error(`Media entry "${id}" does not have a file path.`);
			}

			const entryDirectory = resolve(fileURLToPath(context.config.root), dirname(entry.filePath));
			const imageFiles = await readdir(entryDirectory, { withFileTypes: true });
			const images = imageFiles
				.filter((file) => file.isFile() && imageExtensions.has(extname(file.name).toLowerCase()))
				.map((file) => file.name)
				.sort((left, right) => left.localeCompare(right))
				.map((file) => ({
					title: file
						.slice(0, -extname(file).length)
						.replace(/[-_]+/g, " ")
						.replace(/\b\w/g, (character) => character.toUpperCase()),
					url: file,
				}));
				console.log(`images for ${id}:`, images);
			const data = await context.parseData({
				id,
				data: { ...entry.data, images: images || [] },
				filePath: entry.filePath,
			});

			// store.set() is a no-op when the digest is unchanged, so derive a new one that includes the images
			const digest = context.generateDigest({ digest: String(entry.digest ?? ""), images });
			context.store.set({ ...entry, data, digest });
		}
	},
};

const entries = defineCollection({
	loader: mediaLoader,
	schema: z.object({
		title: z.string(),
		handle: z.string(),
		company: z.string().optional(),
		indexEntries: z.array(z.string()).optional(),
		imgCount: z.number().optional(),
		capacities: z.array(z.string()).optional(),
		technology: z.string().optional(),
		dpi: z.string().optional(),
		width: z.number().optional(),
		height: z.number().optional(),
		depth: z.number().optional(),
		images: z.array(z.object({
			title: z.string(),
			url: z.string(),
		})).default([]),
		links: z.array(z.object({
			title: z.string(),
			prefix: z.string().optional(),
			url: z.string(),
		})).optional(),
		seealso: z.array(z.object({
			title: z.string(),
			description: z.string().optional(),
			url: z.string(),
		})).optional(),
		h1: z.string().optional(),
		subtitle: z.string().optional(),
		tags: z.array(z.string()).optional().default([]),
		noindex: z.boolean().optional().default(false),
	}),
});

export const collections = { entries };
