import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// Static (non-post) pages included in the sitemap.
const PAGES = [
	"all.html",
	"imagelicense.html",
	"other.html",
	"overview.html",
	//"tags.html",
	"todo.html",
];

for (let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++) {
	PAGES.push(`${String.fromCharCode(ch)}.html`);
}
const entries = (await getCollection('entries'));

for (const entry of entries) {
	if (!entry.data.noindex) {
		PAGES.push(`${entry.data.handle}/`);
	}
}

PAGES.sort((left, right) => left.localeCompare(right));

const PREFIX = "https://www.fileformat.info/media/";

export const GET: APIRoute = async () => {

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.xml.style/schemas/sitemap/0.9/sitemap.xsd"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<script src="https://www.xml.style/sitemap/basic.js" xmlns="http://www.w3.org/1999/xhtml"></script>
${PAGES.map((url) => `\t<url><loc>${PREFIX}${url}</loc></url>`).join("\n")}
</urlset>
`;

	return new Response(body, {
		headers: { "Content-Type": "application/xml" },
	});
};
