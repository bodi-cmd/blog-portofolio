<script>
	export const prerender = true;

	import '../app.css';
	import Header from '$lib/header.svelte';
	import ro from '../i18n/ro.json';
	import en from '../i18n/en.json';
	let { children } = $props();

	import { init, getLocaleFromNavigator, locale, dictionary } from 'svelte-i18n';
	import { onMount } from 'svelte';
	const lang = getLocaleFromNavigator();
	init({
		fallbackLocale: 'en',
		initialLocale: lang ? lang.split('-')[0] : 'en'
	});
	dictionary.set({ ro, en });
</script>

<Header />
{@render children()}
