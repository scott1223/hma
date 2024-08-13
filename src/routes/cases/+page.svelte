<script>
	import HeroCases from '$lib/components/HeroCases.svelte';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';

	let projects = [
		{
			href: '/cases/123',
			image: '/project1.png',
			name: 'Peeps',
			desc: 'Our mission is creating world-class websites where beauty meets art of sales. Why rot to have both.',
			tags: ['Our mission', 'branding', 'logo']
		},
		{
			href: '/cases/123',
			image: '/project2.png',
			name: 'Happy Pet',
			desc: 'Our mission is creating world-class websites where beauty meets art of sales. Why rot to have both.',
			tags: ['Our mission', 'branding', 'logo']
		},
		{
			href: '/cases/123',
			image: '/project3.png',
			name: 'Syntesis',
			desc: 'Our mission is creating world-class websites where beauty meets art of sales. Why rot to have both.',
			tags: ['Our mission', 'branding', 'logo']
		},
		{
			href: '/cases/123',
			image: '/project1.png',
			name: 'Peeps',
			desc: 'Our mission is creating world-class websites where beauty meets art of sales. Why rot to have both.',
			tags: ['Our mission', 'branding', 'logo']
		},
		{
			href: '/cases/123',
			image: '/project2.png',
			name: 'Happy Pet',
			desc: 'Our mission is creating world-class websites where beauty meets art of sales. Why rot to have both.',
			tags: ['Our mission', 'branding', 'logo']
		},
		{
			href: '/cases/123',
			image: '/project3.png',
			name: 'Syntesis',
			desc: 'Our mission is creating world-class websites where beauty meets art of sales. Why rot to have both.',
			tags: ['Our mission', 'branding', 'logo']
		}
	];
</script>

<HeroCases />
<ProjectsGrid isCasesPage={true} {projects} />
