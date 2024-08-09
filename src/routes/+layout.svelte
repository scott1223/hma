<script>
	import '../app.scss';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { getIsNavigating } from '$lib/settings.svelte.js';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import Lenis from 'lenis';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';

	const globalNavigation = getIsNavigating();
	const { data } = $props();
	let lenis;
	let cover;

	function setInitials() {
		gsap.set(cover, { yPercent: 0, scale: 0.95 });
	}
	function outroGSAP(node, { duration = 1000, ease = 'power2.inOut', delay }) {
		const scrollValue = lenis.scroll
		const tl = gsap.timeline({
			defaults: {
				ease: ease,
				duration: duration / 2
			}
		});
		gsap.set(cover, {
			yPercent: 0,
			scale: 0.95
		});

		tl.fromTo(
			node,
			{
				scale: 1,
				y: 0,
				duration: duration / 4,
				onComplete: () => {lenis.scrollTo(scrollValue, { immediate: true });}
			},
			{
				scale: 0.95,
				y: 100,
				duration: duration / 4
			},
		).to(cover, {
			yPercent: -100,
			scale: 1
		});

		return {
			delay,
			duration,
			ease,
			tick: (t) => {
				tl.progress(1 - t);
			}
		};
	}
	function introGSAP(node, { duration = 1000, ease = 'power2.inOut', delay = 1000 }) {
		const tl = gsap.timeline({
			defaults: {
				duration: duration,
				ease: ease,
				delay: delay
			}
		});

		tl.to(cover, {
			yPercent: -210
		});

		return {
			delay,
			duration,
			ease,
			tick: (t) => {
				tl.progress(t);
			}
		};
	}

	function lenisScrollStart() {
		lenis = new Lenis({
			lerp: 0.08
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}
	onMount(() => {
		setInitials();
		lenisScrollStart();
	});
</script>

<main>
	<Header />
	<div class="cover-transition" bind:this={cover}>
		<p>
			{#if data.url === '/about'}
				О нас
			{:else if data.url === '/'}
				Hey Marketing Agency
			{/if}
		</p>
	</div>
	{#key data.url}
		<div
			class="transition-wrap"
			out:outroGSAP={{ duration: 2000 }}
			in:introGSAP={{ duration: 2000, delay: 2000 }}
			onintrostart={() => {}}
			onoutrostart={() => {
				globalNavigation.isNavigatingTrue();
				setTimeout(() => {
					globalNavigation.isNavigatingFalse();
				}, 3600);
			}}
			onintroend={() => {
				setInitials();
				ScrollTrigger.getAll().forEach((trigger) => {
					trigger.refresh();
				});
			}}
			onoutroend={() => {
				if (lenis) {
					lenis.scrollTo(0, { immediate: true });
				}
			}}
		>
			<slot />
			<Footer />
		</div>
	{/key}

	<a href="/about">about</a>
	<a href="/">home</a>
</main>

<style lang="scss">
	.transition-wrap {
		transform-origin: top;
	}
	.cover-transition {
		border-radius: var(--border-radius);
		overflow: hidden;
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 100%;
		left: 0;
		pointer-events: none;
		z-index: 100;
		background-color: var(--accent-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transform: scale(0.95, 0.95);

		p {
			width: 100%;
			font-size: clamp(50px, calc(60 / 1600 * 100vw), 60px);
			font-weight: 500;
			color: #fff;
			text-align: center;

			@media (max-width: 767px) {
				font-size: clamp(30px, calc(60 / 1600 * 100vw), 60px);
			}
		}
	}
</style>
