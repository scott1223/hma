import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	try {
		const slug = url.pathname.replace('/cases/', '');
		const casesURL = `${CMS_URL}/api/cases?populate[heroImages]=*&populate[thumbnail]=*&populate[servicesList][populate]=*&populate[bigImage][populate][image]=*&populate[textBlock][populate][quote][populate][image]=*&populate[slider][populate]=*&populate[textBlock2][populate][contentElement][populate]=videoMp4&populate[textBlock2][populate][contentElement]=*&populate[textBlock2][populate][quote][populate][image]=*&populate[SEO][populate][image]=*&populate[client_logo]=*&populate[GridPhotoBlock][populate]=*&populate[Test]=*&populate[textBlock][populate][contentElement][populate]=videoMp4&sort[0]=id:desc`;
		const { data } = await fetchWithRetry(casesURL);
    
		let currentCaseIndex = data.findIndex( item => item.attributes.SEO.slug === slug );
    if (currentCaseIndex == -1) {
            error(404, {
                message: 'Страница не найдена'
            });
            throw error;
    }
    const prevCaseIndex = currentCaseIndex ? currentCaseIndex - 1 : data.length - 1;
    const nextCaseIndex = (currentCaseIndex == (data.length - 1)) ? 0 : currentCaseIndex + 1;
		return {
			content: data[currentCaseIndex],
			prevCase: data[prevCaseIndex],
			nextCase: data[nextCaseIndex]
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}