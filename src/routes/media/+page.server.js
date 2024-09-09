import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';

export async function load({ url }) {
	const slug = url.pathname.replace('/medias/', '');
	try {
		const media = await fetch(`${CMS_URL}/api/media?fields[0]=title&populate[thumbnail]=true&populate[SEO]=true&fields[1]=publishedAt`);
		const mediaData = await media.json();

		const mediaPage = await fetch(`${CMS_URL}/api/media-page?populate=*`);
		const mediaPageData = await mediaPage.json();

		return {
			mediaArray: mediaData,
			mediaPage: mediaPageData.data
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
