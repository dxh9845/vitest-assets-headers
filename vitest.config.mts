import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				miniflare: {
                    assets: {
                        // Add a mock asset directory
                        directory: "./public2",
                        binding: "ASSETS",
                    },
                },
				wrangler: { configPath: './wrangler.toml' },
			},
		},
	},
});
