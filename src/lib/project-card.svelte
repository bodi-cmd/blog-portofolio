<script>
	export let project;
	export let invertFlex = false;
	import { _, locale, addMessages } from 'svelte-i18n';
</script>

<div class="flex {invertFlex ? 'zig-zag' : ''} mb-[10rem]">
	<div class="content flex justify-center">
		<img src={project.image} alt={project.title} />
	</div>
	<div class="content">
		<h2 class="mb-[1.5rem]">{project.title}</h2>
		<p>{@html project.summary}</p>
		<div class="date">{$_('projects.finished')} {project.date},</div>
		<div class="bullets-row">
			<div class="date">{$_('projects.used')}</div>
			{#each project.tags as tag}
				<div class="bullet text-primary">{tag}</div>
			{/each}
		</div>
	</div>
</div>
