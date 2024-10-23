<script>
	import HeroMedia from '$lib/components/media/HeroMedia.svelte';
	import { SITE_URL } from '$lib/globals.js';
  import ContactModal from '$lib/components/ContactModal.svelte';

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
<div class="row cdu-address-container">
  <div class="col-12 col-sm-8 col-md-6 col-lg-4">
    <div class="row pb-4">
      <div class="col-3">
      Телефон:
      </div>
      <div class="col-9">
      {data.phone}
      </div>
    </div>
    <div class="row pb-4">
      <div class="col-3">
      e-mail:
      </div>
      <div class="col-9">
      {data.email}
      </div>
    </div>
    <div class="row pb-4">
      <div class="col-3">
      Адрес:
      </div>
      <div class="col-9">
      {data.address}
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <ContactModal open={true} notModal={true} hiddenFields={['title']}/>  
      </div>
    </div>
  </div>
  {#if (data.yandexMapLink)}
  <div class="col-12 col-sm-8 col-md-6 col-lg-4 d-flex justify-content-end ">
    {@html data.yandexMapLink}
  </div>
  {/if}
</div>

<style lang="scss">
.cdu-address-container {
  justify-content: center;
  font-size: 23px;
  font-weight: 300;
}
</style>