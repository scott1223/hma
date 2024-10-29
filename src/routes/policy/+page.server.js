import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	try {
		const aboutURL = `${CMS_URL}/api/policy?populate[SEO]=true&populate=*`;
		const about = await fetchWithRetry(aboutURL);
		return {
			data: about.data.attributes
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
