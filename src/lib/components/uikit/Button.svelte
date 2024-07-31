<script>
	let { text } = $props();
</script>

<button class="button">
	<img src="/plus.svg" alt="" />

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

		img {
			position: absolute;
			width: 50px;
			height: 50px;
			top: 20px;
			right: 20px;
			transition: all 0.5s ease;
			transform: rotate(45deg);
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
				img {
					transform: rotate(0deg);
				}
			}
		}

		@media (hover: none) {
			&:active {
				img {
					transform: rotate(0deg);
				}
			}
		}
	}
</style>
