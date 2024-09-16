import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	try {
		const casesURL = `${CMS_URL}/api/cases?fields[0]=title&populate[thumbnail]=true&populate[tags]=true&populate[SEO]=true&pagination[page]=1&pagination[pageSize]=6`;
		const casesData = await fetchWithRetry(casesURL);

		const homeURL = `${CMS_URL}/api/home?populate[photoScroll][populate][images]=*&populate[workProccessStep][populate][images]=*&populate[heroImages1]=*&populate[heroImages2]=*&populate[SEO]=*`;
		const homeData = await fetchWithRetry(homeURL);

		return {
			cases: casesData,
			home: homeData.data
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
