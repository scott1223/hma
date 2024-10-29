<script>
    import { SITE_URL } from '$lib/globals.js';
    import { marked } from 'marked';
    import ShowMenu from '$lib/components/ShowMenu.svelte';
    
    marked.setOptions({breaks: true});

    let {data} = $props()
    data = data?.data
    let seo = data?.SEO
</script>

<svelte:head>
	<title>{seo?.title}</title>
	<meta name="description" content={seo?.description}> 
	<meta name="og:title" content={seo?.title}> 
	<meta name="og:description" content={seo?.description}> 
	<meta name="og:url" content={SITE_URL + seo?.slug}> 
	<meta name="og:description" content={seo?.description}> 
</svelte:head>

<ShowMenu />
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-8 marked-parse-block">
        {@html marked.parse(data?.policyText)}
        </div>
    </div>
</div>