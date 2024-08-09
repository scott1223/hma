<script>
	import ButtonText from './uikit/ButtonText.svelte';

	let { isCasesPage, projects } = $props()

	console.log(projects)
</script>

{#snippet projectElement(project)}
	<div class="projects-grid-borders">
		<div></div>
		<div></div>
		<div></div>
	</div>

	<a href={project.href} class="projects-grid-element">
		<div class="projects-grid-element-image">
			<img src={project.image} alt="project thumbnail" />
		</div>
		<div class="projects-grid-element-border"></div>
		<div class="projects-grid-element-desc">
			<h2>{project.name}</h2>
			<p>
				{project.desc}
			</p>
			<div>
				{#each project.tags as tag}
					<span>{tag}</span>
				{/each}
			</div>
		</div>
	</a>
{/snippet}

<section class="projects-grid-section --margin-bottom">
	<div class="container">
		<div class="projects-grid-wrap">
			<div class="projects-grid">
				{#each projects as project}
					{@render projectElement(project)}
				{/each}

				<div class="projects-grid-borders">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			{#if !isCasesPage}
				<ButtonText text="Смотреть все проекты" href="/projects" />
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	.projects-grid {
		display: flex;
		flex-direction: column;
		gap: 6px;

		&-wrap {
			display: flex;
			flex-direction: column;
			gap: 65px;

			@media (max-width: 767px) {
				gap: 35px;
			}

			:global(.button-text) {
				justify-content: center;
			}
		}
		&-element {
			display: grid;
			grid-template-columns: 3fr 1px 2fr;
			column-gap: 6px;

			@media (max-width: 1024px) {
				grid-template-columns: 1fr 1px 1fr;
			}

			@media (max-width: 767px) {
				display: flex;
				flex-direction: column;
			}

			@media (hover: hover) {
				&:hover {
					img {
						transform: scale(1.05);
					}
				}
			}

			@media (hover: none) {
				&:active {
					img {
						transform: scale(1.05);
					}
				}
			}
			img {
				object-fit: cover;
				object-position: centers;
				transition: all 0.5s ease;
			}

			&-image {
				border-radius: var(--border-radius);
				overflow: hidden;
			}

			&-border {
				background-color: rgba($color: #000000, $alpha: 0.1);

			}

			&-desc {
				display: flex;
				flex-direction: column;
				justify-content: end;
				gap: 15px;
				padding: 15px 10px;

				h2 {
					font-size: clamp(20px, calc(25 / 1600 * 100vw), 25px);
					text-transform: uppercase;
					font-weight: 500;
				}
				p {
					font-size: clamp(14px, calc(16 / 1600 * 100vw), 16px);
				}
				div {
					display: flex;
					gap: 50px;

					span {
						font-size: clamp(14px, calc(16 / 1600 * 100vw), 16px);
						color: #a9a9a9;
					}
				}
			}
		}

		&-borders {
			display: grid;
			grid-template-columns: 3fr 1px 2fr;
			gap: 6px;

			@media (max-width: 1024px) {
				grid-template-columns: 1fr 1px 1fr;
			}
			@media (max-width: 767px) {
				grid-template-columns: 1fr;

				&:last-child{
					display: none;
				}
			}
			div {
				&:nth-child(1) {
					height: 1px;
					width: 100%;
					background-color: rgba($color: #000000, $alpha: 0.1);
				}
				&:nth-child(2) {
					height: 1px;
					width: 100%;
					background-color: transparent;
					@media (max-width: 767px) {
						display: none;
					}
				}
				&:nth-child(3) {
					height: 1px;
					width: 100%;
					background-color: rgba($color: #000000, $alpha: 0.1);

					@media (max-width: 767px) {
						display: none;
					}
				}
			}
		}
	}
</style>
