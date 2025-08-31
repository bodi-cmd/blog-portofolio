<script>
	import { _ } from 'svelte-i18n';
</script>

<div class="section">
	<h1 class="title">{$_('customers.title')}</h1>
	<div class="customer-row">
		<img src="./cruze.png" alt="cruze logo" />
		<div class="description">
			<p>{$_('customers.cruze.description')}</p>
			<div class="bullets-row">
				<div class="bullet">{$_('customers.cruze.bullets.system_design')}</div>
				<div class="bullet">{$_('customers.cruze.bullets.backend')}</div>
				<div class="bullet">{$_('customers.cruze.bullets.deploy')}</div>
			</div>
		</div>
	</div>
	<div class="customer-row">
		<img src="./biotweak.png" alt="biotweak logo" />
		<div class="description">
			<p>{$_('customers.biotweak.description')}</p>
			<div class="bullets-row">
				<div class="bullet">{$_('customers.biotweak.bullets.system_design')}</div>
				<div class="bullet">{$_('customers.biotweak.bullets.backend')}</div>
				<div class="bullet">{$_('customers.biotweak.bullets.deploy')}</div>
			</div>
		</div>
	</div>
	<div class="customer-row">
		<img src="./creative-motion.jpg" alt="creative motion logo" />
		<div class="description">
			<p>
				<a href="https://creativemotion.io/">Creative Motion</a>
				{$_('customers.creativemotion.description')}
			</p>
			<div class="bullets-row">
				<div class="bullet">{$_('customers.creativemotion.bullets.frontend')}</div>
				<div class="bullet">{$_('customers.creativemotion.bullets.backend')}</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.customer-row {
		margin-bottom: 3rem;
		display: flex;
		gap: 4rem;
		img {
			width: 224px;
			height: 224px;
		}
		.bullets-row {
			display: flex;
			justify-content: start;
			align-items: center;
			gap: 1rem;
			flex-wrap: wrap;

			.bullet {
				font-size: 1rem;
				background-color: var(--color-secondary);
				text-align: center;
				padding: 8px;
				border-radius: 300px;
				min-width: 64px;
			}
		}
	}

	@media (max-width: 924px) {
		.customer-row {
			flex-direction: column;
			align-items: center;
			p {
				text-align: justify;
			}
		}
	}
</style>
