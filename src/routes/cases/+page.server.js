import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const slug = url.pathname.replace('/cases/', '');
	try {
		const cases = await fetch(`http://localhost:1337/api/cases?fields[0]=title&populate[thumbnail]=true&populate[tags]=true&populate[SEO]=true`);
		const casesData = await cases.json();

		const casesPage = await fetch('http://localhost:1337/api/cases-page?populate=*');
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
