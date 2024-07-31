import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess({
		scss: {
			syntax: 'scss'
		}
	}),
	kit: {
		adapter: adapter({ out: 'build' }),
		alias: {
			$assets: './static'
		}
	}
};

export default config;
