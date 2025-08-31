<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import { get } from 'svelte/store';
	import { _ } from 'svelte-i18n';
</script>

<div class="relative flex h-screen w-full items-center">
	<img
		alt="circuit banner"
		src="./img_circuit.jpg"
		class="absolute top-0 z-[-1] h-screen w-full object-cover brightness-[0.1]"
	/>
	<div class="hero-text z-10">
		<h2 class="text-3xl">{$_('greetings.hello')}</h2>
		<h1 class="text-5xl font-semibold text-primary">{$_('name').toUpperCase()}</h1>
		<h2 class="mt-16 text-xl md:text-3xl">
			{$_('profession.main')} & <br />
			{$_('profession.secondary')}
		</h2>
	</div>
	<div class="hero-shape-section">
		<svg
			class="hero-shape"
			viewBox="0 0 1920 1080"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:svg="http://www.w3.org/2000/svg"
		>
			<g id="layer1">
				<path
					d="m -1.8926278,834.64887 c 0,0 687.0238978,49.20832 1018.2337278,-75.70512 331.2099,-124.91343 902.7835,-98.41664 902.7835,-98.41664 V 1080.6905 H -1.8926278 Z"
					id="path1"
				/>
			</g>
		</svg>
		<div class="hero-actions">
			<a
				target="_blank"
				href="/Bogdan Barbu CV 2025.pdf"
				class="cursor-pointer rounded-xl border-2 border-solid border-primary p-2 font-semibold text-primary hover:shadow-xl"
				>{$_('resume.get')}</a
			>
			<a aria-label="github" target="_blank" href="https://github.com/bodi-cmd">
				<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
					/></svg
				>
				<span class="sr-only">{$_('links.github')}</span>
			</a>
			<a aria-label="linkedin" target="_blank" href="https://www.linkedin.com/in/bogdanbarbu1/">
				<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
					<path
						d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
					/></svg
				>
				<span class="sr-only">{$_('links.linkedin')}</span>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.hero-text {
		min-width: 320px;
		margin-left: clamp(24px, calc((100vw - 400px) / 2), 200px);
		margin-right: 64px;
	}
	.hero-shape-section {
		.hero-shape {
			width: clamp(1200px, 110vw, 110vw);
			position: absolute;
			z-index: 1;
			bottom: 0;
			right: -10px;
			fill: var(--color-secondary);
		}
		position: absolute;
		bottom: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;

		.hero-actions {
			gap: 16px;
			min-width: 320px;
			margin-left: clamp(24px, calc((100vw - 400px) / 2), 200px);
			margin-right: 64px;
			height: 200px;
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: start;
			z-index: 2;
			bottom: 0;
			left: 0;
		}
	}
	.logo {
		width: 44px;
		height: 44px;
		fill: var(--primary);
	}
</style>
