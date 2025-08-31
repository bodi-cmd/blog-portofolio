<script>
	import '../app.css';
	import Header from '$lib/header.svelte';
	import ro from '../i18n/ro.json';
	import en from '../i18n/en.json';
	import { _setDictionary } from './+layout';
	import { base } from '$app/paths';

	let { children } = $props();

	import { init, getLocaleFromNavigator, locale, dictionary } from 'svelte-i18n';
	import { onMount } from 'svelte';
	const lang = getLocaleFromNavigator();
	init({
		fallbackLocale: 'en',
		initialLocale: lang ? lang.split('-')[0] : 'en'
	});
	_setDictionary({}, {});
</script>

<svelte:head>
	<link href="{base}/prism/prism.css" rel="stylesheet" />
	<!-- <script src="/prism/prism.js"></script> -->
</svelte:head>

<Header />
{@render children()}
