<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import PageHeading from '../../_components/page-heading.svelte';
	import JumpingText from '../../_components/jumping-text.svelte';
	import SelectableBoxes from '../../_components/selectable-boxes.svelte';
	import Footer from '../../_components/footer/footer.svelte';

	let { data } = $props();

	const institute = data.institute;

	const plugin = Autoplay({
		delay: 2000,
		stopOnInteraction: false,
		playOnInit: true,
		stopOnMouseEnter: true
	});
</script>

<article class="container">
	<PageHeading
		img={institute?.logo}
		alt={institute?.logoAlt}
		heading={institute?.name}
		subheading={institute?.smallDescription}
	/>

	<p
		class="animate-fade-left animate-once whitespace-pre-line text-justify text-base leading-8 tracking-wider text-gray-200"
	>
		{institute?.description}
	</p>

	<div class="my-3 py-3">
		<Carousel.Root
			plugins={[plugin]}
			class="animate-fade animate-duration-1000 animate-once mx-auto w-full shadow-xl"
			onmouseenter={plugin.stop}
			onmouseleave={plugin.reset}
			opts={{ loop: true, direction: 'rtl' }}
		>
			<Carousel.Content>
				{#each institute.images as e}
					<Carousel.Item class="w-full">
						<enhanced:img src={e} alt="ias" loading="lazy" class="h-[300px] object-cover" />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</article>

<JumpingText heading="يرجى اختيار الصف" />

<div class="container mb-5">
	<SelectableBoxes boxes={institute.boxes} />
</div>

<Footer
	reception={institute.reception}
	accounting={institute.accounting}
	address={institute.address}
/>
