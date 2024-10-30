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
        position: fixed;
        right: 30px;
        top: 30px;
        z-index: 1;
        background: transparent;
        font-size: 23px;
        a {
            color: #4A3AD9;
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
</style>