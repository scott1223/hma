<script>
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import ScrollPhilosophy from '$lib/components/ScrollPhilosophy.svelte';
	import { onDestroy, onMount } from 'svelte';
	import HalfCta from '../lib/components/HalfCta.svelte';
	import ServicesGrid from '../lib/components/ServicesGrid.svelte';

	onMount(() => {
		onDestroy(() => {
			ScrollTrigger.getAll().forEach((trigger) => {
				trigger.kill();
			});
		});
	});
</script>

<Hero />
<ProjectsGrid />
<ScrollPhilosophy />
<ServicesGrid />
<HalfCta />
