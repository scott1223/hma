<script>
  import { CMS_URL } from '$lib/globals.js';
  import { getContext} from 'svelte';

  export let phone;

  const openModal = getContext('openModal');
</script>

<div class="callback-form-wrapper">
          <a href="tel:{phone}">{phone}</a>
          <button on:click={openModal} class="btn-blue">Обратный звонок</button>
</div>

<style>
    .callback-form-wrapper {
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 1;
        background: transparent;
        font-size: 23px;
        & a {
            color: #4A3AD9;
            margin-right: 1em;
            @media(max-width:767px) {
                display: none;
            }
        }
    }
</style>