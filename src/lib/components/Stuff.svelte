<script>
	import { CMS_URL } from '$lib/globals.js';
	let { teamMembers } = $props();

</script>

{#snippet stuffPerson(teamMembersElement)}
	<div class="stuff-grid-row-element">
		<img
			src={CMS_URL + teamMembersElement.image.data.attributes.url}
			alt={teamMembersElement.image.data.attributes.alternativeText}
		/>
		<p>{teamMembersElement.name}</p>
	</div>
{/snippet}

<section class="stuff-section --margin-bottom">
	<div class="container">
		<div class="stuff">
			<p class="stuff-text">
				Вам как Себе - наша уникальная философия и подход в создании проектов.
			</p>
			<div class="stuff-grid">
				<div class="stuff-grid-borders">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="stuff-grid-row">
					{@render stuffPerson(teamMembers[0])}

					<div class="border"></div>

					{@render stuffPerson(teamMembers[1])}
				</div>
				<div class="stuff-grid-borders">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="stuff-grid-row">
					{@render stuffPerson(teamMembers[2])}

					<div class="border"></div>

					{@render stuffPerson(teamMembers[3])}
				</div>
				<div class="stuff-grid-borders">
					<div></div>
					<div></div>
					<div></div>
				</div>
				{#if teamMembers[4]}
					<div class="stuff-grid-row">
						{@render stuffPerson(teamMembers[4])}

						<div class="border"></div>

						{@render stuffPerson(teamMembers[5])}
					</div>
					<div class="stuff-grid-borders">
						<div></div>
						<div></div>
						<div></div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.stuff {
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

			&-borders {
				display: grid;
				grid-template-columns: 1fr 1px 1fr;

				div {
					width: 100%;
					height: 1px;
					background-color: rgba($color: #000000, $alpha: 0.1);

					&:nth-child(2) {
						background-color: transparent;
					}
				}
			}

			&-row {
				display: grid;
				grid-template-columns: 1fr 1px 1fr;
				gap: 6px;

				@media (max-width: 767px) {
					grid-template-columns: 1fr;
				}

				.border {
					width: 1px;
					height: 100%;
					background-color: rgba($color: #000000, $alpha: 0.1);

					@media (max-width: 767px) {
						width: 100%;
						height: 1px;
					}
				}

				&-element {
					border-radius: var(--border-radius);
					overflow: hidden;

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
						width: 100%;
						height: 100%;
						object-fit: cover;
						transition: all 0.5s ease;
						filter: brightness(90%);
					}

					p {
						position: absolute;
						bottom: 15px;
						left: 15px;
						color: #fff;
						font-size: clamp(20px, calc(23 / 1600 * 100vw), 23px);
						text-transform: uppercase;
						font-weight: 500;
					}
				}
			}
		}
	}
</style>
