import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	try {
		const casesURL = `${CMS_URL}/api/cases?fields[0]=title&populate[thumbnail]=true&populate[tags]=true&populate[SEO]=true&sort[0]=id:desc`;
		const cases = await fetchWithRetry(casesURL);

		const casesPageURL = `${CMS_URL}/api/cases-page?populate=*`;
		const casesPage = await fetchWithRetry(casesPageURL);

		return {
			cases: cases,
			casesPage: casesPage.data
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
