<script>
	import { CMS_URL } from '$env/static/private';
	
	let { next, prev, current } = $props();

	next = next  ??  current
	prev = prev  ??  current
</script>

<section class="nextprev-section --margin-bottom">
	<div class="container">
		<div class="nextprev">
            <span>Следующие кейсы</span>
			<div class="nextprev-borders">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="nextprev-body">
				<a href={"/cases/" + prev.SEO.slug} class="nextprev-body-element prev">
					<div><img src={CMS_URL + prev.thumbnail.data.attributes.url} alt="" /></div>
					<h6>{prev.title}</h6>
				</a>
				<div class="border-vertical"></div>
				<a href={"/cases/" + next.SEO.slug} class="nextprev-body-element next">
					<div><img src={CMS_URL + next.thumbnail.data.attributes.url} alt="" /></div>
					<h6>{next.title}</h6>
				</a>
			</div>
			<div class="nextprev-borders">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.nextprev {
		display: flex;
		flex-direction: column;
		gap: 6px;

        span{
            font-size: clamp(14px, calc(16 / 1600 * 100vw), 16px);
            color: #a9a9a9;
        }

		@media (max-width: 1024px) {
			.border-vertical {
				height: 100%;
				width: 1px;
			}
		}
		@media (max-width: 767px) {
			.border-vertical {
				height: 100%;
				width: 1px;
			}
		}

		&-borders {
			display: grid;
			grid-template-columns: 1fr 1px 1fr;
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
					&:not(:nth-child(1)){
                        display: none;
                    }
				}
			}
		}

		&-body {
			display: grid;
			grid-template-columns: 1fr 1px 1fr;
			gap: 6px;

			@media (max-width: 767px) {
				display: flex;
				flex-direction: column;
			}

			&-element {
				display: flex;
				flex-direction: column;
				gap: 15px;

				div {
					border-radius: var(--border-radius);
					overflow: hidden;

					@media (hover: hover) {
						&:hover {
							img {
								scale: 1.05;
							}
						}
					}

					@media (hover: none) {
						&:active {
							img {
								scale: 1.05;
							}
						}
					}

					img {
						object-fit: cover;
						transition: all 0.5s ease;
					}
				}
				h6 {
					text-transform: uppercase;
					font-size: clamp(16px, calc(23 / 1600 * 100vw), 23px);
				}
			}
		}
	}
</style>
