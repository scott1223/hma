import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';

export async function load({ url }) {
	const slug = url.pathname.replace('/cases/', '');
	try {
		const cases = await fetch(`${CMS_URL}/api/cases?fields[0]=title&populate[thumbnail]=true&populate[tags]=true&populate[SEO]=true`);
		const casesData = await cases.json();

		const casesPage = await fetch(`${CMS_URL}/api/cases-page?populate=*`);
		const casesPageData = await casesPage.json();


		return {
			cases: casesData,
			casesPage: casesPageData.data
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
