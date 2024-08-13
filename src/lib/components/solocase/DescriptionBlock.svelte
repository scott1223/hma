<script>
</script>

<section class="desc-block-section --margin-bottom">
	<div class="container">
		<div class="desc-block">
			<div class="desc-block-borders">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="desc-block-body">
				<div class="desc-block-body-subtitle">
					<p>О проекте</p>
				</div>
				<div class="border-vertical"></div>
				<div class="desc-block-body-content">
					<h1>Заголовки пример</h1>
					<div>
						<span>Заголовок блока текста - смысловая единица</span>
						<p>
							Текст - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident explicabo
							facilis eaque odit praesentium quod deleniti cumque! Omnis dolore, recusandae
							dignissimos, aspernatur quo ullam provident quibusdam numquam nihil non quia.
						</p>
					</div>
					<div>
						<span>Заголовок листа перечисления</span>
						<ul>
							<li>Пример единицы листа</li>
							<li>Пример единицы листа</li>
							<li>Пример единицы листа</li>
							<li>Пример единицы листа</li>
						</ul>
					</div>
					<div>
						<span>Заголовок блока текста 2 - смысловая единица</span>
						<p>
							Текст - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident explicabo
							facilis eaque odit praesentium quod deleniti cumque! Omnis dolore, recusandae
							dignissimos, aspernatur quo ullam provident quibusdam numquam nihil non quia.
						</p>
					</div>
                    <div>
                        <p>Просто текст - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur ipsam doloremque explicabo et mollitia nobis, error tempore neque ex repellat porro ullam quas, officia alias hic sit temporibus deleniti.</p>
                    </div>
				</div>
			</div>
			<div class="desc-block-borders">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.desc-block {
		display: flex;
		flex-direction: column;
		gap: 6px;

		@media (max-width: 1024px) {
			.border-vertical {
				width: 1px;
				height: 100%;
			}
		}
		@media (max-width: 767px) {
			.border-vertical {
				display: none;
			}
		}

		&-borders {
			display: grid;
			grid-template-columns: 2fr 1px 3fr;
			gap: 6px;

			@media (max-width: 1024px) {
				grid-template-columns: 1fr 1px 4fr;
			}
			@media (max-width: 767px) {
				grid-template-columns: 1fr;
			}

			div {
				height: 1px;
				width: 100%;
				background-color: rgba($color: #000000, $alpha: 0.1);

				&:nth-child(2) {
					background-color: transparent;
				}

				@media (max-width: 767px) {
					&:not(:nth-child(1)) {
                        display: none;
					}
				}
			}
		}

		&-body {
			display: grid;
			grid-template-columns: 2fr 1px 3fr;
			gap: 6px;

			@media (max-width: 1024px) {
				grid-template-columns: 1fr 1px 4fr;
			}
			@media (max-width: 767px) {
				display: flex;
				flex-direction: column;
			}

			&-subtitle {
				padding: 15px;

				p {
					color: #a9a9a9;
					font-size: clamp(16px, calc(23 / 1600 * 100vw), 23px);
				}
			}
			&-content {
				padding: 15px;
				display: flex;
				flex-direction: column;
				gap: 60px;

                @media (max-width: 767px) {
                    
				gap: 40px;
                }

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					font-size: clamp(50px, calc(65 / 1600 * 100vw), 65px);
				}

				& > div {
					display: flex;
					flex-direction: column;
					gap: 20px;

					span {
						font-size: 16px;

						@media (max-width: 767px) {
							font-size: 14px;
						}
					}
					p {
						font-size: clamp(16px, calc(23 / 1600 * 100vw), 23px);
					}
					ul {
						display: flex;
						flex-direction: column;
						list-style: disc inside;

						li {
							padding: 10px;
							border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
							list-style: disc inside;

							@media (max-width: 1024px) {
								padding: 7px 5px 7px 0;
							}
							&:first-child {
								border-top: none;
								padding-top: 0;
							}
						}
					}
				}
			}
		}
	}
</style>
