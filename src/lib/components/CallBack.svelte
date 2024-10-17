<script>
  import { CMS_URL } from '$lib/globals.js';

  let name = "Перезвоните мне";
  let phone = "";
  let email = "test@test.ru";
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

<div class="callback-form-wrapper">
  <form on:submit|preventDefault={submitForm}>
    <div class="callback-form-controls">
        <input type="hidden" bind:value={name} required />
        <div class="phone-input-control">
            <label>Телефон:</label>
            <input type="text" bind:value={phone} required />
        </div>
        <div class="callback-form-actions">
          <button type="submit">Перезвоните мне</button>
        </div>
    </div>
  </form>
</div>

<style>
    .callback-form-wrapper {
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 1;
        background: red;
        padding: 20px;
    }
</style>