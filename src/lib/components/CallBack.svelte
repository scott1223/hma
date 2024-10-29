<script>
  import { CMS_URL, phoneIcon } from '$lib/globals.js';
  import { getContext } from 'svelte';

  export let phone;

  const openModal = getContext('openModal');
  
  function openBigFormModal () {
    openModal();
  }
</script>

<div class="callback-form-wrapper">
          <a href="tel:{phone}">
          {@html phoneIcon}
          </a>
          <button on:click={openBigFormModal}>
          {@html phoneIcon}
          </button>
</div>

<style>
    .callback-form-wrapper {
        animation: zoom-in-zoom-out 2s ease infinite;
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 1;
        background: transparent;
        font-size: 23px;
        a {
            color: #4A3AD9;
            margin-right: 1em;
            @media(min-width:768px) {
                display: none;
            }
        }
        button {
            @media(max-width:767px) {
                display: none;
            }
        }
    }


@keyframes zoom-in-zoom-out {
    0% {
        rotate: -5deg;
    }
    50% {
        rotate: 5deg;
    }
    100% {
        rotate: -5deg;
    }
}    
    
</style>