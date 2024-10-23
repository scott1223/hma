<script>
  import { CMS_URL } from '$lib/globals.js';
  import { createEventDispatcher } from 'svelte';

  export let open = false; // видимость
  export let notModal = false; // является ли модальной
  export let hiddenFields = []; // скрыть поля
  export let title = "Свяжитесь с нами"; // заголовок модальной формы
  export let subtitle = "Заполните ваши данные, чтобы мы связались с вами в ближайшее время"; // заголовок модальной формы
  const dispatch = createEventDispatcher();

  let name = "";
  let phone = "";
  let email = "";
  let note = "";
  let sentOk;

  async function submitForm() {
    const response = await fetch(CMS_URL + '/api/contact-forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: { name, phone, email, note },
      }),
    });

    if (response.ok) {
      sentOk = true;
      setTimeout(closeModal, 3000);
    } else {
      console.log('Ошибка при отправке формы.', response);
    }
  }

  function closeModal() {
    dispatch('close');
  }
</script>

{#if open}
  <div class={notModal ? '' : 'modal-overlay'} on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation>
      {#if (!notModal)}
      <button class="close-button" type="button" title="Close" aria-label="Close" on:click={closeModal}>
        <svg aria-hidden="true" viewBox="0 0 32 32" fill="#4A3AD9" width="32" height="32">
          <use class="pswp__icn-shadow" xlink:href="#pswp__icn-close"></use>
          <path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"></path>
        </svg>
      </button>
      {/if}
      {#if (!hiddenFields.includes('title'))}
      <h2>{title}</h2>
      {/if}
      {#if (!hiddenFields.includes('subtitle'))}
      <h3>{subtitle}</h3>
      {/if}
      <form on:submit|preventDefault={submitForm} class:ok={sentOk}>
        {#if (!hiddenFields.includes('name'))}
        <input type="text" bind:value={name} required placeholder="Ваше имя"/>
        {/if}
        {#if (!hiddenFields.includes('phone'))}
        <input type="text" bind:value={phone} required placeholder="+7 (999) 999-99-99"/>
        {/if}
        {#if (!hiddenFields.includes('email'))}
        <input type="email" bind:value={email} required placeholder="Email" />
        {/if}
        {#if (!hiddenFields.includes('note'))}
        <textarea bind:value={note} placeholder="Текст сообщения"></textarea>
        {/if}
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: white;
    padding: 3em;
    border-radius: 7px;
    max-width: 500px;
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  
  h2 {
      font-size: 1.5em;
      margin-bottom: 0.3em;
  }

  h3 {
      font-size: 1em;
      margin-bottom: 0.5em;
  }

  form {
      display: flex;
      flex-direction: column;
      gap: 1em;
      justify-content: center;
      width: 100%;
  }
  input, button[type="submit"], textarea {
      border: 1px solid #000;
      font-size: 1em;
      padding: 1em;
      border-radius: 7px;
  }
  textarea {
      height: 6em;
  }
  button[type="submit"] {
      background: #4A3AD9;
      color: #FFF;
      margin-top: 1em;
  }
  .close-button {
      position: absolute;
      top: 0.7em;
      right: 0.7em;
  }
  form.ok:after {
      content: 'Спасибо! Мы свяжемся с Вами в ближайшее время!';
      position: absolute;
      background: #FFF;
      opacity: 0.95;
      top: 0;
      bottom: 0;
      font-size: 1.5em;
      padding-left: 1em;
      padding-right: 1em;
      line-height: 1.5;
      display: flex;
      align-items: center;
  }
</style>