<script>
  import { CMS_URL, tgSendMessage } from '$lib/globals.js';
  import { createEventDispatcher, onMount } from 'svelte';
  import 'bootstrap/dist/css/bootstrap-grid.min.css';
  import 'bootstrap/dist/css/bootstrap-utilities.min.css'
  import { imask } from 'svelte-imask';


  export let open = false; // видимость
  export let notModal = false; // является ли модальной
  export let hiddenFields = []; // скрыть поля
  export let bigForm = false; // скрыть поля
  export let title = "Свяжитесь с нами"; // заголовок модальной формы
  export let subtitle = "Заполните ваши данные, чтобы мы связались с вами в ближайшее время"; // заголовок модальной формы
  const dispatch = createEventDispatcher();
  const options = { 
    mask: '+{7} (000) 000-00-00'
  };

  let name = "";
  let email = "";
  let company = "";
  let note = null;
  let spam = "";
  let services = ["упаковка продукции", "брендинг"];
  let sum = "500000-1000000";
  let sentOk;

  let files = null; // Для файла
  let phoneControl;
  let formData = new FormData();

  // Обработчик выбора файла
  function handleFileChange(event) {
    files = event.target.files[0]; // Сохраняем выбранный файл
  }

  async function submitForm() {
  
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Создаём FormData и добавляем текст и файл
    const formData = new FormData();
    const phone = phoneControl.value;
    if (!note) note = null;
    let resultNote = ['Компания: ' + company, note, 'Услуги: ' + services.join(", "), 'Бюджет: ' + sum, spam].join("\n");
    formData.append('data', JSON.stringify({ name, phone, email, note: resultNote })); // Добавляем текстовые данные
    formData.append('files.files', files); // Добавляем файл (Strapi ждет ключ 'files')

    const response = await fetch(CMS_URL + '/api/contact-forms', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      sentOk = true;
      setTimeout(closeModal, 3000);
    } else {
      console.log('Ошибка при отправке формы.', response);
    }
    const resultTelegramNote = [
      '<b>Сообщение с сайта</b>',
      'Имя: ' + name,
      "Телефон: " + phone.replaceAll(" ", ""),
      bigForm ? 'Email: ' + email : null,
      bigForm ? resultNote : null
    ].join("\n");
    tgSendMessage(resultTelegramNote);
  }

  function closeModal() {
    dispatch('close');
  }
</script>

{#if open}
  <div class={notModal ? '' : 'modal-overlay'} on:click={closeModal}>
    <div class="modal-content{bigForm ? ' big-form' : ''}" on:click|stopPropagation style="transform: scale({bigForm ? Math.min(1, window.innerHeight / 1100) : 1});">
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
        {#if (!bigForm)}
            {#if (!hiddenFields.includes('name'))}
            <input type="text" bind:value={name} required placeholder="Ваше имя"/>
            {/if}
            {#if (!hiddenFields.includes('phone'))}
            <input type="text" maxlength="20" bind:this={phoneControl} use:imask={options} required placeholder="+7 (999) 999-99-99"/>
            {/if}
            {#if (!hiddenFields.includes('email'))}
            <input type="email" bind:value={email} required placeholder="Email" />
            {/if}
            {#if (!hiddenFields.includes('note'))}
            <textarea bind:value={note} placeholder="Текст сообщения"></textarea>
            {/if}
        {:else}
        <div class="row">
            <div class="col-12 col-sm-6 pb-2 pb-sm-4">
                <input type="text" bind:value={name} required placeholder="Ваше имя" class="w-100" />
            </div>
            <div class="col-12 col-sm-6 pb-2 pb-sm-4">
                <input type="text" bind:value={company} placeholder="Название компании" class="w-100" />
            </div>
            <div class="col-12 col-sm-6 pb-2 pb-sm-4">
                <input type="email" bind:value={email} required placeholder="Email" class="w-100" />
            </div>
            <div class="col-12 col-sm-6 pb-2 pb-sm-4">
                <input type="text" maxlength="20" bind:this={phoneControl}  use:imask={options} required placeholder="+7 (999) 999-99-99" class="w-100" />
            </div>
            <div class="col-12 big-form-subtitle font-blue pb-4 pt-3 pt-sm-0 ">
            Выберите нужные услуги
            </div>
            <div class="col-12 button-selectors pb-4">
                <div>
                    <input type="checkbox" id="ch1" bind:group={services} value="брендинг">
                    <label for="ch1">Брендинг</label>
                </div>
                <div>
                    <input type="checkbox" id="ch2" bind:group={services} value="упаковка продукции">
                    <label for="ch2">Упаковка продукции</label>
                </div>
                <div>
                    <input type="checkbox" id="ch3" bind:group={services} value="сайт">
                    <label for="ch3">Сайт</label>
                </div>
                <div>
                    <input type="checkbox" id="ch4" bind:group={services} value="видеопродакшн">
                    <label for="ch4">Видеопродакшн</label>
                </div>
            </div>
            <div class="col-12 big-form-subtitle font-blue pb-4">
            Ваш бюджет
            </div>
            <div class="col-12 button-selectors pb-4">
                <div>
                    <input type="radio" id="r1" bind:group={sum} value="< 500000">
                    <label for="r1">&lt; 500 000</label>
                </div>
                <div>
                    <input type="radio" id="r2" bind:group={sum} value="500000-1000000">
                    <label for="r2">500 000 - 1 000 000</label>
                </div>
                <div>
                    <input type="radio" id="r3" bind:group={sum} value=">1000000">
                    <label for="r3">&gt; 1 000 000</label>
                </div>
            </div>
            <div class="col-12 big-form-subtitle pb-4">
            Файлы и дополнительная информация
            </div>
            <div class="col-12 d-flex pb-4 gap-4 align-items-center">
                <label class="btn-blue d-inline-flex">
                    <div class="d-block d-flex align-items-center gap-2 font-white">Загрузить архив
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 8L12 3M12 3L7 8M12 3V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>                  
                    </div>
                  <input type="file" hidden on:change="{handleFileChange}" />
                </label>
                {#if files}
                  <p class="my-2">Выбран файл: {files.name}</p>
                {/if}
            </div>
            <div class="col-12 pb-4">
                <textarea bind:value={note} placeholder="Расскажите о вашем проекте" class="w-100"></textarea>
            </div>
            <div class="col-12 pb-4">
                <label class="custom-checkbox">
                  <input type="checkbox" name="ce" bind:group={spam} value="Хочу подписаться на почтовую рассылку">
                  <span class="checkmark"></span>
                  Хочу подписаться на почтовую рассылку
                </label>
            </div>
            <div class="col-12 pb-4">
                <label class="custom-checkbox">
                  <input type="checkbox" name="cp" checked required>
                  <span class="checkmark"></span>
                  <div>Я соглашаюсь с <a href="/policy/"><u>политикой конфиденциальности</u></a></div>
                </label>
            </div>


        </div>
        
        {/if}
        <button type="submit" class="btn-blue">Отправить</button>
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
    @media (max-width: 767px) {
        overflow-y: auto;
        height: initial;
        bottom: 10px;
        display: inline-block;
        padding: 10px;
        overflow-x: hidden;
    }
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
    &.big-form {
        max-width: 900px;
        @media (max-width: 767px) {
            transform: none !important;
            width: calc(100% - 10px);
            padding: 1em;
            gap: 0.2em;
        }
    }
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
      font-weight: 100;
      @media (max-width: 767px) {
          margin-bottom: 1.7em;
      }
  }

  form {
      display: flex;
      flex-direction: column;
      gap: 1em;
      justify-content: center;
      width: 100%;
  }
  input, textarea {
      border: 1px solid #3335;
      font-size: 1em;
      padding: 1em;
      border-radius: 7px;
  }
  textarea {
      height: 6em;
  }
  button[type="submit"] {
      margin-top: 1em;
      @media (max-width: 767px) {
        margin-top: 0;
      }
  }
  .close-button {
      position: absolute;
      top: 0.7em;
      right: 0.7em;
      z-index: 100;
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
    left: 0;
    right: 0;
    justify-content: center;
    border: 1px solid #3335;
    border-radius: 7px;
    text-align: center;
  }
  .big-form-subtitle {
    font-size: 1.25em;
    text-transform: uppercase;
    text-align: left;
    }
    .button-selectors {
        display: flex;
        justify-content: start;
        gap: 1em;
        input {
            display: none;
        }
        label {
            background: #4A3AD999;
            opacity: 0.6;
            color: #FFF;
            padding: 1em 2em;
            font-size: 1em;
            display: flex;
            border-radius: 7px;
            cursor: pointer;
        }
        input:checked + label {
            opacity: 1;
        }
        @media (max-width: 767px) {
            font-size: 0.8em;
            flex-wrap: wrap;
            gap: 0.8em;
            label {
                white-space: nowrap;
            }
        }
    }

</style>