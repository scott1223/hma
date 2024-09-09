<script>
	import { CMS_URL } from '$env/static/private';
	let { mediaArray } = $props();

	function formatedDate(date) {
		const noFormat = new Date(date);

		const formattedDate = noFormat.toLocaleDateString('de-DE', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});

		return formattedDate;
	}
</script>

{#snippet mediaElement(info)}
	<div class="media-grid-borders">
		<div></div>
		<div></div>
		<div></div>
	</div>
	<a href={'/media/' + info.SEO.slug} class="media-grid-element">
		<div class="media-grid-element-title">
			{info.title}
		</div>
		<div class="border-vertical"></div>
		<div class="media-grid-element-source">
			<img
				src={CMS_URL + info.thumbnail.data.attributes.url}
				alt={info.thumbnail.data.attributes.alternativeText}
			/>
			<p>{formatedDate(info.publishedAt)}</p>
			<svg
				class="link-appear"
				width="121"
				height="12"
				viewBox="0 0 121 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.469673 6.53034C0.176773 6.23745 0.176773 5.76257 0.469673 5.46968L5.24264 0.696709C5.53554 0.403816 6.01041 0.403816 6.3033 0.696709C6.59619 0.989603 6.59619 1.46448 6.3033 1.75737L2.06066 6.00001L6.3033 10.2427C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53554 11.5962 5.24264 11.3033L0.469673 6.53034ZM121 6.75L1 6.75001L1 5.25001L121 5.25L121 6.75Z"
					fill="black"
				/>
			</svg>
		</div>
	</a>
{/snippet}

<section class="media-grid-section --margin-bottom">
	<div class="container">
		<div class="media-grid">
			{#each mediaArray as el}
				{@render mediaElement(el.attributes)}
			{/each}
			<div class="media-grid-borders">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.media-grid {
		display: flex;
		flex-direction: column;
		gap: 6px;

		&-borders {
			display: grid;
			grid-template-columns: 3fr 1px 2fr;
			gap: 6px;

			@media (max-width: 767px) {
				grid-template-columns: 1fr;
			}

			div {
				width: 100%;
				height: 1px;
				background-color: rgba($color: #000000, $alpha: 0.1);

				&:nth-child(2) {
					background-color: transparent;
				}

				@media (max-width: 767px) {
					&:not(:nth-child(1)) {
						display: none;
					}
				}
			}
		}

		&-element {
			display: grid;
			grid-template-columns: 3fr 1px 2fr;
			gap: 6px;

			@media (hover: hover) {
				&:hover {
					.media-grid-element-source {
						.link-appear {
							opacity: 1;
						}
					}
				}
			}

			@media (hover: none) {
				&:active {
					.media-grid-element-source {
						.link-appear {
							opacity: 1;
						}
					}
				}
			}

			&-title {
				padding: 15px;
				font-size: clamp(16px, calc(23 / 1600 * 100vw), 23px);
				display: flex;
				align-items: center;

				@media (max-width: 767px) {
					padding: 10px;
				}
			}
			&-source {
				display: flex;
				gap: 30px;
				padding: 10px 15px;
				align-items: center;

				img {
					border-radius: 100%;
					width: 40px;
					height: 40px;

					@media (max-width: 767px) {
						width: 30px;
						height: 30px;
					}
				}

				p {
					font-size: clamp(14px, calc(16 / 1600 * 100vw), 16px);
					color: #a9a9a9;
				}
				.link-appear {
					opacity: 0;
					position: absolute;
					right: 15px;
					top: 50%;
					transform: translateY(-50%) rotateY(180deg);
					transition: all 0.5s ease;

					@media (hover: none) {
						display: none;
					}
					@media (max-width: 767px) {
						display: none;
					}
				}
			}
		}
	}
</style>
