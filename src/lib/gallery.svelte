<script>
	export let images = [];
	let modalOpen = false;
	let current = 0;

	function openModal(i) {
		current = i;
		modalOpen = true;
	}
	function closeModal() {
		modalOpen = false;
	}
	function prev() {
		current = (current - 1 + images.length) % images.length;
	}
	function next() {
		current = (current + 1) % images.length;
	}

	function handleKey(e) {
		if (!modalOpen) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	}
</script>

<div class="center-gallery">
	{#if images.length === 1}
		<img src={images[0]} alt="Gallery image" />
	{:else}
		<div class={images.length > 2 ? 'gallery-grid-2x2' : 'gallery-grid-2x1'}>
			{#each images.slice(0, 3) as img, i}
				<button class="gallery-thumb" on:click={() => openModal(i)} aria-label="Open image">
					<img src={img} alt="Gallery image {i + 1}" />
				</button>
			{/each}
			{#if images.length > 3}
				<button
					class="gallery-thumb gallery-more"
					on:click={() => openModal(3)}
					aria-label="Show more images"
				>
					<span>+{images.length - 3} more</span>
				</button>
			{/if}
		</div>
	{/if}
</div>
{#if modalOpen}
	<div class="gallery-modal" tabindex="0" on:keydown={handleKey}>
		<div class="gallery-modal-backdrop" on:click={closeModal}></div>
		<div class="gallery-modal-content">
			<button class="gallery-modal-close" on:click={closeModal} aria-label="Close">&times;</button>
			{#if images.length > 1}
				<button class="gallery-nav left" on:click={prev} aria-label="Previous image">&#60;</button>
			{/if}
			<img src={images[current]} alt="Gallery image {current + 1}" class="gallery-modal-image" />
			{#if images.length > 1}
				<button class="gallery-nav right" on:click={next} aria-label="Next image">&#62;</button>
			{/if}
		</div>
	</div>
{/if}

<style>
	.center-gallery {
		display: flex;
		align-items: center;
		justify-content: center;
        margin-bottom: 2rem;
	}
	.gallery-grid-2x2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 1rem;
		width: 100%;
		max-width: 720px;
		margin: 1rem 0;
	}
	.gallery-grid-2x1 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		width: 100%;
		max-width: 720px;
		margin: 1rem 0;
	}
	.gallery-thumb {
		border: none;
		background: none;
		padding: 0;
		cursor: pointer;
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.2s;
	}
	.gallery-thumb img {
		width: 100%;
		height: 180px;
		object-fit: cover;
		display: block;
		border-radius: 0.5rem;
		background: #222;
		transition: transform 0.2s;
        margin: 0;
	}
	.gallery-more {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #222;
		color: #fff;
		font-size: 1.2rem;
		font-weight: 600;
		border-radius: 0.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition:
			background 0.2s,
			color 0.2s;
		width: 100%;
		height: 180px;
		min-width: 0;
		min-height: 0;
		padding: 0;
	}
	.gallery-more span {
		width: 100%;
		text-align: center;
		pointer-events: none;
	}
	.gallery-more:hover {
		background: var(--primary, #ff6a00);
		color: #fff;
	}
	.gallery-thumb:hover img {
		transform: scale(1.05);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
	}
	.gallery-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.5);
		animation: fadeIn 0.2s;
	}
	.gallery-modal-backdrop {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: transparent;
		cursor: pointer;
	}
	.gallery-modal-content {
		position: relative;
		display: flex;
		align-items: center;
		min-width: 320px;
		max-width: 90vw;
		height: 90vh;
	}
	.gallery-modal-image {
		width: 100%;
		max-height: 80vh;
		border-radius: 0.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		object-fit: contain;
		display: block;
	}
	.gallery-modal-close {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: none;
		border: none;
		color: #fff;
		font-size: 3rem;
		cursor: pointer;
		z-index: 2;
		transition: color 0.2s;
	}
	.gallery-modal-close:hover {
		color: var(--primary, #ff6a00);
	}
	.gallery-nav {
		background: none;
		border: none;
		color: var(--primary, #ff6a00);
		font-size: 2.5rem;
		cursor: pointer;
		transition: color 0.2s;
		z-index: 2;
		position: absolute;
	}
	.gallery-nav.left {
		left: 16px;
	}
	.gallery-nav.right {
		right: 16px;
	}
	.gallery-nav:hover {
		color: #fff;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
