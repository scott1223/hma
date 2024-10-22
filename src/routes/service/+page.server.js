
import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	const slug = url.pathname.replace('/service/', '');
	try {
		const mediaURL = `${CMS_URL}/api/services?fields[0]=title&populate[heroimages]=true&populate[SEO]=true&populate[thumbnail]=true`
		const mediaData = await fetchWithRetry(mediaURL);

		const mediaPageURL = `${CMS_URL}/api/service-page?populate[service_list][populate]=*&populate[heroImages]=true&populate[heroImages2]=true&populate=*`
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
