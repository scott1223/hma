<script>
	import HeroMedia from '$lib/components/media/HeroMedia.svelte';
	import MediaGrid from '$lib/components/media/MediaGrid.svelte';
	import { SITE_URL } from '$lib/globals.js';

	let { data } = $props();
	console.log(data)

	let seo = data?.mediaPage?.attributes?.SEO
</script>

<svelte:head>
	<title>{seo?.title}</title>
	<meta name="description" content={seo?.description}> 
	<meta name="og:title" content={seo?.title}> 
	<meta name="og:description" content={seo?.description}> 
	<meta name="og:url" content={SITE_URL + seo?.slug}> 
	<meta name="og:description" content={seo?.description}> 
</svelte:head>

<HeroMedia heroImages1={data.mediaPage.attributes.heroImages1.data} heroImages2={data.mediaPage.attributes.heroImages2.data} />
<MediaGrid mediaArray={data.mediaArray.data} />
