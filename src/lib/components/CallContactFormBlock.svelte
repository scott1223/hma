<script>
  import ContactModal from './ContactModal.svelte';
  let showModal = false;
  export let hiddenFields = [];
  export let title = "";

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<button on:click={openModal}>Открыть контактную форму</button>

<ContactModal open={showModal} on:close={closeModal} hiddenFields={hiddenFields} title={title}/>