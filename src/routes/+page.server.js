import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';

export async function load({ url }) {
	try {
		const cases = await fetch(`${CMS_URL}/api/cases?fields[0]=title&populate[thumbnail]=true&populate[tags]=true&populate[SEO]=true&pagination[page]=1&pagination[pageSize]=6`);
		const casesData = await cases.json();

		const home = await fetch(`${CMS_URL}/api/home?populate[photoScroll][populate][images]=*&populate[workProccessStep][populate][images]=*&populate[heroImages1]=*&populate[heroImages2]=*&populate[SEO]=*`);
		const homeData = await home.json();

		return {
			cases: casesData,
			home: homeData.data
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
