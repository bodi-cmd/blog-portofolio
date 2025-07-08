<script>
	import { onMount } from 'svelte';
	import { _, locale } from 'svelte-i18n';
	import ProjectCard from '../../lib/project-card.svelte';
	import projectsRo from '../../i18n/articles-showcase.ro.json';
	import projectsEn from '../../i18n/articles-showcase.en.json';
	let projects = [];
	locale.subscribe((lang) => {
		projects = lang === 'ro' ? projectsRo : projectsEn;
	});
</script>

<div class="page">
	<div class="section">
		<h1 class="title text-primary">{$_('projects.title')}</h1>
		{#each projects as project, i}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style lang="scss">
	.page {
		padding-top: 64px;
	}
</style>
