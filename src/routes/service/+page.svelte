<script>
	import HeroMedia from '$lib/components/media/HeroMedia.svelte';
	import MediaGrid from '$lib/components/media/MediaGrid.svelte';
	import { SITE_URL } from '$lib/globals.js';

	let { data } = $props();

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
<div class='cdu-service-mediagrid-wrapper'>
  <MediaGrid mediaArray={data.mediaArray.data} sectionCode='/service/' />
</div>

<style lang="scss">
	:global(.cdu-service-mediagrid-wrapper  .media-grid.media-grid) {
      width: 80%;
      margin: auto;
      flex-wrap: wrap;
      flex-direction: row;
    }

  :global(.cdu-service-mediagrid-wrapper .media-grid-borders) {
      display: none !important;
  }

  :global(.cdu-service-mediagrid-wrapper .media-grid.media-grid > a) {
      display: block;
      border: 1px solid;
      width: calc(50% - 3px);
      height: 500px;
      position: relative;
      max-height: 40vw;
  }

  :global(.cdu-service-mediagrid-wrapper .media-grid-element-title.media-grid-element-title) {
      position: absolute;
      bottom: 0;
      color: #CCC;
      z-index: 2;
  }

  :global(.cdu-service-mediagrid-wrapper .media-grid-element-source.media-grid-element-source) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      padding: 0;
  }

  :global(.cdu-service-mediagrid-wrapper .media-grid-element-source.media-grid-element-source img) {
      height: 100%;
      border-radius: 0;
      width: 100%;
      object-fit: cover;
      object-position: center;
  }
</style>