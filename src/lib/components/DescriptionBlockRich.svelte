<script>
	import { CMS_URL } from '$lib/globals.js';
	import { marked } from 'marked';

	let { content, className } = $props();
</script>

{#if content}
<section class={`cdu-block-rich ${className}`}>
	<div class="container marked-parse-block">
      {@html marked.parse(content)}
	</div>
</section>
{/if}

<style lang="scss">

	:global(.cdu-block-rich .container *) {
    line-height: 1.5;
  }
  
  :global(.cdu-block-rich ul) {
    margin: 1em 0;
  }
  
  :global(.cdu-block-rich ul li) {
    list-style: inside;
  }
</style>
