<script>
	import { _ } from 'svelte-i18n';
</script>

<div class="section">
	<div class="flex">
		<div class="content">
			<h1 class="title">{$_('about.me.title')}</h1>
			<p>{$_('about.me.text.p1')}</p>
			<p>{$_('about.me.text.p2')}</p>
		</div>
		<div class="content">
			<img src="./fagure.webp" alt="known technologies" class="page-image mx-auto w-1/2" />
		</div>
	</div>
</div>
