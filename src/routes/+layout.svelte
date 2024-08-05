<script>
	import { onMount } from 'svelte';
	import '../app.scss';

	import Lenis from 'lenis';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		const lenis = new Lenis({
			lerp: 0.08
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	});
</script>

<main>
	<slot />
	<Footer />
</main>
