import { error } from '@sveltejs/kit';
import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	try {
		const slug = url.pathname.replace('/cases/', '');
		const caseURL = `${CMS_URL}/api/cases?filters[SEO][slug][$eq]=${slug}&populate[heroImages]=*&populate[thumbnail]=*&populate[servicesList][populate]=*&populate[bigImage][populate][image]=*&populate[textBlock][populate][contentElement]=*&populate[textBlock][populate][quote][populate][image]=*&populate[slider][populate]=*&populate[textBlock2][populate][contentElement]=*&populate[textBlock2][populate][quote][populate][image]=*&populate[SEO][populate][image]=*&populate[client_logo]=*`;
		const { data } = await fetchWithRetry(caseURL);
		let currentCaseId = data[0]?.id;
		let prevCase;
		let nextCase;

		if (currentCaseId) {
            let nextID = ++currentCaseId
            let prevID = nextID - 2

			const prevResponse = await fetch(
				`${CMS_URL}/api/cases?filters[id]=${prevID}&fields[0]=title&populate[thumbnail]=true&populate[SEO][fields][0]=slug`
			);
			const prevData = await prevResponse.json();
			prevCase = prevData.data[0] || null;

			const nextResponse = await fetch(
				`${CMS_URL}/api/cases?filters[id]=${nextID}&fields[0]=title&populate[thumbnail]=true&populate[SEO][fields][0]=slug`
			);
			const nextData = await nextResponse.json();
			nextCase = nextData.data[0] || null;
		} else {
            error(404, {
                message: 'Страница не найдена'
            });
        }

		return {
			content: data[0],
			prevCase: prevCase,
			nextCase: nextCase
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
