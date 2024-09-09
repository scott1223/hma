<script>
	import { onMount } from 'svelte';

	let {accordion}=$props()
	let accGrid;

	function onclick(e) {
		const accElement = e.currentTarget;
		const content = accElement.querySelector('.accordion-grid-element-wrap-content');

		if (!accElement.classList.contains('active')) {
			document.querySelectorAll(`.${accElement.className.split(' ')[0]}`).forEach((el) => {
				el.classList.remove('active');
				el.querySelector('.accordion-grid-element-wrap-content').style.paddingTop = `0px`;
				el.querySelector('.accordion-grid-element-wrap-content').style.maxHeight = `0`;
			});

			accElement.classList.add('active');

			content.style.paddingTop = `30px`;
			content.style.maxHeight = `${content.scrollHeight + 30}px`;
		} else {
			accElement.classList.remove('active');
			content.style.paddingTop = `0px`;
			content.style.maxHeight = `0`;
		}
	}

	onMount(() => {
		accGrid.querySelector('.accordion-grid-element').click();
	});
</script>

{#snippet accElement(accordion, i)}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="accordion-grid-element" {onclick} role="button" tabindex="0">
		<div class="accordion-grid-element-number">{i + 1}</div>
		<div class="border-vertical"></div>
		<div class="accordion-grid-element-wrap">
			<div class="accordion-grid-element-wrap-header">{accordion.header}</div>
			<div class="accordion-grid-element-wrap-content">
				{@html accordion.content}
			</div>
		</div>
	</div>
{/snippet}

<section class="accordion-section --margin-bottom">
	<div class="container">
		<div class="accordion">
			<p class="accordion-text">
				Вам как Себе - наша уникальная философия и подход в создании проектов.
			</p>
			<div class="accordion-grid" bind:this={accGrid}>
				{#each accordion as accordionElement, i}
					<div class="borders">
						<div></div>
						<div></div>
						<div></div>
					</div>
					{@render accElement(accordionElement, i)}
				{/each}
				<div class="borders">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.accordion {
		display: flex;
		flex-direction: column;
		gap: 100px;
		align-items: center;
		@media (max-width: 767px) {
			gap: 60px;
		}	

		&-text {
			text-align: center;
			width: 80%;
			line-height: 100%;
			text-wrap: balance;
			font-size: clamp(50px, calc(75 / 1600 * 100vw), 75px);
			color: #333333;
			font-weight: 500;

			@media (max-width: 767px) {
				font-size: clamp(30px, 3.75vw, 60px);
			}
		}

		&-grid {
			display: flex;
			flex-direction: column;
			gap: 6px;

			.borders {
				display: grid;
				grid-template-columns: 1fr 1px 4fr;
				gap: 6px;

				div {
					height: 1px;
					width: 100%;
					background-color: rgba($color: #000000, $alpha: 0.1);

					&:nth-child(2) {
						background-color: transparent;
					}
				}
			}

			&-element {
				display: grid;
				grid-template-columns: 1fr 1px 4fr;
				gap: 6px;
				cursor: pointer;

				&-number {
					color: #a9a9a9;
					padding: 15px 0px;
				}
				&-wrap {
					display: flex;
					flex-direction: column;
					padding: 15px 8px;

					&-header {
						font-size: clamp(20px, calc(20 / 1600 * 100vw), 23px);
						text-transform: uppercase;
						color: var(--accent-color);
					}
					&-content {
						max-height: 0;
						overflow: hidden;
						transition: all 0.5s ease;
					}
				}
			}
		}
	}
</style>
