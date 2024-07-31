<script>
	let { href, text } = $props();
</script>

<a {href} class="button-text">
	<span>{text}</span>
	<img src="/plus-blue.svg" alt="plus icon" />
</a>

<style lang="scss">
	a {
		display: flex;
		align-items: center;
		gap: 10px;

		@media (hover: hover) {
			&:hover {
				img {
					rotate: -45deg;
				}
			}
		}

		@media (hover: none) {
			&:active {
				img {
					rotate: -45deg;
				}
			}
		}

		span {
			font-size: clamp(14px, calc(16 / 1600 * 100vw), 16px);
			text-transform: uppercase;

			font-weight: 500;
		}

		img {
			max-width: 20px;
			transition: all 0.5s ease;
			aspect-ratio: 1;
		}
	}
</style>
