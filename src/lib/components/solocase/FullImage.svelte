<script>
	import { CMS_URL } from '$env/static/private';
	
	let { bigImage } = $props();

</script>

<section class="fullimage-section --margin-bottom">
	<div class="container">
		<div class="fullimage">
			<img src={CMS_URL + bigImage?.url} alt="" />
		</div>
	</div>
</section>

<style lang="scss">
	.fullimage {
		height: calc(100vh - 20px);
		border-radius: var(--border-radius);
		overflow: hidden;

		@media (max-width: 1024px) {
			height: fit-content;
		}

		img {
			object-fit: cover;
			object-position: top;
		}
	}
</style>
