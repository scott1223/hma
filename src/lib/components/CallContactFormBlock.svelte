<script>
  import ContactModal from '$lib/components/ContactModal.svelte';
</script>
<div class="cdu-contact-form-wrapper">
<ContactModal open={true} notModal={true} title='Давайте обсудим ваш проект' subtitle='Оставьте свой номер телефона' hiddenFields={['name', 'email', 'note']}/>  
</div>

<style lang="scss">
:global(.cdu-contact-form-wrapper) {
    :global(.modal-content) {
        max-width: 600px;
        padding: 0;
        text-align: left;
    }
    :global(h2) {
        font-size: 40px !important;
        margin: 0;
        font-weight: 400;
        @media (max-width: 767px) {
            font-size: 24px !important;
            line-height: 1.2;
        }
    }
    :global(h3) {
        font-size: 23px !important;
        margin: 0;
        @media (max-width: 767px) {
            font-size: 16px !important;
        }
    }
    :global(button) {
        @media (max-width: 767px) {
          margin-top: 0.2em !important;
          font-size: 1.1em;
        }
    }
    @media (max-width: 767px) {
      flex-direction: column;
    }
}
</style>