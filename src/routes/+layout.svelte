<script>
	import { onMount } from 'svelte';
	import '../app.scss';

	import Lenis from 'lenis';

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

<slot />
