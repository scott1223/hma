import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';

export async function load({ url }) {
	try {
		const cases = await fetch(`${CMS_URL}/api/about?populate[accordion]=*&populate[teamMembers][populate][image]=*&populate[heroImages1]=*&populate[heroImages2]=*&populate[SEO]=*`);
		const data = await cases.json();

		return {
			data: data.data.attributes
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
