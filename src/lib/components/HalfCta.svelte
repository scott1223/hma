<script>
	import { gsap } from 'gsap/dist/gsap.js';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onDestroy, onMount, getContext } from 'svelte';
	import { scale } from 'svelte/transition';
    import { CMS_URL } from '$lib/globals.js';

	let {scrollText2} = $props();
    let locked;

    const openModal = getContext('openModal');

	gsap.registerPlugin(ScrollTrigger);

	const master = gsap.timeline();

	const scrollAnimation = () => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.half-cta-section',
				pin: true,
				start: 'top 10px',
				end: '+=2500px',
				scrub: 1
			}
		});

		tl.to('[data-cover="1"]', {
			width: 'calc(50% - 3px)',
			duration: 2
		})
			.to(
				'[data-cover="1"] p',
				{
					autoAlpha: 0,
					duration: 0.3,
					delay: 1.5
				},
				'>'
			)
			.to(
				'[data-cover="2"] p',
				{
					autoAlpha: 0,
					duration: 0.3
				},
				'<'
			)
			.to('.half-cta-element-cover', {
				xPercent: 105,
				stagger: 0.3,
				duration: 2
			});

		return tl;
	};

	const scaleBack = () => {
		let timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.half-cta-section',
				start: 'bottom 400px',
				end: '+=100px',
				scrub: 1
			}
		});

		timeline.to('.half-cta-section', {
			scale: 0.95,
			yPercent: -10,
			duration: 0.5
		});

		return timeline;
	};

	onMount(() => {
        locked.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(true);
        });
		if (window.innerWidth > 1024) {
			setTimeout(() => {
				master.add(scrollAnimation()).add(scaleBack());
			}, 200);
		} else {
			scaleBack();
		}
	});

	onDestroy(() => {
		if (master) {
			master.kill();
		}
	});
</script>

<section class="half-cta-section --margin-bottom">
	<div class="container">
		<div class="half-cta">
			<div class="half-cta-element" data-cover="1">
				<div class="half-cta-element-wrap">
					<div class="half-cta-element-cover"></div>
					<div class="half-cta-element-content" style="background-image: url('{CMS_URL + '/uploads/about_hero1_2_839fe0180a.svg'}')">
					</div>
				</div>
                <a href="/about" class="position-absolute" style="z-index:1;inset:0"></a> 
			</div>
			<div class="half-cta-element" data-cover="2">
				<div class="half-cta-element-wrap">
					<div class="half-cta-element-cover"></div>
					<div class="half-cta-element-content">
						<a href="/" class="js-openModalButton" bind:this={locked}>Начать проект</a>
					</div>
					<p>{scrollText2}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.half-cta {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6px;
		height: calc(100dvh - 20px);

		@media (max-width: 1024px) {
			@media (orientation: portrait) {
				height: 50vh;
			}

			@media (orientation: landscape) {
				height: 100vh;
			}
		}
		@media (max-width: 767px) {
			height: 100%;
			display: flex;
			flex-direction: column;
		}

		&-element {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			border-radius: var(--border-radius);
			overflow: hidden;

			@media (max-width: 767px) {
				position: relative;
				aspect-ratio: 1;
			}

			&-wrap {
				height: 100%;
				width: 100%;
			}

			&-content {
				display: flex;
				align-items: center;
				justify-content: center;
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center center;

				width: 100%;
				height: 100%;

				a {
					width: fit-content;
					text-align: center;
					color: #fff;
					font-size: clamp(50px, calc(60 / 1600 * 100vw), 60px);
					font-weight: 500;

					@media (max-width: 767px) {
						font-size: clamp(30px, calc(60 / 1600 * 100vw), 60px);
					}

					&::before {
						content: '';
						width: 0%;
						height: 4px;
						position: absolute;
						top: 101%;
						background-color: #fff;
						transition: all 0.5s ease;
						border: var(--border-radius);
						overflow: hidden;
					}

					@media (hover: hover) {
						&:hover {
							&::before {
								width: 100%;
							}
						}
					}

					@media (hover: none) {
						&:active {
							&::before {
								width: 100%;
							}
						}
					}
				}
			}
			&-cover {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				z-index: 1;
			}

			&[data-cover='1'] {
				left: 0;
				z-index: 2;

				@media (max-width: 1024px) {
					width: calc(50% - 3px);
				}
				@media (max-width: 767px) {
					width: 100%;
				}

				.half-cta-element-cover {
					background-color: var(--accent-color);

					@media (max-width: 1024px) {
						display: none;
					}
				}

				p {
					position: absolute;
					width: 700px;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 2;
					color: #fff;

					font-size: clamp(50px, calc(60 / 1600 * 100vw), 60px);
					text-align: center;
					font-weight: 500;

					@media (max-width: 1024px) {
						display: none;
					}
				}
			}
			&[data-cover='2'] {
				width: calc(50% - 3px);
				right: 0;

				@media (max-width: 767px) {
					width: 100%;
				}

				.half-cta-element-content {
					background-position: top top;
					background-image: url('/button-bg.svg');
				}

				.half-cta-element-cover {
					background-color: #f7f7f7;

					@media (max-width: 1024px) {
						display: none;
					}
				}

				p {
					position: absolute;
					width: 700px;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 1;
					color: #333333;

					font-size: clamp(50px, calc(60 / 1600 * 100vw), 60px);
					text-align: center;
					font-weight: 500;

					@media (max-width: 1024px) {
						display: none;
					}
				}
			}
		}
	}
</style>
