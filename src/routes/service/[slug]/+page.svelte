<script>
	import HeroMediaSolo from '$lib/components/media/HeroMediaSolo.svelte';
	import DescriptionBlockRich from '$lib/components/DescriptionBlockRich.svelte';
	import FullImage from '$lib/components/solocase/FullImage.svelte';
	import MediaGrid from '$lib/components/media/MediaGrid.svelte';
	import { SITE_URL } from '$lib/globals.js';
	import { marked } from 'marked';
	import Accordion from "$lib/components/Accordion.svelte";
	import GridPhotoBlock from '$lib/components/GridPhotoBlock.svelte';

	let {data} = $props();
    let contactForm = data.footerInfo.contactForm;

	let seo = data.soloMediaData.SEO
</script>

<svelte:head>
	<title>{seo?.title ?? data.soloMediaData.pageTitle}</title>
	<meta name="description" content={seo?.description}> 
	<meta name="og:title" content={seo?.title ?? data.soloMediaData.pageTitle}> 
	<meta name="og:description" content={seo?.description}> 
	<meta name="og:url" content={SITE_URL + 'media/' + seo?.slug}> 
	<meta name="og:description" content={seo?.description}> 
</svelte:head>

<HeroMediaSolo heroImages1={data.soloMediaData.heroimages.data} soloText={data.soloMediaData.pageTitle} />
<div class="cdu-service-item-wrapper">
  <DescriptionBlockRich content={data.soloMediaData.textBlock1_1} />
  <Accordion accordion={data.soloMediaData.accordion} philosophy='' />
  <div class="container"><h2>{data.soloMediaData.title2}</h2></div>
  <GridPhotoBlock GridPhotoBlock={data.soloMediaData.gridPhoto} galleryId="casesPhotoGrid" />
  <DescriptionBlockRich content={data.soloMediaData.textBlock2_1} className='--margin-bottom' />
</div>

<style lang="scss">

	:global(.cdu-service-item-wrapper) {
    display: flex;
    flex-direction: column;
  }
  
  	:global(.cdu-service-item-wrapper h2) {
    font-size: 2em;
    margin: 0.5em 0;
  }
  

  
:global(.cdu-service-item-wrapper .accordion-grid) {
    width: 100%;
}

:global(.cdu-service-item-wrapper .accordion) {
    gap: 0;
}

:global(.contact-form-block) {
    display: flex;
    justify-content: center;
    padding: 2em 0;
    :global(.border-vertical) {
        display: none;
    }
    :global(h2), :global(h3) {
        margin: 0;
    }
}

</style>