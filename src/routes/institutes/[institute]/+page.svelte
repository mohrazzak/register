<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import PageHeading from '../../_components/page-heading.svelte';
	import JumpingText from '../../_components/jumping-text.svelte';
	import SelectableBoxes from '../../_components/selectable-boxes.svelte';
	import Footer from '../../_components/footer/footer.svelte';

	let { data } = $props();

	const pageData = data.institute;

	const plugin = Autoplay({
		delay: 2000,
		stopOnInteraction: false,
		playOnInit: true,
		stopOnMouseEnter: true
	});
</script>

<article class="container">
	<PageHeading
		img={pageData?.logo}
		alt={pageData?.logoAlt}
		heading={pageData?.name}
		subheading={pageData?.smallDescription}
	/>

	<p
		class="animate-fade-left whitespace-pre-line text-justify text-base leading-8 text-gray-200 animate-once"
	>
		{pageData?.description}
	</p>

	<div class="my-3 py-3">
		<Carousel.Root
			plugins={[plugin]}
			class="mx-auto w-full animate-fade shadow-xl animate-duration-1000 animate-once"
			onmouseenter={plugin.stop}
			onmouseleave={plugin.reset}
			opts={{ loop: true, direction: 'rtl' }}
		>
			<Carousel.Content>
				{#each pageData.images as e}
					<Carousel.Item>
						<enhanced:img src={e} alt="ias" loading="lazy" />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</article>

<JumpingText heading="يرجى اختيار الصف" />

<div class="container mb-5">
	<SelectableBoxes boxes={pageData.boxes} />
</div>

<!-- <div class="container my-10">
	<PageHeading
		heading="تواصل معنا"
		subheading="موجودون دوما لمساعدتك"
		img={undefined}
		alt={undefined}
	/>

	<div class="my-6 py-2 text-justify text-gray-300">
		<p>للتواصل مع قسم الإستقبال:</p>
		<span class="px-2">
			<a href="tel://0989557701" class="underline">0989557701</a>
		</span>

		<p class="mt-4">للتواصل مع قسم المحاسبة:</p>
		<span class="px-2">
			<a href="tel://0989557701" class="underline">0989557738</a>
		</span>

		<p class="mt-4">العنوان:</p>
		<span> حلب - الشهباء الجديدة - جانب دوار الغزالي</span>
	</div>
</div> -->

<Footer
	reception={pageData.reception}
	accounting={pageData.accounting}
	address={pageData.address}
/>
