<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { locale, _ } from 'svelte-i18n';
	import { get } from 'svelte/store';

	const tabs = [
		{ name: 'navigation.home', url: '/' },
		{ name: 'navigation.blog', url: '/articles' },
		{ name: 'navigation.projects', url: '/projects' }
	];
</script>

<div class="fixed top-0 z-20 block h-14 w-full bg-structure-elements">
	<ul class="flex h-full list-none items-center justify-end pr-3">
		<li class="flex h-full items-center p-4 text-center no-underline">
			<button on:click={() => locale.set('ro')} class:text-primary={$locale === 'ro'}>ro</button> /
			<button on:click={() => locale.set('en')} class:text-primary={$locale === 'en'}>en</button>
		</li>
		{#each tabs as tab}
			<li class="h-full">
				<a
					class="flex h-full cursor-pointer items-center p-4 text-center no-underline hover:bg-gray-700"
					class:bg-gray-800={$page.url.pathname === tab.url}
					href={tab.url}>{$_(tab.name)}</a
				>
			</li>
		{/each}
	</ul>
</div>
