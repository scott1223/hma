<script>
	import { CMS_URL } from '$lib/globals.js';
	
	let { services } = $props()
</script>

{#snippet servicesElement(service)}
	<div class="services-grid-borders">
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="services-grid-element">
		<div class="services-grid-element-desc">
			<h3>{service.header}</h3>
			<p>{@html service.description}</p>
		</div>
		<div class="border-vertical"></div>
		<div class="services-grid-element-images">
			<img src={CMS_URL + service.images.data[0]?.attributes.url} alt={service.images.data[0]?.attributes.alternativeText} />
			<div class="border-vertical"></div>
			<img src={CMS_URL + service.images.data[1]?.attributes.url} alt={service.images.data[1]?.attributes.alternativeText} />
			<div class="border-vertical"></div>
			<img src={CMS_URL + service.images.data[2]?.attributes.url} alt={service.images.data[2]?.attributes.alternativeText} />
		</div>
	</div>
{/snippet}

<section class="services-grid-section --margin-bottom">
	<div class="container">
		<div class="services-grid">
			{#each services as service}
				{@render servicesElement(service)}
			{/each}
			<div class="services-grid-borders">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.services-grid {
		display: flex;
		flex-direction: column;
		gap: 6px;

		&-borders {
			display: grid;
			grid-template-columns: 2fr 1px 3fr;
			gap: 6px;

			@media (max-width: 1024px) {
				grid-template-columns: 1fr;
			}

			div {
				height: 1px;
				width: 100%;
				background-color: rgba($color: #000000, $alpha: 0.1);

				&:nth-child(2) {
					background-color: transparent;
					@media (max-width: 1024px) {
						display: none;
					}
				}
				&:nth-child(3) {
					@media (max-width: 1024px) {
						display: none;
					}
				}
			}
		}

		&-element {
			display: grid;
			grid-template-columns: 2fr 1px 3fr;
			gap: 6px;

			@media (max-width: 1024px) {
				display: flex;
				flex-direction: column;
				.services-grid-element-desc {
					padding-top: 15px;
				}
				&:nth-child(2) {
					.services-grid-element-desc {
						padding-top: 0px;
					}
				}
			}

			&-desc {
				display: flex;
				flex-direction: column;
				gap: 20px;
				padding: 5px 0;

				h3 {
					font-size: clamp(18px, calc(25 / 1600 * 100vw), 25px);
				}

				p {
					font-size: clamp(14px, calc(16 / 1600 * 100vw), 16px);
				}
			}

			&-images {
				display: grid;
				grid-template-columns: 1fr 1px 1fr 1px 1fr;
				gap: 6px;

				@media (max-width: 767px) {
					display: flex;
					width: 100%;
					overflow-x: scroll;
					-ms-overflow-style: none;
					scrollbar-width: none;
					&::-webkit-scrollbar {
						display: none;
					}

					.border-vertical {
						display: none;
					}

					img {
						width: 60%;
					}
				}

				img {
					object-fit: cover;
					aspect-ratio: 1;
					border-radius: var(--border-radius);
				}
			}
		}
	}
	:global(.border-vertical) {
		width: 1px;
		height: 100%;
		background-color: rgba($color: #000000, $alpha: 0.1);

		@media (max-width: 1024px) {
			width: 0px;
			height: 100%;
		}
	}
</style>
