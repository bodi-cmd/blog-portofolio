<script>
	import ProjectCard from '$lib/project-card.svelte';
	import { onMount } from 'svelte';
	let projects = [{}];

	onMount(async () => {
		const res = await fetch('/projectsdata.en.json');
		projects = await res.json();
	});
</script>

<div class="page">
	<div class="section">
		<h1 class="title text-primary">Projects Archive</h1>
        {#each projects as project, i}
		<ProjectCard {project}/>
	{/each}
	</div>
</div>

<style lang="scss">
	.page {
		padding-top: 64px;
	}
</style>
