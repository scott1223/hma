<script>
	import HeroCases from '$lib/components/HeroCases.svelte';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import { SITE_URL } from '$lib/globals.js';

	let {data} = $props()

	let seo = data.casesPage.attributes.SEO
</script>

<svelte:head>
	<title>{seo?.title}</title>
	<meta name="description" content={seo?.description}> 
	<meta name="og:title" content={seo?.title}> 
	<meta name="og:description" content={seo?.description}> 
	<meta name="og:url" content={SITE_URL + seo?.slug}> 
	<meta name="og:description" content={seo?.description}> 
</svelte:head>

<HeroCases heroImages1={data.casesPage.attributes.heroImages1.data} heroImages2={data.casesPage.attributes.heroImages2.data} />
<ProjectsGrid isCasesPage={true} projects={data.cases.data} />
