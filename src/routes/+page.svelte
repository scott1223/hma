<script>
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onDestroy, onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import ScrollPhilosophy from '$lib/components/ScrollPhilosophy.svelte';
	import HalfCta from '$lib/components/HalfCta.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import { SITE_URL } from '$env/static/private';

	let { data } = $props();

	let seo = data?.home?.attributes.SEO

	onMount(() => {
		ScrollTrigger.getAll().forEach((trigger) => {
			trigger.refresh();
		});
	})
	onDestroy(() => {
		ScrollTrigger.getAll().forEach((trigger) => {
			trigger.kill();
		});
	});
</script>

<svelte:head>
	<title>{seo?.title}</title>
	<meta name="description" content={seo?.description}> 
	<meta name="og:title" content={seo?.title}> 
	<meta name="og:description" content={seo?.description}> 
	<meta name="og:url" content={SITE_URL}> 
	<meta name="og:description" content={seo?.description}> 
</svelte:head>

<Hero heroImages1={data?.home?.attributes?.heroImages1} heroImages2={data?.home?.attributes?.heroImages2} />
<ProjectsGrid projects={data.cases.data} isCasesPage={false} />
<ScrollPhilosophy data={data.home.attributes.photoScroll} />
<ServicesGrid services={data.home.attributes.workProccessStep} />
<HalfCta scrollText={data.home.attributes.scrollText} scrollText2={data.home.attributes.scrollText2} />
