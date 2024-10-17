<script>
  import { CMS_URL } from '$lib/globals.js';
  import { createEventDispatcher } from 'svelte';

  export let open = false; // Пропс для управления видимостью
  const dispatch = createEventDispatcher();

  let name = "";
  let phone = "";
  let email = "";
  let note = "";

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
      alert('Форма успешно отправлена!');
      closeModal();
    } else {
      alert('Ошибка при отправке формы.');
    }
  }

  function closeModal() {
    dispatch('close');
  }
</script>

{#if open}
  <div class="modal-overlay" on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation>
      <h2>Контактная форма</h2>
      <form on:submit|preventDefault={submitForm}>
        <label>ФИО:</label>
        <input type="text" bind:value={name} required />

        <label>Телефон:</label>
        <input type="text" bind:value={phone} required />

        <label>Email:</label>
        <input type="email" bind:value={email} required />

        <label>Примечание:</label>
        <textarea bind:value={note}></textarea>

        <div class="actions">
          <button type="button" on:click={closeModal}>Отмена</button>
          <button type="submit">Отправить</button>
        </div>
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
    padding: 2rem;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
</style>