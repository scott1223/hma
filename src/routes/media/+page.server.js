import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const slug = url.pathname.replace('/medias/', '');
	try {
		const media = await fetch(`http://localhost:1337/api/media?fields[0]=title&populate[thumbnail]=true&populate[SEO]=true&fields[1]=publishedAt`);
		const mediaData = await media.json();

		const mediaPage = await fetch('http://localhost:1337/api/media-page?populate=*');
		const mediaPageData = await mediaPage.json();

		return {
			mediaArray: mediaData,
			mediaPage: mediaPageData.data
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}
