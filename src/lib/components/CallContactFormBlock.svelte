<script>
  import ContactModal from './ContactModal.svelte';
  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<button on:click={openModal}>Открыть контактную форму</button>

<ContactModal open={showModal} on:close={closeModal} />