<script>
	import { CMS_URL } from '$lib/globals.js';
	import { marked } from 'marked';

    marked.setOptions({
      breaks: true,
    });

	let { info, contactFormData } = $props();
</script>

<section class="desc-block-section --margin-bottom">
	<div class="container">
		<div class="desc-block">
			<div class="desc-block-borders">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="desc-block-body">
				<div class="desc-block-body-subtitle">
					<p>{info?.miniTitle}</p>
				</div>
				<div class="border-vertical"></div>
				<div class="desc-block-body-content">
					{#each info?.contentElement as el}
						<div class="desc-block-body-item">
							<h3>{el.header}</h3>
							{#if el.richContent}
                                <div class="marked-parse-block">
								{@html marked.parse(el.richContent)}
                                </div>
							{/if}
                            {#if el.videoMp4?.data}
                            <video class="desc-block-video-container" autoplay muted loop>
                              <source src="{CMS_URL + el.videoMp4.data.attributes.url}" type="video/mp4">
                              Ваш браузер не поддерживает воспроизведение видео.
                            </video>                            
                            {/if}
						</div>
					{/each}
					{#if info.quote}
						<div class="quote">
							<div class="quote-avatar">
								<img src={CMS_URL + info.quote.image.data.attributes.url} alt="" />
								<p>{info.quote.name}</p>
							</div>
							<p>
								{info.quote.quote}
							</p>
						</div>
					{/if}
				</div>
			</div>
			<div class="desc-block-borders">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.desc-block {
		display: flex;
		flex-direction: column;
		gap: 6px;

		@media (max-width: 1024px) {
			.border-vertical {
				width: 1px;
				height: 100%;
			}
		}
		@media (max-width: 767px) {
			.border-vertical {
				display: none;
			}
		}

		&-borders {
			display: grid;
			grid-template-columns: 2fr 1px 3fr;
			gap: 6px;

			@media (max-width: 1024px) {
				grid-template-columns: 1fr 1px 4fr;
			}
			@media (max-width: 767px) {
				grid-template-columns: 1fr;
			}

			div {
				height: 1px;
				width: 100%;
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

		&-body {
			display: grid;
			grid-template-columns: 2fr 1px 3fr;
			gap: 6px;

			@media (max-width: 1024px) {
				grid-template-columns: 1fr 1px 4fr;
			}
			@media (max-width: 767px) {
				display: flex;
				flex-direction: column;
			}

			&-subtitle {
				padding: 15px;

				:global(p) {
					color: #a9a9a9;
					font-size: clamp(16px, calc(23 / 1600 * 100vw), 23px);
				}
			}
			&-content {
				padding: 15px;
				display: flex;
				flex-direction: column;
				gap: 60px;

				@media (max-width: 767px) {
					gap: 40px;
				}

				:global(h1),
				:global(h2),
				:global(h4),
				:global(h5),
				:global(h6) {
					font-size: clamp(50px, calc(65 / 1600 * 100vw), 65px);
				}
				:global(h3) {
                  font-size: clamp(24px, 2.1vw, 35px);
                }

				.quote {
					@media (max-width: 768px) {
						display: flex;
						flex-direction: column-reverse;
						align-items: end;
					}
					& > div {
						position: absolute;
						display: flex;
						flex-direction: column;
						width: 100%;
						max-width: 200px;
						gap: 10px;
                        top: 20px;
                        left: -250px;
                        align-items: center;
                        @media (max-width: 1024px) {
							max-width: 150px;
							left: -170px;
						}
						@media (max-width: 768px) {
							position: relative;
							max-width: 40%;
							left: 0;
							top: 0;
						}

						img {
							border-radius: 100%;
							aspect-ratio: 1;
							object-fit: cover;
							width: 50%;

							@media (max-width: 768px) {
								width: 70%;
							}
						}
						p {
							text-wrap: balance;
							font-size: clamp(14px, calc(16 / 1600 * 100vw), 16px);

							@media (max-width: 768px) {
								text-wrap: wrap;
							}
						}
					}

					& > p {
						font-size: clamp(23px, calc(40 / 1600 * 100vw), 40px);
					}
				}
                .desc-block-video-container {
                    max-width: 100%;
                }
			}
		}
	}
    
    .contact-form-block .desc-block-body {
        text-align: right;
        @media (max-width: 767px) {
            text-align: left;
        }
    }

	:global(.desc-block-body-content > div) {
		display: flex;
		flex-direction: column;
		gap: 20px;
    
        :globalstrong {
          font-weight: bold;
        }

		:global(span) {
			font-size: 16px;

			@media (max-width: 767px) {
				font-size: 14px;
			}
		}
		:global(p) {
			font-size: clamp(16px, calc(23 / 1600 * 100vw), 23px);
            line-height: 1.5;
		}
		:global(ul) {
			display: flex;
			flex-direction: column;
			list-style: disc inside;

			:global(li) {
				padding: 10px;
				border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
				list-style: disc inside;

				@media (max-width: 1024px) {
					padding: 7px 5px 7px 0;
				}
				&:first-child {
					border-top: none;
					padding-top: 0;
				}
			}
		}
	}
</style>
