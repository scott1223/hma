<script>
	import HeroSoloCase from '$lib/components/solocase/HeroSoloCase.svelte';
	import FullImage from '$lib/components/solocase/FullImage.svelte';
	import DescriptionBlock from '$lib/components/solocase/DescriptionBlock.svelte';
	import SliderCase from '$lib/components/solocase/SliderCase.svelte';
	import NextPrev from '$lib/components/solocase/NextPrev.svelte';
	import GridPhotoBlock from '$lib/components/GridPhotoBlock.svelte';
	import CallContactFormBlock from '$lib/components/CallContactFormBlock.svelte';
	import { SITE_URL } from '$lib/globals.js';

	let {data} = $props();
	let content = data.content.attributes
	let seo = data.content.attributes.SEO
	
</script>

<svelte:head>
	<title>{seo?.title}</title>
	<meta name="description" content={seo?.description}> 
	<meta name="og:title" content={seo?.title}> 
	<meta name="og:description" content={seo?.description}> 
	<meta name="og:url" content={SITE_URL + 'cases/' + seo?.slug}> 
	<meta name="og:description" content={seo?.description}> 
</svelte:head>

<!-- <pre>
	{JSON.stringify(data.content[0].attributes, null, 4)}
</pre> -->

<HeroSoloCase heroImages={content.heroImages?.data} heroImages2={content.heroImages2?.data} services={content.servicesList} client={content.client} client_logo={content.client_logo} title={content.title} />
<FullImage bigImage={content.bigImage?.data?.attributes} />
<DescriptionBlock info={content.textBlock} />
<SliderCase sliderData={content.slider} />
<DescriptionBlock info={content.textBlock2} />
<GridPhotoBlock GridPhotoBlock={content.GridPhotoBlock} galleryId="casesPhotoGrid" />
<CallContactFormBlock />
<NextPrev prev={data.prevCase?.attributes} next={data.nextCase?.attributes} current={content} />	
