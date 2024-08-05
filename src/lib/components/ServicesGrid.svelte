<script>
	const services = [
		{
			name: 'Нейминг',
			desc: 'Уникальное название вашего бренда/компании, которое транслирует ваши ценности и философию.',
			images: ['/service1-1.png', '/service1-2.png', '/service1-3.png']
		},
		{
			name: 'Логотип',
			desc: 'Основа бренда, которая помогает потребителям узнать компанию и запомнить её. Логотип представляет собой уникальное начертание полного или сокращенного наименования компании. Он может включать буквы и графические элементы, которые становятся частью надписи. <br><br> Уникальность логотипа — это один из важнейших критериев оценки, который позволяет выделить бренд среди конкурентов и создать узнаваемый образ.',
			images: ['/service1-1.png', '/service1-2.png', '/service1-3.png']
		},
		{
			name: 'Фирменный Стиль',
			desc: 'Комплекс элементов, формирующих отличительный и целостный образ бренда. Она включает в себя визуальные и вербальные компоненты, которые используются во всем визуале компании и на всех каналах коммуникации с аудиторией.',
			images: ['/service1-1.png', '/service1-2.png', '/service1-3.png']
		},
		{
			name: 'Платформа',
			desc: 'Создаем совокупность смыслов, которые формируют образ компании, вектор её движения и позиционирование в определенной рыночной нише, а также преимущества и ключевые характеристики.',
			images: ['/service1-1.png', '/service1-2.png', '/service1-3.png']
		},
		{
			name: 'Маркетинговая стратегия',
			desc: 'Главный документ, на основе которого компании планируют продвижение и продажи товаров и услуг. Она помогает систематизировать ресурсы компании и оценить их эффективность для перераспределения на более эффективные каналы продвижения. Эти каналы могут включать наружную рекламу, партнёрства с блогерами, рекламу в социальных сетях, на радио, телевидении и в поисковых сетях.',
			images: ['/service1-1.png', '/service1-2.png', '/service1-3.png']
		},
		{
			name: 'Сайты',
			desc: 'Делаем сайты',
			images: ['/service1-1.png', '/service1-2.png', '/service1-3.png']
		}
	];
</script>

{#snippet servicesElement(service)}
	<div class="services-grid-borders">
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="services-grid-element">
		<div class="services-grid-element-desc">
			<h3>{service.name}</h3>
			<p>{@html service.desc}</p>
		</div>
		<div class="border-vertical"></div>
		<div class="services-grid-element-images">
			<img src={service.images[0]} alt="" />
			<div class="border-vertical"></div>
			<img src={service.images[1]} alt="" />
			<div class="border-vertical"></div>
			<img src={service.images[2]} alt="" />
		</div>
	</div>
{/snippet}

<section class="services-grid-section --margin-bottom">
	<div class="container">
		<div class="services-grid">
			{#each services as service}
				{@render servicesElement(service)}
			{/each}
			<div class="services-grid-borders">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.services-grid {
		display: flex;
		flex-direction: column;
		gap: 6px;

		&-borders {
			display: grid;
			grid-template-columns: 2fr 1px 3fr;
			gap: 6px;

			@media (max-width: 1024px) {
				grid-template-columns: 1fr;
			}

			div {
				height: 1px;
				width: 100%;
				background-color: rgba($color: #000000, $alpha: 0.1);

				&:nth-child(2) {
					background-color: transparent;
					@media (max-width: 1024px) {
						display: none;
					}
				}
				&:nth-child(3) {
					@media (max-width: 1024px) {
						display: none;
					}
				}
			}
		}

		&-element {
			display: grid;
			grid-template-columns: 2fr 1px 3fr;
			gap: 6px;

			@media (max-width: 1024px) {
				display: flex;
				flex-direction: column;
			}

			&-desc {
				display: flex;
				flex-direction: column;
				gap: 20px;
				padding: 5px 0;

				h3 {
					font-size: clamp(18px, calc(25 / 1600 * 100vw), 25px);
				}

				p {
					font-size: clamp(14px, calc(16 / 1600 * 100vw), 16px);
				}
			}

			&-images {
				display: grid;
				grid-template-columns: 1fr 1px 1fr 1px 1fr;
				gap: 6px;

				img {
					aspect-ratio: 1;
				}
			}
		}
	}
	:global(.border-vertical) {
		width: 1px;
		height: 100%;
		background-color: rgba($color: #000000, $alpha: 0.1);

		@media (max-width: 1024px) {
			width: 0px;
			height: 100%;
		}
	}
</style>
