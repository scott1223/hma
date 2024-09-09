<script>
	import { page } from '$app/stores';

    $effect(() => {
        document.querySelector('#header').classList.remove('invisible')
    })
</script>

<section>
	<div class="container">
		<div class="error">
			<h1>{$page.status}: {$page.error.message}</h1>
		</div>
	</div>
</section>

<style lang="scss">
	.error {
		height: 50vh;
		display: flex;
		align-items: center;
		justify-content: center;

		h1 {
			font-size: clamp(23px, calc(40 / 1600 * 100vw), 40px);
		}
	}
</style>
