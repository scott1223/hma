import { CMS_URL } from '$lib/globals.js';

export async function load({ url }) {
	const slug = url.pathname.replace('/cases/', '');
    const apiForTitle = `${CMS_URL}/api/cases?filters[SEO][slug][$eq]=${slug}&fields[0]=title`
    const responseTitle = await fetch(apiForTitle)
    const title = await responseTitle.json()

    const apiForFooter = `${CMS_URL}/api/footer?populate=*`
    const responseFooter = await fetch(apiForFooter)
    const footer = await responseFooter.json()

    return {
        url: url.pathname,
        title: title?.data[0]?.attributes.title,
        footerInfo: footer?.data?.attributes
    };
}