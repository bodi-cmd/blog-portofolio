<script>
	import Gallery from '$lib/gallery.svelte';
	import { _, locale } from 'svelte-i18n';
	import ro from './i18n/ro.json';
	import en from './i18n/en.json';
	import { _setDictionary } from '../../+layout';
	import Prism from 'prismjs';
	import { keypadDemoSnippet } from './snippets/arduino-snippets';
	import { base } from '$app/paths';

	let projects = [];
	locale.subscribe((lang) => {
		projects = lang === 'ro' ? ro : en;
		_setDictionary(ro, en);
	});
</script>

<div class="page">
	<div class="section blog-section">
		<h1 class="title text-primary">Macro KIKI</h1>
		<h2 class="subtitle">{$_('macroKiki.subtitle')}</h2>
		<div class="content">
			<p>
				{$_('macroKiki.intro1')}
			</p>
			<Gallery
				images={[
					`${base}/projects/macrokiki/macrokiki_whitebg.webp`,
					`${base}/projects/macrokiki/macrokiki2_whitebg.webp`
				]}
			/>
			<h2 class="subtitle">{$_('macroKiki.architecture.title')}</h2>
			<p>
				{$_('macroKiki.architecture.p1')}
			</p>
			<p>
				{$_('macroKiki.architecture.p2')}
			</p>
			<p>
				{$_('macroKiki.architecture.p3')}
			</p>
			<Gallery images={[`${base}/projects/macrokiki/ui.png`]} />
			<h2 class="subtitle">{$_('macroKiki.keypad.title1')}</h2>
			<p>
				{$_('macroKiki.keypad.p1')}
			</p>
			<p>
				{$_('macroKiki.keypad.p2')}
			</p>
			<div class="code">
				<pre>
{@html Prism.highlight(keypadDemoSnippet, Prism.languages['clike'])}
				</pre>
			</div>
			<p>
				{$_('macroKiki.keypad.p3')}
			</p>
			<div class="bg-white">
				<Gallery images={[`${base}/projects/macrokiki/multiplexing.gif`]} />
			</div>
		</div>
	</div>
</div>
