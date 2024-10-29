<script>
	import { gsap } from 'gsap';
    import { onMount } from 'svelte';

    /* отображение меню / бургера */
	function setBurger() {
        setTimeout( () => {
            document.querySelector('#header').classList.remove('invisible');
            gsap.set('.header__menu li a span', {
                yPercent: 100
            });

            gsap.set(header, {
                width: '150px',
                height: 'calc(28px + (2*10px))'
            });
        }, 2000)
	}
	onMount(setBurger);
</script>

<div class="d-none" />
