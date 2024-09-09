<script>
	import { onMount } from 'svelte';
	import { CMS_URL } from '$env/static/private';

	let numberSlides = $state(1);
	let slider;
	let sliderElements = $state([]);
	let {sliderData} = $props()

	function scrollChecker() {
		const currentScroll = slider.scrollLeft;
		numberSlides = Math.round(currentScroll / slider.offsetWidth);
	}

	onMount(() => {
		sliderElements = slider.querySelectorAll('.slider-case-element');
	});
</script>

<section class="slider-case-section --margin-bottom">
	<div class="container">
		<div class="slider-case-wrap">
			<div
				class="slider-case"
				bind:this={slider}
				onscroll={() => {
					scrollChecker();
				}}
			>
				{#each sliderData as slide}
				<div class="slider-case-element">
					<img src={CMS_URL + slide.image.data?.attributes.url} alt="" />
					<p>{slide.name}</p>
				</div>
				{/each}
			</div>
			<div class="slider-case-controls">
				<button
					disabled={numberSlides === 1}
					onclick={() => {
						if (window.innerWidth < 1024) {
                            if (numberSlides > 1) {
                                numberSlides--;
                                slider.scrollLeft = (numberSlides - 1) * slider.offsetWidth;
                            }
						} else {
							if (numberSlides > 1) {
								numberSlides--;
								slider.style.transform = `translateX(${-100 * (numberSlides - 1)}%)`;
							}
						}
					}}
				>
					<img src="/arrow.svg" alt="" />
				</button>
				<button
					disabled={numberSlides === sliderElements.length}
					onclick={() => {
						if (window.innerWidth < 1024) {
                            if (numberSlides < sliderElements.length) {
                                numberSlides++;
                                slider.scrollLeft = (numberSlides - 1) * slider.offsetWidth;
                            }
						} else {
							if (numberSlides < sliderElements.length) {
								numberSlides++;
								slider.style.transform = `translateX(${-100 * (numberSlides - 1)}%)`;
							}
						}
					}}
				>
					<img src="/arrow.svg" alt="" />
				</button>
			</div>
			<p class="slider-case-number">0{numberSlides}/0{sliderElements.length}</p>
		</div>
	</div>
</section>

<style lang="scss">
	.slider-case {
		display: flex;
		height: calc(100vh - 20px);

		@media (max-width: 1024px) {
			gap: 6px;
			height: fit-content;
			overflow-x: scroll;
			scroll-snap-type: x mandatory;
			scroll-snap-align: start;
			-ms-overflow-style: none;
			scrollbar-width: none;
            scroll-behavior: smooth;
			&::-webkit-scrollbar {
				display: none;
			}
		}

		&-wrap {
			overflow: hidden;
			& * {
				transition: all 0.5s ease;
			}

			@media (hover: hover) {
				&:hover {
					.slider-case-element {
						p {
							opacity: 1;
						}
					}
					.slider-case-controls {
						opacity: 1;
					}
				}
			}

			@media (hover: none) {
				&:active {
					.slider-case-element {
						p {
							opacity: 1;
						}
					}
					.slider-case-controls {
						opacity: 1;
					}
				}
			}
		}

		&-element {
			height: 100%;
			flex: 0 0 100%;

			@media (max-width: 1024px) {
				scroll-snap-align: start;
			}

			p {
				position: absolute;
				bottom: 15px;
				left: 50%;
				transform: translateX(-50%);
				font-size: clamp(14px, calc(16 / 1600 * 100vw), 16px);
				color: #8a8a8a;
				opacity: 0;

				@media (max-width: 1024px) {
					left: 15px;
					transform: translateX(0);
					opacity: 1;
				}
			}
			img {
				border-radius: var(--border-radius);
				object-fit: cover;
				
				@media (max-width: 767px) {
					aspect-ratio: 4/3;
				}
			}
		}
		&-controls {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: calc(100% - 30px);
			left: 15px;
			opacity: 0;

			button {
				&:disabled {
					opacity: 0;
				}
				&:last-child {
					img {
						transform: rotate(180deg);
					}
				}
			}

            @media (max-width: 767px) {
                display: none;
            }
		}

		&-number {
			position: absolute;
			bottom: 15px;
			left: 15px;
			font-size: 16px;
			color: #8a8a8a;

			@media (max-width: 1024px) {
				left: auto;
				right: 15px;
			}

			@media (max-width: 767px) {
				font-size: 14px;
			}
		}
		&-pagination {
			position: absolute;
			right: 15px;
			bottom: 15px;
			display: flex;
			gap: 6px;

			div {
				width: 10px;
				height: 10px;
				background-color: #8a8a8a;
				border-radius: 100%;

				&:global(.active) {
					background-color: #000;
				}
			}
		}
	}
</style>
