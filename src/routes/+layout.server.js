import { CMS_URL } from '$lib/globals.js';
import { fetchWithRetry } from '$lib/utils.js';

export async function load({ url }) {
    let title = ''
    if (url.pathname.includes('/cases/')) {
      const slug = url.pathname.replace('/cases/', '');
      const titleURL = `${CMS_URL}/api/cases?filters[SEO][slug][$eq]=${slug}&fields[0]=title`
      title = await fetchWithRetry(titleURL)
      title = title?.data[0]?.attributes.title
    } else {
      const p = url.pathname.split('/')
      if (!p[2] && p[1]) {
        const titleURL = `${CMS_URL}/api/${p[1]}?populate[SEO]=true`
        const data = await fetchWithRetry(titleURL)
        title = data.data?.attributes?.SEO?.title
      }
      if (p[2] && p[1]) {
        const titleURL = `${CMS_URL}/api/${p[1]}s?filters[SEO][slug][$eq]=${p[2]}&fields[0]=title`
        const data = await fetchWithRetry(titleURL)
        title = data.data?.length ? data.data[0]?.attributes?.title : data.data?.attributes?.title
        if (!title) {
          const titleURL = `${CMS_URL}/api/${p[1]}?filters[SEO][slug][$eq]=${p[2]}&fields[0]=title`
          const data = await fetchWithRetry(titleURL)
          title = data?.data[0]?.attributes?.title
        }
      }
      
    }

    const footerURL = `${CMS_URL}/api/footer?populate=*`
    const footer = await fetchWithRetry(footerURL)

    return {
        url: url.pathname,
        title: title,
        footerInfo: footer?.data?.attributes
    };
}