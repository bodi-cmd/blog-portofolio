<script>
	import Gallery from '$lib/gallery.svelte';
	import { _, locale } from 'svelte-i18n';
	import ro from './i18n/ro.json';
	import en from './i18n/en.json';
	import { _setDictionary } from '../../+layout';
	import Prism from 'prismjs';
	import { keypadDemoSnippet } from './snippets/arduino-snippets';
	import { multiplexingSnippet } from './snippets/multiplexing-code';
	import { base } from '$app/paths';
	import { addressing, sendingKey } from './snippets/addressing';
	import Contact from '$lib/contact.svelte';

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
			<Gallery
				images={[
					`${base}/projects/macrokiki/components.webp`,
					`${base}/projects/macrokiki/macro_KIKI_schematic.webp`
				]}
			/>
			<p>
				{$_('macroKiki.architecture.p2')}
			</p>
			<p>
				{$_('macroKiki.architecture.p3')}
			</p>
			<Gallery images={[`${base}/projects/macrokiki/ui.png`]} />
			<p>
				{$_('macroKiki.architecture.p4')}
			</p>
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
			<p>
				{$_('macroKiki.keypad.p4')}
			</p>
			<div class="code">
				<pre>
{@html Prism.highlight(multiplexingSnippet, Prism.languages['clike'])}
				</pre>
			</div>
			<p>
				{$_('macroKiki.keypad.p5')}
			</p>
			<p>
				{$_('macroKiki.keypad.p6')}
			</p>
			<p>
				{$_('macroKiki.keypad.p7')}
			</p>
			<Gallery
				images={[
					`${base}/projects/macrokiki/assembly1.webp`,
					`${base}/projects/macrokiki/assembly2.webp`,
					`${base}/projects/macrokiki/macro_kiki_opened.webp`
				]}
			/>
			<h2 class="subtitle">{$_('macroKiki.software.title')}</h2>
			<p>
				{$_('macroKiki.software.p1')}
			</p>
			<p>
				{$_('macroKiki.software.p2')}
			</p>
			<p>
				{$_('macroKiki.software.p3')}
			</p>
			<p>
				{$_('macroKiki.software.p4')}
			</p>
			<Gallery images={[`${base}/projects/macrokiki/macro_kiki_data.webp`]} />
			<p>
				{$_('macroKiki.software.p5')}
			</p>
			<div class="code">
				<pre>
{@html Prism.highlight(addressing, Prism.languages['clike'])}
				</pre>
			</div>
			<p>
				{$_('macroKiki.software.p6')}
			</p>
			<div class="code">
				<pre>
{@html Prism.highlight(sendingKey, Prism.languages['clike'])}
				</pre>
			</div>
			<h2 class="subtitle">{$_('macroKiki.modeling.title')}</h2>
			<p>
				{$_('macroKiki.modeling.p1')}
			</p>
			<Gallery
				images={[
					`${base}/projects/macrokiki/kiki_black_desk.webp`,
					`${base}/projects/macrokiki/kiki_pink.webp`
				]}
			/>
			<h2 class="subtitle">{$_('macroKiki.links.title')}</h2>
			<p>
				{$_('macroKiki.links.p1')}
			</p>
			<a href="https://github.com/bodi-cmd/macro-kiki" aria-label="link firmware" class="link">
				https://github.com/bodi-cmd/macro-kiki
			</a>
			<br />
			<a
				href="https://github.com/bodi-cmd/macro-keyboard-ui"
				aria-label="link ui github"
				class="link"
			>
				https://github.com/bodi-cmd/macro-keyboard-ui
			</a>
			<br />
			<a href="https://bodi-cmd.github.io/macro-keyboard-ui" aria-label="link ui" class="link">
				https://bodi-cmd.github.io/macro-keyboard-ui
			</a>
			<br />
		</div>
	</div>
	<Contact />
</div>
