import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	try {
		const casesURL = `${CMS_URL}/api/cases?populate[thumbnail]=true&populate[tags]=true&populate[sort]=true&populate[SEO]=true&pagination[page]=1&pagination[pageSize]=100&sort[0]=sort:desc&sort[1]=id:desc`;
		const casesData = await fetchWithRetry(casesURL);
    casesData.data.sort((a, b) => {
      const sortA = a.attributes.sort !== null ? a.attributes.sort : 0;
      const sortB = b.attributes.sort !== null ? b.attributes.sort : 0;
      return sortB - sortA || b.id - a.id;
    });
    casesData.data = casesData.data.slice(0,6);

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
