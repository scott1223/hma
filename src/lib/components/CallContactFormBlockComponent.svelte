<script>
	import { CMS_URL } from '$lib/globals.js';
	import { marked } from 'marked';
    import CallContactFormBlock from '$lib/components/CallContactFormBlock.svelte';
    let { contactFormData } = $props();
</script>

<div class="desc-block-body-subtitle contact-form-avatar">
    {#if contactFormData.contactForm?.avatar}
    <img src={CMS_URL + contactFormData.contactForm?.avatar.data.attributes.url}>
    {/if}
    {#if contactFormData.contactForm?.avatarTitle}
    <div class="contact-form-avatar-title">{@html marked.parse(contactFormData.contactForm?.avatarTitle)}</div>
    {/if}
</div>
<div class="border-vertical"></div>
<div class="desc-block-body-content">
    <CallContactFormBlock hiddenFields={contactFormData.hiddenFields} />
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
}
:global(.contact-form-avatar) {
    padding-right: 5em !important;
    :global(img) {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }
    :global(.contact-form-avatar-title) {
        :global(p) {
            color: #000;
            font-size: 16px;
            :global(strong) {
                font-weight: 600;
            }
        }
    }
}

</style>