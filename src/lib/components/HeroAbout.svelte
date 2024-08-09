<script>
	import { gsap } from 'gsap/dist/gsap.js';
	import { onMount } from 'svelte';
	import Button from './uikit/Button.svelte';
	import { getIsNavigating } from '$lib/settings.svelte.js';

	const globalNavigation = getIsNavigating();
	const master = gsap.timeline({
		defaults: {
			ease: 'power3'
		}
	});

	const setInitialStates = () => {
		gsap.set('.preloader', {
			autoAlpha: 0
		});
		gsap.set('.preloader-element p span', {
			autoAlpha: 0
		});
		gsap.set('#main-square p span.first', {
			autoAlpha: 1,
			yPercent: 105
		});
		gsap.set('.preloader .line.--width', {
			width: '0%'
		});
		gsap.set('.preloader .line.--height', {
			height: '0%'
		});
		gsap.set('.preloader *[data-hero="1"]', {
			autoAlpha: 0
		});
		gsap.set('.preloader *[data-hero="2"]', {
			autoAlpha: 0
		});
		gsap.set('.preloader *[data-hero="1"] .cover', {
			xPercent: 110
		});
	};
	const preloaderAnimation = () => {
		const tl = gsap.timeline({
			defaults: {
				ease: 'power3',
				duration: 1.4
			}
		});

		tl.to('.preloader', {
			autoAlpha: 1,
			duration: 0
		})
			.to(
				'.preloader .line.--width',
				{
					width: '100%',
					duration: 1.4
				},
				'<'
			)
			.to(
				'.preloader .line.--height',
				{
					height: '100%',
					duration: 1.4
				},
				'<'
			)
			.to(
				'#main-square p span.first',
				{
					yPercent: 0
				},
				'>'
			);

		return tl;
	};
	const heroAnimation = () => {
		const timeline = gsap.timeline({
			defaults: {
				ease: 'power3',
				duration: 1.4
			}
		});

		timeline
			.to('.preloader p span', {
				autoAlpha: 0
			})
			.to(
				'#main-square p span',
				{
					autoAlpha: 1
				},
				'<'
			)
			.to(
				'#main-square ',
				{
					backgroundColor: '#4A3AD9',
					duration: 1
				},
				'<'
			)
			.to(
				'#main-square span',
				{
					color: '#fff',
					duration: 1
				},
				'<'
			)
			.to(
				'.preloader *[data-hero="1"]',
				{
					autoAlpha: 1,
					duration: 0.6,
					stagger: 0.3
				},
				'>'
			);

		return timeline;
	};
	const toggleProjects = () => {
		const tl1 = gsap.timeline({
			defaults: {
				ease: 'power3',
				duration: 0.6
			},
			repeat: -1
		});

		tl1
			.to('.preloader *[data-hero="1"]', {
				autoAlpha: 0,
				delay: 2.5
			})
			.to(
				'.preloader *[data-hero="2"]',
				{
					autoAlpha: 1,
					delay: 0.5,
					stagger: 0.3
				},
				'<'
			)
			.to('.preloader *[data-hero="2"]', {
				autoAlpha: 0,
				delay: 2.5
			})
			.to(
				'.preloader *[data-hero="1"]',
				{
					autoAlpha: 1,
					delay: 0.5,
					stagger: 0.3
				},
				'<'
			);

		return tl1;
	};

	onMount(() => {
		console.log('mount about');


		$effect(() => {
			if (!globalNavigation.isNavigating) {
				master
					.add(setInitialStates())
					.add(preloaderAnimation())
					.add(heroAnimation(), '>-=1.4')
					.add(toggleProjects(), '<+=2.5');
				console.log('playing');
			}
		});
	});
</script>

<section class="preloader-section --margin-bottom">
	<div class="container">
		<div class="preloader-wrap">
			<div class="preloader">
				<div class="preloader-element-wrap">
					<div class="line --height"><span></span></div>
					<div class="line --height"><span></span></div>
					<div class="line --height"><span></span></div>
					<div class="line --width"><span></span></div>
					<div class="line --height"><span></span></div>
					<div class="line --width"><span></span></div>
					<div class="line --width"><span></span></div>
					<div class="line --height"><span></span></div>
					<div class="line --width"><span></span></div>
					<div class="preloader-element" id="first-preloader">
						<div data-hero="1">
							<img class="--m-top" src="/hero1.png" alt="" />
							<div class="cover"></div>
						</div>
					</div>

					<div class="preloader-element" id="second-preloader">
						<div data-hero="2">
							<img class="--m-top" src="/about-hero1-1.svg" alt="" />
						</div>
					</div>

					<div class="preloader-element" id="third-preloader"></div>

					<div class="preloader-element" id="fourth-preloader">
						<div data-hero="1">
							<img class="--m-top" src="/hero2.png" alt="" />
						</div>
						<div data-hero="2">
							<img class="--m-top" src="/about-hero1-2.svg" alt="" />
						</div>
					</div>
					<div class="preloader-element" id="main-square">
						<div>
							<p></p>
							<p><span class="first">Hey Marketing Agency</span></p>
						</div>
					</div>
					<div class="preloader-element" id="fifth-preloader">
						<div data-hero="1">
							<img src="/hero3.png" alt="" />
						</div>
					</div>
					<div class="preloader-element" id="sixth-preloader"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.preloader {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;

		&-wrap {
			margin-top: 10px;
			min-height: calc(100vh - 20px);
			@media (max-width: 1400px) {
				min-height: 700px;
			}

			@media (max-width: 1024px) {
				@media (orientation: portrait) {
					min-height: calc(70vh - 20px);
				}

				@media (orientation: landscape) {
					min-height: calc(100vh - 20px);
				}
			}

			@media (max-width: 767px) {
				@media (orientation: portrait) {
					min-height: calc(100vh - 20px);
				}

				@media (orientation: landscape) {
					min-height: calc(100vh - 20px);
				}
			}
		}

		&-element {
			display: flex;
			align-items: center;
			justify-content: center;
			text-transform: capitalize;
			font-size: clamp(18px, calc(20 / 1600 * 100vw), 20px);
			gap: 6px;

			p {
				overflow: hidden;
				display: block;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				span {
					display: block;
				}
			}

			& > div {
				width: 100%;
				height: 100%;
				overflow: hidden;
				position: absolute;
				border-radius: 7px;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				img {
					height: 100%;
					object-fit: cover;

					border-radius: 7px;
				}

				.cover {
					position: absolute;
					top: -1px;
					left: -1px;
					width: 102%;
					height: 102%;
					background-color: #fff;
				}
			}

			&:is(#main-square) {
				background-color: transparent;
				border-radius: var(--border-radius);
				div {
					width: calc(100% - 40px);
					padding: 30px 0;
					top: 50%;
					left: 20px;
					transform: translateX(0) translateY(-50%);
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					gap: 20px;
					overflow: hidden;

					@media (max-width: 767px) {
						left: 15px;
						width: calc(100% - 30px);
						padding: 20px 0;
					}
					p {
						position: relative;
						top: auto;
						left: auto;
						transform: translate(0, 0);
						display: block;

						span {
							color: var(--accent-color);
							&.first {
								font-size: clamp(50px, calc(65 / 1600 * 100vw), 65px);
								font-weight: normal;

								@media (max-width: 767px) {
									font-size: clamp(30px, calc(60 / 1600 * 100vw), 60px);
								}
							}
							&.second {
								text-wrap: balance;
								line-height: 140%;
								text-transform: uppercase;
							}
						}
					}
					img {
						width: 75%;
						object-fit: contain;
						@media (max-width: 767px) {
							width: 100%;
						}
					}
				}
			}

			&-wrap {
				display: grid;
				grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr 1px 1fr;
				grid-template-rows: 1fr 1px 1fr 1px 1fr;
				gap: 6px;
				height: calc(100vh - 20px);
				max-height: 1080px;

				@media (max-width: 1400px) {
					max-height: 700px;
				}
				@media (max-width: 1024px) {
					grid-template-columns: 1fr 1px 1fr 1px 1fr;
					grid-template-rows: 1fr 1px 1fr 1px 1fr;
					@media (orientation: portrait) {
						max-height: 70vh;
					}

					@media (orientation: landscape) {
						max-height: 100vh;
					}
				}
				@media (max-width: 767px) {
					grid-template-columns: 1fr 1px 1fr;

					grid-template-rows: 1fr 1px 1fr 1px 1fr 1px 1fr;
					@media (orientation: portrait) {
						max-height: 100%;
						min-height: 100vh;
					}

					@media (orientation: landscape) {
						max-height: 100%;
						min-height: 100vh;
					}
				}
			}
		}

		#first-preloader {
			display: flex;
			grid-column: 1 / span 1;
			grid-row: 1 / span 1;
		}
		#second-preloader {
			display: flex;
			grid-column: 3 / span 1;
			grid-row: 1 / span 1;

			@media (max-width: 1024px) {
				grid-column: 3 / span 1;
			}
		}
		#third-preloader {
			display: flex;
			grid-column: 5 / span 1;
			grid-row: 1 / span 1;

			@media (max-width: 767px) {
				grid-column: 1 / span 1;
				grid-row: 7 / span 1;
			}
		}
		#fourth-preloader {
			display: flex;
			grid-column: 7 / span 3;
			grid-row: 3 / span 3;

			@media (max-width: 1024px) {
				grid-column: 1 / span 1;
				grid-row: 5 / span 1;
			}
		}
		#main-square {
			display: flex;
			grid-column: 1 / span 5;
			grid-row: 3 / span 1;

			@media (max-width: 767px) {
				grid-column: 1 / span 3;
			}
		}
		#fifth-preloader {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-column: 1 / span 5;
			grid-row: 5 / span 1;

			@media (max-width: 1024px) {
				display: flex;
				grid-column: 3 / span 1;
				grid-row: 5 / span 1;
			}

			div[data-hero='1'] {
				grid-column: 1/3;
			}
			div[data-hero='2'] {
				grid-column: 2/4;
			}
			div[data-hero='3'] {
				grid-column: 1/4;
			}
		}
		#sixth-preloader {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-column: 7 / span 3;
			grid-row: 1 / span 1;

			@media (max-width: 1024px) {
				display: flex;
				grid-column: 5 / span 1;
				grid-row: 5 / span 1;

				div[data-hero='2'] {
					display: none;
				}
			}

			@media (max-width: 767px) {
				grid-column: 3 / span 1;
				grid-row: 7 / span 1;
			}

			div[data-hero='0'] {
				grid-column: 2/3;
			}
			div[data-hero='2'] {
				grid-column: 1/2;
			}
		}
		.line {
			width: 100%;

			span {
				width: 100%;
				background-color: #00000021;
			}
		}
		.line:nth-child(1) {
			display: flex;
			grid-column: 2 / span 1;
			grid-row: 1 / span 1;
		}
		.line:nth-child(2) {
			display: flex;
			grid-column: 4 / span 1;
			grid-row: 1 / span 1;
			@media (max-width: 767px) {
				grid-column: 2 / span 1;
				grid-row: 5 / span 1;
			}
		}
		.line:nth-child(3) {
			display: flex;
			grid-column: 6 / span 1;
			grid-row: 1 / span 1;

			@media (max-width: 1024px) {
				display: none;
			}
			@media (max-width: 767px) {
				display: flex;
				grid-column: 2 / span 1;
				grid-row: 7 / span 1;
			}
		}
		.line:nth-child(4) {
			display: flex;
			grid-column: 1 / span 5;
			grid-row: 2 / span 1;

			@media (max-width: 767px) {
				grid-column: 1 / span 3;
			}
		}
		.line:nth-child(5) {
			display: flex;
			grid-column: 6 / span 1;
			grid-row: 3 / span 1;

			@media (max-width: 1024px) {
				display: none;
			}
		}
		.line:nth-child(6) {
			display: flex;
			grid-column: 1 / span 5;
			grid-row: 4 / span 1;

			@media (max-width: 767px) {
				grid-column: 1 / span 3;
			}
		}
		.line:nth-child(7) {
			display: flex;
			grid-column: 7 / span 3;
			grid-row: 2 / span 1;

			@media (max-width: 1024px) {
				display: none;
			}
			@media (max-width: 767px) {
				display: flex;
				grid-column: 1 / span 3;
				grid-row: 6 / span 1;
			}
		}
		.line:nth-child(8) {
			display: flex;
			grid-column: 6 / span 1;
			grid-row: 5 / span 1;

			@media (max-width: 1024px) {
				grid-column: 4 / span 1;
				grid-row: 5 / span 1;
			}

			@media (max-width: 767px) {
				display: none;
			}
		}
		.line:nth-child(9) {
			display: flex;
			grid-column: 1 / span 9;
			grid-row: 6 / span 1;

			@media (max-width: 1024px) {
				display: none;
			}
		}
	}
</style>
