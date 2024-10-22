<script>
	import HeroMedia from '$lib/components/media/HeroMedia.svelte';
	import { SITE_URL } from '$lib/globals.js';

    let {data} = $props()
    data = data?.data
	let seo = data?.SEO
  if (!data.title) data.title = seo?.title
</script>

<svelte:head>
	<title>{seo?.title}</title>
	<meta name="description" content={seo?.description}> 
	<meta name="og:title" content={seo?.title}> 
	<meta name="og:description" content={seo?.description}> 
	<meta name="og:url" content={SITE_URL + seo?.slug}> 
	<meta name="og:description" content={seo?.description}> 
</svelte:head>

<HeroMedia heroImages1={data?.heroImages1.data} heroImages2={data?.heroImages2.data} title={data?.title} />
<div class="container cdu-address-container">
  <dl>
    <dt>Телефон:</dt>
    <dd>{data.phone}</dd>
    <dt>e-mail:</dt>
    <dd>{data.email}</dd>
    <dt>Адрес:</dt>
    <dd>{data.address}</dd>
  </dl>
  {#if (data.yandexMapLink)}
  <div class="cdu-yandex-map-wrapper">
    {@html data.yandexMapLink}
  </div>
  {/if}
  

</div>