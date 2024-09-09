import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';

export async function load({ url }) {
	const slug = url.pathname.replace('/media/', '');
	try {
		const apiRoute = `${CMS_URL}/api/media?filters[SEO][slug][$eq]=${slug}&populate[heroImages1]=*&populate[heroImages2]=*&populate[thumbnail]=*&populate[title]=*&populate[textBlock][populate][contentElement]=*&populate[bigImage]=*&populate[SEO]=*`;
		const soloMediaDataResponse = await fetch(apiRoute);
		const soloMediaData = await soloMediaDataResponse.json();
		
		const mediaArrayResponse = await fetch(`${CMS_URL}/api/media?fields[0]=title&populate[thumbnail]=*&populate[SEO]=*&fields[1]=publishedAt&pagination[page]=1&pagination[pageSize]=6`) 
		const mediaArray = await mediaArrayResponse.json()

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
