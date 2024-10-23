<script>
  import ContactModal from './ContactModal.svelte';
  let showModal = $state(false);
  const props = $props();
  let initiator;
  $effect( () => {
    initiator = props.initiator;
    if (initiator) {
    console.log({initiator});
    initiator.addEventListener("click", openModal)
    }
  } )

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>
<ContactModal open={showModal} on:close={closeModal} {...props}/>