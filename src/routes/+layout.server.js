import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
	const slug = url.pathname.replace('/cases/', '');
    const titleURL = `${CMS_URL}/api/cases?filters[SEO][slug][$eq]=${slug}&fields[0]=title`
    const title = await fetchWithRetry(titleURL)

    const footerURL = `${CMS_URL}/api/footer?populate=*`
    const footer = await fetchWithRetry(footerURL)

    return {
        url: url.pathname,
        title: title?.data[0]?.attributes.title,
        footerInfo: footer?.data?.attributes
    };
}