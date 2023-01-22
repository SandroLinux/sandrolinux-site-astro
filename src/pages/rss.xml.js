import rss from '@astrojs/rss';
import { SITE_TITLE, RSS_DESCRIPTION } from '../config';

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: RSS_DESCRIPTION,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.{md,mdx}'),
	});
