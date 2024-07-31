<script>
	import { gsap } from 'gsap/dist/gsap.js';
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	const scrollAnimation = (scrollDivs) => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.scroll-philosophy-section',
				pin: true,
				start: 'top 10px',
				end: `+=${scrollDivs[0].scrollHeight * 3}px`,
				scrub: 1,
			}
		});

		tl.to(scrollDivs[3], {
			height: '0%'
		}).to(scrollDivs[2], {
			height: '0%'
		}).to(scrollDivs[1], {
			height: '0%'
		});
	};

	onMount(() => {
		const scrollDivs = document.querySelectorAll('.scroll-philosophy div');

        scrollAnimation(scrollDivs)
	});
</script>

<section class="scroll-philosophy-section --margin-bottom">
	<div class="container">
		<div class="scroll-philosophy">
			<div style="background-image: url('/project3.png');"></div>
			<div style="background-image: url('/project1.png');"></div>
			<div style="background-image: url('/project2.png');"></div>
			<div style="background-image: url('/project3.png');"></div>
			<h3>Вам как Себе - наша уникальная философия и подход в создании проектов.</h3>
		</div>
	</div>
</section>

<style lang="scss">
	.scroll-philosophy {
		max-height: 1920px;
		height: calc(100dvh - 20px);
		display: flex;
		align-items: end;

		&-section {
			max-height: 1920px;
			height: calc(100dvh - 20px);
			border-radius: var(--border-radius);
			overflow: hidden;
		}

		div {
            top: 0;
            left: 0;
			height: 100%;
			width: 100%;
			position: absolute;
			background-attachment: fixed;
			background-size: cover;
			background-position: top top;
			background-repeat: no-repeat;
            filter: brightness(60%);
			border-radius: var(--border-radius);
			overflow: hidden;
		}
		h3 {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-align: center;
			width: 80%;
			text-wrap: balance;
			color: #fff;
            line-height: 100%;
			font-size: clamp(50px, calc(75 / 1600 * 100vw), 75px);
		}
	}
</style>
