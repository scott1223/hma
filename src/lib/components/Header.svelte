<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import CallBack from './CallBack.svelte';

	let header;

	function setBurger() {
		gsap.set('.header__menu li a span', {
			yPercent: 100
		});

		gsap.set(header, {
			width: '150px',
			height: 'calc(28px + (2*10px))'
		});
	}

	function toggleBurger() {
		if (header.classList.contains('active')) {
			deactivateBurger();
		} else {
			activateBurger();
		}
	}

	function activateBurger() {
		header.classList.add('active');
		const tl = gsap.timeline();

		tl.to(header, {
			width: '300px',
			height: '300px',
			stagger: 0.1
		})
			.to(
				'.burger-menu',
				{
					delay: 0,
					backgroundColor: 'transparent',
					duration: 0
				},
				'<'
			)
			.to(
				'.burger-menu p span',
				{
					delay: 0,
					duration: 0.2,
					yPercent: -100
				},
				'<'
			)
			.to('.header__menu li a span', {
				yPercent: 0
			});
	}

	function deactivateBurger() {
		header.classList.remove('active');

		const tl = gsap.timeline();

		tl.to('.header__menu li a span', {
			yPercent: 100
		})
			.to('.burger-menu p span', {
				delay: 0,
				duration: 0.2,
				yPercent: 0
			})
			.to(header, {
				width: '150px',
				height: 'calc(28px + (2*10px))',
				stagger: 0.1
			});
	}

	onMount(() => {
		setBurger();
	});
</script>

<!-- svelte-ignore a11y_interactive_supports_focus -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div>
<header
	id="header"
	bind:this={header}
	class="invisible"
	onclick={() => {
		toggleBurger();
	}}
	role="button"
>
	<div class="container">
		<div class="header-wrap">
			<div class="burger-wrap">
				<nav>
					<ul class="header__menu">
						<li>
							<a href="/"><span>Главная</span></a>
						</li>
						<li>
							<a href="/about"><span>О нас</span></a>
						</li>
						<li>
							<a href="/cases"><span>кейсы</span></a>
						</li>
						<li>
							<a href="/media"><span>медиа</span></a>
						</li>
						<li>
							<a href="/service"><span>услуги</span></a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="burger-menu">
				<p><span>меню</span></p>
				<div class="burger">
					<span></span><span></span><span></span>
				</div>
			</div>
		</div>
	</div>
</header>
<CallBack />
</div>

<style lang="scss">
	.word {
		overflow: hidden;
	}

	.line {
		overflow: hidden;
		line-height: 0.7;
	}
	.header {
		&-wrap {
			display: flex;
			flex-direction: column;
			height: 100%;
			max-height: 300px;
			position: relative;
		}
		&__menu {
			display: flex;
			flex-direction: column;
			gap: 16px;

			li a {
				display: block;
				overflow: hidden;
				width: fit-content;
				span {
					display: block;
					color: #fff;
					font-weight: 300;
					font-size: 20px;
					white-space: nowrap;
					text-transform: uppercase;
					position: relative;
					z-index: 10;
				}
			}
		}
		&__links {
			display: flex;
			gap: 16px;
			font-size: min(1.5vw, 16px);
			@media (max-width: 1139.9px) {
				font-size: min(1.8vw, 15px);
			}

			a {
				flex: 0 0 100%;
				font-size: min(4.5vw, 22px);
				white-space: nowrap;
			}
			.no-color {
				background-color: #fff;
				color: var(--accent-color);
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.burger {
		width: 22px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-direction: column;
		gap: 4px;

		span {
			height: 1.5px;
			background-color: #fff;
			border-radius: var(--border-radius);
			overflow: hidden;
			transition: all 0.5s ease;
		}
		&-wrap {
			position: absolute;
			top: 0;
			left: 0;
			background-color: #333333;
			padding: 20px 15px;
			width: calc(100vw - 20px);
			height: 40vh;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			border-radius: 10px;
		}

		&-menu {
			position: absolute;
			top: 0;
			left: 0;
			padding: 10px 15px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			transition: all 0.5s ease;

			p {
				display: block;
				overflow: hidden;
				span {
					display: block;
					color: #fff;
					font-weight: 300;
					font-size: 20px;
					white-space: nowrap;
					transition: all 0.5s ease;
				}
			}
		}
	}
	.color {
		color: #333333;
		border-radius: 5px;
		background: rgba(38, 38, 38, 0.05);
		padding: 7px 12px;
		font-weight: 300;
	}

	.no-color {
		color: #fff;
		border-radius: 5px;
		background: #333333;
		padding: 7px 12px;
		font-weight: 300;
	}

	#header {
		position: fixed;
		top: 30px;
		left: 30px;
		width: 150px;
		overflow: hidden;
		border-radius: 10px;
		height: 48px;
		z-index: 10;
		max-width: 500px;
		transition: all 0.5s ease;

		@media (max-width: 767px) {
			max-width: calc(100% - 60px);
		}

		&:global(.invisible) {
			opacity: 0;
			visibility: hidden;
		}

		&:global(.active) {
			.burger-menu {
				padding: 20px 15px;
			}
			.burger span {
				&:nth-child(2) {
					opacity: 0;
				}
				&:nth-child(1) {
					transform: rotate(45deg) translateY(7.8px);
				}
				&:nth-child(3) {
					transform: rotate(-45deg) translateY(-7.8px);
				}
			}
		}
		.container {
			padding: 0;
		}
	}
</style>
