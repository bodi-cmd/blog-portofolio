<script>
	import Gallery from '$lib/gallery.svelte';
	import { _, locale } from 'svelte-i18n';
	import ro from './i18n/ro.json';
	import en from './i18n/en.json';
	import { _setDictionary } from '../../+layout';
	import { base } from '$app/paths';

	let projects = [];
	locale.subscribe((lang) => {
		projects = lang === 'ro' ? ro : en;
		_setDictionary(ro, en);
	});
</script>

<div class="page">
	<div class="section blog-section">
		<h1 class="title">{$_('healthyc.title')}</h1>
		<h2 class="subtitle">{$_('healthyc.subtitle')}</h2>
		<div class="content">
			<p>{$_('healthyc.intro1')}</p>
			<p>{$_('healthyc.intro2')}</p>
			<p>{$_('healthyc.intro3')}</p>
			<table>
				<tbody>
					<tr>
						<th>{$_('healthyc.started')}</th>
						<td>{$_('healthyc.started_date')}</td>
					</tr>
					<tr>
						<th>{$_('healthyc.ended')}</th>
						<td>{$_('healthyc.ended_date')}</td>
					</tr>
					<tr>
						<th>{$_('healthyc.costs')}</th>
						<td>{$_('healthyc.costs_value')}</td>
					</tr>
					<tr>
						<th>{$_('healthyc.difficulty')}</th>
						<td>{$_('healthyc.difficulty_value')}</td>
					</tr>
					<tr>
						<th>{$_('healthyc.components')}</th>
						<td>
							<span>{$_('healthyc.component_arduino')}</span><br />
							<span>{$_('healthyc.component_rtc')}</span><br />
							<span>{$_('healthyc.component_mpu')}</span><br />
							<span>{$_('healthyc.component_ir')}</span><br />
							<span>{$_('healthyc.component_oled')}</span><br />
							<span>{$_('healthyc.component_battery')}</span><br />
							<span>{$_('healthyc.component_usb')}</span><br />
							<span>{$_('healthyc.component_switches')}</span><br />
							<span>{$_('healthyc.component_enclosure')}</span>
						</td>
					</tr>
				</tbody>
			</table>

			<h2 class="subtitle">{$_('healthyc.casing_title')}</h2>
			<p>{$_('healthyc.casing_text')}</p>
			<Gallery images={[`${base}/projects/hltc/creo1.png`, `${base}/projects/hltc/creo2.png`]} />

			<h2 class="subtitle">{$_('healthyc.powering_title')}</h2>
			<p>{$_('healthyc.powering_text')}</p>
			<Gallery images={[`${base}/projects/hltc/pic6.jpeg`]} />

			<h2 class="subtitle">{$_('healthyc.motherboard_title')}</h2>
			<p>{$_('healthyc.motherboard_text')}</p>
			<Gallery
				images={[
					`${base}/projects/hltc/pic2.jpeg`,
					`${base}/projects/hltc/pic4.jpeg`,
					`${base}/projects/hltc/pic5.jpeg`
				]}
			/>
			<h2 class="subtitle">{$_('healthyc.assembling_title')}</h2>
			<p>{$_('healthyc.assembling_text')}</p>
			<Gallery images={[`${base}/projects/hltc/pic1.jpeg`, `${base}/projects/hltc/pic3.jpeg`]} />
		</div>
	</div>
</div>
