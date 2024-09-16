import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	const slug = url.pathname.replace('/media/', '');
	try {
		const soloMedaURL = `${CMS_URL}/api/media?filters[SEO][slug][$eq]=${slug}&populate[heroImages1]=*&populate[heroImages2]=*&populate[thumbnail]=*&populate[title]=*&populate[textBlock][populate][contentElement]=*&populate[bigImage]=*&populate[SEO]=*`;
		const soloMediaData = await fetchWithRetry(soloMedaURL);
		
		const mediaArrayURL = `${CMS_URL}/api/media?fields[0]=title&populate[thumbnail]=*&populate[SEO]=*&fields[1]=publishedAt&pagination[page]=1&pagination[pageSize]=6`
		const mediaArray = await fetchWithRetry(mediaArrayURL)

		if(soloMediaData.data.length === 0) {
			error(404, {
                message: 'Страница не найдена'
            });
		}

		return {
			soloMediaData: soloMediaData.data[0].attributes,
			mediaArray: mediaArray.data
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
