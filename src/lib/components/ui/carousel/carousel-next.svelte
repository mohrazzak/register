<script lang="ts">
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import type { WithoutChildren } from 'bits-ui';
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';
	import { Button, type Props } from '$lib/components/ui/button/index.js';

	let {
		ref = $bindable(null),
		class: className,
		variant = 'outline',
		size = 'icon',
		...restProps
	}: WithoutChildren<Props> = $props();

	const emblaCtx = getEmblaContext('<Carousel.Next/>');
</script>

<Button
	{variant}
	{size}
	class={cn(
		'absolute size-4 touch-manipulation rounded-full',
		emblaCtx.orientation === 'vertical' ? '-right-12 top-0' : '-bottom-7 left-1/2 rotate-180',
		className
	)}
	disabled={!emblaCtx.canScrollNext}
	onclick={emblaCtx.scrollNext}
	onkeydown={emblaCtx.handleKeyDown}
	bind:ref
	{...restProps}
>
	<ArrowRight class="size-4" />
	<span class="sr-only">Next slide</span>
</Button>
