import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const body = {
		success: true,
		message: "OK",
		commit: import.meta.env.CF_PAGES_COMMIT_SHA?.slice(0, 7) ?? null,
		lastmod: new Date().toISOString(),
		tech: "Astro",
	};

	return new Response(JSON.stringify(body), {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
			"Content-Type": "application/json",
		},
	});
};
