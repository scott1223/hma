import adapter from '@sveltejs/adapter-node';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const mdsvexOptions = {
	extentions: ['.md']
}

const config = {
	extentions: ['.md', '.svelte'],
	preprocess: [
		sveltePreprocess({
			scss: {
				syntax: 'scss',
			}
		}),
		mdsvex(mdsvexOptions),
		vitePreprocess()
	],
	kit: {
		adapter: adapter({ out: 'build' })
	}
};

export default config;
