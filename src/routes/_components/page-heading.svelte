<script lang="ts">
	import type { Picture } from '$lib/interface/picture.interface';

	let {
		img,
		alt,
		heading,
		subheading
	}: {
		subheading: string | undefined;
		img: Picture | undefined;
		heading: string | undefined;
		alt: string | undefined;
	} = $props();
</script>

{#if img}
	<div
		class="mx-auto mb-6 h-auto w-2/3 max-w-48 animate-fade-down animate-normal animate-ease-in-out"
	>
		<enhanced:img src={img} {alt} />
	</div>
{/if}
<section class="animate-fade text-center animate-normal animate-ease-in-out">
	<h2
		class="animate-fade whitespace-pre-wrap rounded-lg bg-primary p-3 text-2xl font-bold leading-relaxed tracking-wide text-gray-200 animate-normal animate-ease-in-out
	"
	>
		{@html heading}
	</h2>
	{#if subheading}
		<h5 class="mt-4 animate-fade text-base text-secondary animate-normal animate-ease-in-out">
			{subheading}
		</h5>
	{/if}
</section>
