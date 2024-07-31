<script>
	import Button from './uikit/Button.svelte';
</script>

{#snippet footerLink(link)}
	<a href={link.url} class="footer-grid-row-element" class:invert={link.class}>
		<span>{link.text}</span>
		<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
			<line x1="-6.10352e-05" y1="10.5344" x2="8.57137" y2="10.5344" stroke="#4A3AD9" />
			<line x1="11.4286" y1="10.5344" x2="20.0001" y2="10.5344" stroke="#4A3AD9" />
			<line x1="9.78571" y1="9.32007" x2="9.78571" y2="0.74864" stroke="#4A3AD9" />
			<line x1="9.78577" y1="20.7488" x2="9.78577" y2="12.1774" stroke="#4A3AD9" />
		</svg>
	</a>
{/snippet}

<footer>
	<div class="container">
		<div class="footer">
			<h4 class="footer-text">
				Вам как Себе - наша уникальная философия и подход в создании проектов.
			</h4>
			<div class="footer-grid">
				<div class="borders">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="footer-grid-row">
					{@render footerLink({ url: '/#', text: 'instagram' })}
					<div class="border-vertical"></div>
					<Button text="Превращаем компании в бренды" />
					<div class="border-vertical"></div>
					{@render footerLink({ url: '/#', text: 'instagram' })}
					<div class="border-vertical"></div>
					{@render footerLink({ url: '/#', text: 'instagram' })}
					<div class="border-vertical"></div>
					{@render footerLink({ url: '/#', text: 'instagram', class: 'invert' })}
				</div>
				<div class="borders">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="footer-grid-row">
					{@render footerLink({ url: '/#', text: 'instagram' })}
					<div class="border-vertical"></div>
					<div></div>
					<div class="border-vertical"></div>
					<div><img src="/footer-anton.png" alt="ceo photo" /></div>
					<div class="border-vertical"></div>
					{@render footerLink({ url: '/#', text: 'instagram' })}
					<div class="border-vertical"></div>
					{@render footerLink({ url: '/#', text: 'instagram' })}
				</div>
				<div class="borders">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		min-height: calc(100dvh - 20px);
		margin-top: auto;
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		gap: 100px;
        align-items: center;
        justify-content: end;

		&-text {
			text-align: center;
			width: 80%;
			font-size: clamp(50px, calc(75 / 1600 * 100vw), 75px);
			color: #333333;
		} 

		&-grid {
            width: 100%;
			display: grid;
			grid-template-rows: 1px 1fr 1px 1fr 1px;
			grid-template-columns: 1fr;
			gap: 6px;

			.borders {
				display: grid;
				grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr 1px 1fr;
				grid-template-rows: 1fr;
				gap: 6px;

				div {
					width: 100%;
					height: 1px;
					background-color: rgba($color: #000000, $alpha: 0.1);

					&:nth-child(even) {
						background-color: transparent;
					}
				}
			}

			&-row {
				display: grid;
				grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr 1px 1fr;
				gap: 6px;

				& > div {
					overflow: hidden;
					border-radius: var(--border-radius);
				}

				&-element {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 15px;
					border-radius: var(--border-radius);
					transition: all 0.5s ease;

					@media (hover: hover) {
						&:hover {
							background-color: var(--accent-color);
							svg {
								transform: rotate(-45deg);

								line {
									stroke: #fff;
								}
							}
							span {
								color: #fff;
							}
						}
					}

					@media (hover: none) {
						&:active {
							background-color: var(--accent-color);
							svg {
								transform: rotate(-45deg);

								line {
									stroke: #fff;
								}
							}
							span {
								color: #fff;
							}
						}
					}

					&.invert {
						background-color: var(--accent-color);
						svg {
                            transform: rotate(-45deg);
							line {
								stroke: #fff;
							}
						}
						span {
							color: #fff;
						}

						@media (hover: hover) {
							&:hover {
								background-color: #fff;
								svg {
									transform: rotate(0);

									line {
										stroke: var(--accent-color);
									}
								}
								span {
									color: var(--accent-color);
								}
							}
						}

						@media (hover: none) {
							&:active {
								background-color: #fff;
								svg {
									transform: rotate(0);

									line {
										stroke: var(--accent-color);
									}
								}
								span {
									color: var(--accent-color);
								}
							}
						}
					}
					span {
						text-transform: uppercase;
						color: var(--accent-color);
						transition: all 0.5s ease;
						line {
							transition: all 0.5s ease;
						}
					}

					svg {
						position: absolute;
						top: 15px;
						right: 15px;
						width: 35px;
						height: 35px;
						transition: all 0.5s ease;
					}
				}

				.border-vertical {
					height: 100%;
					width: 1px;
					background-color: rgba($color: #000000, $alpha: 0.1);
				}
			}
		}
	}
</style>
