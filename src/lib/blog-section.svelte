<script>
	import { onMount } from 'svelte';
	import { _, locale } from 'svelte-i18n';
	import ProjectCard from './project-card.svelte';
	import projectsRo from '../i18n/articles-showcase.ro.json';
	import projectsEn from '../i18n/articles-showcase.en.json';
	let projects = [];
	locale.subscribe((lang) => {
		projects = lang === 'ro' ? projectsRo : projectsEn;
	});
</script>

<div class="section">
	<h1 class="title">{$_('projects.title')}</h1>
	{#each projects.filter(({ display }) => display) as project, i}
		<ProjectCard {project} invertFlex={i % 2} />
	{/each}
</div>
