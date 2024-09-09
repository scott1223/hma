<script>
	import HeroAbout from "$lib/components/HeroAbout.svelte";
	import Accordion from "$lib/components/Accordion.svelte";
	import Stuff from "$lib/components/Stuff.svelte";
	import { SITE_URL } from '$lib/globals.js';

    let {data} = $props()

	let seo = data?.data?.SEO
	console.log(data)
</script>

<svelte:head>
	<title>{seo?.title}</title>
	<meta name="description" content={seo?.description}> 
	<meta name="og:title" content={seo?.title}> 
	<meta name="og:description" content={seo?.description}> 
	<meta name="og:url" content={SITE_URL + seo?.slug}> 
	<meta name="og:description" content={seo?.description}> 
</svelte:head>

<HeroAbout heroImages1={data.data.heroImages1.data} heroImages2={data.data.heroImages2.data} />
<Accordion accordion={data.data.accordion} />
<Stuff teamMembers={data.data.teamMembers} />