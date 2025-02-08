<script>
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';
    import { CMS_URL } from '$lib/globals.js';
    
	let {GridPhotoBlock, galleryId, caseLinks}=$props()
    let gridPhotos = GridPhotoBlock?.Images?.data
    
    onMount(() => {
        if (0 && gridPhotos) {
            let lightbox = new PhotoSwipeLightbox({
              gallery: '#' + galleryId,
              children: 'a',
              initialZoomLevel: 10,
              maxZoomLevel: 50,
              secondaryZoomLevel: 30,
              pswpModule: () => import('photoswipe'),
            });
            lightbox.init();
        }
    })    
    
</script>
{#if (gridPhotos) }
    <div class="grid-photo-wrapper" id={galleryId}>
    {#each gridPhotos as img, i}
        <div class="grid-photo-container g{i}{caseLinks ? ' caseLinks' : ''}" style="background-image: url('{CMS_URL + img.attributes.url}')">
            <a href={(caseLinks && caseLinks[i]) ? caseLinks[i] : CMS_URL + img.attributes.url} class="grid-photo" target="{(caseLinks && caseLinks[i]) ? '_self' : '_blank'}">
            </a>
        </div>
    {/each}
    </div>
{/if}
{#if (GridPhotoBlock?.TextBlock3) }
    <section class="grid-photo-text3-section">
        <div class="container">
                <p class="textBlock-text">
                    {@html GridPhotoBlock.TextBlock3.replaceAll("\n", "<br>")}
                </p>
        </div>
    </section>
{/if}
<style lang="scss">
.grid-photo-wrapper {
    display: grid;
    gap: 10px;
    grid-template:
        "g0 g0 g2 g3 g5" auto
        "g0 g0 g4 g4 g6" auto;
    .g0 {
        grid-area: g0;
    }
    .g4 {
        grid-area: g4;
    }
    .grid-photo-container {
        background-size: cover;
        background-position: center;
        a {
            display: block;
            margin-top: 100%;
            top: -100%;
            height: 100%;
        }
    }
    .grid-photo-container.g4 {
        a {
            margin-top: 50%;
        }
    }
    .caseLinks {
        &:hover {
            transform: scale(1.01);
            filter: brightness(1);
        }
        transition: all 0.3s;
        border-radius: 10px;
        filter: brightness(0.8);
    }
}
</style>
