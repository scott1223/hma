<script>
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onDestroy, onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import ScrollPhilosophy from '$lib/components/ScrollPhilosophy.svelte';
	import HalfCta from '../lib/components/HalfCta.svelte';
	import ServicesGrid from '../lib/components/ServicesGrid.svelte';

	let projects = [
		{
			href: '#',
			image: '/project1.png',
			name: 'Peeps',
			desc: 'Our mission is creating world-class websites where beauty meets art of sales. Why rot to have both.',
			tags: ['Our mission', 'branding', 'logo']
		},
		{
			href: '#',
			image: '/project2.png',
			name: 'Happy Pet',
			desc: 'Our mission is creating world-class websites where beauty meets art of sales. Why rot to have both.',
			tags: ['Our mission', 'branding', 'logo']
		},
		{
			href: '#',
			image: '/project3.png',
			name: 'Syntesis',
			desc: 'Our mission is creating world-class websites where beauty meets art of sales. Why rot to have both.',
			tags: ['Our mission', 'branding', 'logo']
		}
	]


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

<Hero />
<ProjectsGrid {projects} isCasesPage={false} />
<ScrollPhilosophy />
<ServicesGrid />
<HalfCta />
