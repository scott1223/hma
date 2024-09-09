<script>
	import HeroMediaSolo from '$lib/components/media/HeroMediaSolo.svelte';
	import DescriptionBlock from '$lib/components/solocase/DescriptionBlock.svelte';
	import FullImage from '$lib/components/solocase/FullImage.svelte';
	import MediaGrid from '$lib/components/media/MediaGrid.svelte';
	import { SITE_URL } from '$env/static/private';

	let {data} = $props();

	let seo = data.soloMediaData.SEO
	console.log(seo)
</script>

<svelte:head>
	<title>{seo?.title}</title>
	<meta name="description" content={seo?.description}> 
	<meta name="og:title" content={seo?.title}> 
	<meta name="og:description" content={seo?.description}> 
	<meta name="og:url" content={SITE_URL + 'media/' + seo?.slug}> 
	<meta name="og:description" content={seo?.description}> 
</svelte:head>

<HeroMediaSolo heroImages1={data.soloMediaData.heroImages1.data}  />
<DescriptionBlock info={data.soloMediaData.textBlock}  />
<FullImage bigImage={data.soloMediaData.bigImage?.data?.attributes}  />
<MediaGrid mediaArray={data.mediaArray} />