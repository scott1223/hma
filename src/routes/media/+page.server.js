
import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	const slug = url.pathname.replace('/medias/', '');
	try {
		const mediaURL = `${CMS_URL}/api/media?fields[0]=title&populate[thumbnail]=true&populate[SEO]=true&fields[1]=publishedAt`
		const mediaData = await fetchWithRetry(mediaURL);

		const mediaPageURL = `${CMS_URL}/api/media-page?populate=*`
		const mediaPageData = await fetchWithRetry(mediaPageURL);

		return {
			mediaArray: mediaData,
			mediaPage: mediaPageData.data
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
