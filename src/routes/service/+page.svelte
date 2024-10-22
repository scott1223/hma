<script>
	import HeroMedia from '$lib/components/media/HeroMedia.svelte';
	import MediaGrid from '$lib/components/media/MediaGrid.svelte';
	import { SITE_URL } from '$lib/globals.js';
	import Stuff from "$lib/components/Stuff.svelte";

	let { data } = $props();
  
  let teamData = [];
  data.mediaArray.data.map( e => {
    teamData.push({
      image: {
        data: {
          attributes: {
            link: '/service/' + e.attributes.SEO.slug,
            url: e.attributes.thumbnail?.data?.attributes.url ?? null,
            alternativeText: e.attributes.title
      }}},
      name: e.attributes.title
    })
  })

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

<HeroMedia heroImages1={data.mediaPage.attributes.heroImages.data} heroImages2={data.mediaPage.attributes.heroImages2.data} title={data.mediaPage.attributes.title}/>
<Stuff teamMembers={teamData} philosophy='' />


<style lang="scss">
</style>