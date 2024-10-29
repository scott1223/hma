<script>
	import { gsap } from 'gsap';
    import { onMount } from 'svelte';

    /* отображение меню / бургера */
	function setBurger() {
        setTimeout( () => {
            document.querySelector('#header').classList.remove('invisible');
        }, 2000)
	}
	onMount(setBurger);
</script>

<div class="d-none" />
