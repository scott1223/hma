import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	try {
		const casesURL = `${CMS_URL}/api/cases?populate[thumbnail]=true&populate[tags]=true&populate[SEO]=true`;
		const cases = await fetchWithRetry(casesURL);
    
    cases.data.sort((a, b) => {
      const sortA = a.attributes.sort !== null ? a.attributes.sort : 0;
      const sortB = b.attributes.sort !== null ? b.attributes.sort : 0;
      return sortB - sortA || b.id - a.id;
    })

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
