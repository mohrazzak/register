<script lang="ts">
	import { navigating } from '$app/stores';
	import type { Box } from '$lib/interface/box.interface';

	let { boxes }: { boxes: Box[] } = $props();
</script>

{#each boxes as box, i}
	<div class="my-4">
		<div class="flex flex-wrap gap-5">
			<a
				href={box.href}
				class="transition-allanimate-normal h-32 w-full animate-fade-down cursor-pointer rounded-xl bg-[#d6c8d8] p-8 shadow-lg animate-ease-in-out hover:translate-y-[-5px] hover:bg-[#bf82bf] hover:shadow-2xl"
				style="animation-delay: {i * 300}ms;"
			>
				{#if box.img}
					<div class="flex h-full w-full items-center justify-center p-5">
						<div class="flex h-28 w-20 flex-col items-center justify-center text-center">
							<img src={box.img} alt={'رابط للمركز'} class="h-28 max-h-full w-full max-w-full" />
						</div>
					</div>
				{:else}
					<div class="flex h-full flex-col items-center justify-center text-center">
						<h3 class="text-2xl font-bold text-primary">{box.heading}</h3>
					</div>
				{/if}
			</a>
		</div>
	</div>
{/each}
