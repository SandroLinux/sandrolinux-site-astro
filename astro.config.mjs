import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://sandrolinux.com',
	lastmod: new Date('2023-01-24'),
	integrations: [mdx(), sitemap()],
});
