/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
        const res = await env.ASSETS.fetch(request)
		const headers = new Headers(res.headers)
		// Cache for 7 days in user browsers
		headers.set("Cache-Control", "max-age=604800")
		headers.set('Content-Type', 'application/javascript')
		headers.append('X-Served-By', "ninjapanel-navbar-worker")
		return new Response(res.body, { headers });
    }
} satisfies ExportedHandler<Env>;
