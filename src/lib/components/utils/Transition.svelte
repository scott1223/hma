<script>
	export let data;
</script>

{#key data.url}
	<div in:fade={{ delay: 800, duration: 800 }} out:fade={{ duration: 800 }}>
		<slot />
	</div>
{/key}
