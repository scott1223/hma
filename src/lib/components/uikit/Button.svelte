<script>
	let { text, onClick } = $props();
</script>

<button class="button" on:click={onClick ?? null}>
	<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<line x1="-6.10352e-05" y1="10.5344" x2="8.57137" y2="10.5344" stroke="#fff" />
		<line x1="11.4286" y1="10.5344" x2="20.0001" y2="10.5344" stroke="#fff" />
		<line x1="9.78571" y1="9.32007" x2="9.78571" y2="0.74864" stroke="#fff" />
		<line x1="9.78577" y1="20.7488" x2="9.78577" y2="12.1774" stroke="#fff" />
	</svg>

	<p>{text}</p>
</button>

<style lang="scss">
	button {
		background-image: url('/button-bg.svg');
		background-position: top center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
		border-radius: var(--border-radius);

		svg {
			position: absolute;
			width: 35px;
			height: 35px;
			top: 15px;
			right: 15px;
			transition: all 0.5s ease;
		}
		p {
			width: calc(100% - 40px);
			position: absolute;
			bottom: 20px;
			left: 20px;
			font-size: clamp(18px, calc(20 / 1600 * 100vw), 20px);
			text-transform: uppercase;
			color: #fff;
			text-align: start;
		}

		@media (hover: hover) {
			&:hover {
				svg {
					transform: rotate(-45deg);
				}
			}
		}

		@media (hover: none) {
			&:active {
				svg {
					transform: rotate(-45deg);
				}
			}
		}
	}
</style>
