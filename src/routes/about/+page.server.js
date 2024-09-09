import { error } from '@sveltejs/kit';

export async function load({ url }) {
	try {
		const cases = await fetch(`http://localhost:1337/api/about?populate[accordion]=*&populate[teamMembers][populate][image]=*&populate[heroImages1]=*&populate[heroImages2]=*&populate[SEO]=*`);
		const data = await cases.json();

		return {
			data: data.data.attributes
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
