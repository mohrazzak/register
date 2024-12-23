<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import MaterialSymbolsEditDocumentOutlineRounded from '~icons/material-symbols/edit-document-outline-rounded';
	import MaterialSymbolsPersonCelebrateRounded from '~icons/material-symbols/person-celebrate-rounded';
	import PageHeading from '../../../_components/page-heading.svelte';
	import MaterialSymbolsStar from '~icons/material-symbols/star';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Footer from '../../../_components/footer.svelte';

	interface SubjectGroup {
		subject: string;
		teachers: string[];
	}

	let { data } = $props();

	const { institute, level, teachers, workingPlans, test } = data;

	const autoplayPlugin = Autoplay({
		delay: 50000,
		stopOnInteraction: false,
		playOnInit: true,
		stopOnMouseEnter: true
	});

	const subjects: SubjectGroup[] = Object.entries(
		teachers.reduce<Record<string, string[]>>((acc, { name, subject }) => {
			if (!acc[subject]) acc[subject] = [];
			acc[subject].push(name);
			return acc;
		}, {})
	).map(([subject, teacherNames]) => ({
		subject,
		teachers: teacherNames
	}));
</script>

<article class="container">
	<PageHeading
		img={institute?.logo}
		alt={institute?.logoAlt}
		heading={level?.heading}
		subheading={undefined}
	/>

	<p
		class="my-4 animate-fade-left whitespace-pre-line text-justify text-base leading-8 text-gray-200 animate-once"
	>
		{institute?.description}
	</p>

	<div class="my-4">
		<Carousel.Root
			plugins={[autoplayPlugin]}
			class="mx-auto w-full animate-fade justify-center shadow-xl animate-duration-1000 animate-once"
			onmouseenter={autoplayPlugin.stop}
			onmouseleave={autoplayPlugin.reset}
			opts={{ loop: true, direction: 'rtl' }}
		>
			<Carousel.Content>
				{#each institute.images as e}
					<Carousel.Item>
						<enhanced:img src={e} alt="ias" loading="lazy" class="w-full" />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>

	<div class="my-4 pt-4">
		<div
			class="my-2 flex items-center justify-center gap-4 rounded-lg bg-[#f8d8ee] p-3 text-2xl font-bold text-primary shadow-lg"
		>
			<MaterialSymbolsEditDocumentOutlineRounded />
			<h3>السبر</h3>
		</div>

		<ul class="my-2 list-disc py-2 text-justify">
			{#each test as t}
				<li class="mb-3 text-base leading-loose text-gray-200" class:font-bold={t.bold}>
					{@html t.text}
				</li>
			{/each}
		</ul>
	</div>

	<div class="my-8 list-disc text-justify">
		<div
			class="flex items-center justify-center gap-4 rounded-lg bg-[#f8d8ee] p-3 text-2xl font-bold text-primary shadow-lg"
		>
			<MaterialSymbolsPersonCelebrateRounded />
			<h3>اعضاء الهيئة التدريسية</h3>
		</div>

		<div class="my-4 py-4">
			<Carousel.Root
				plugins={[autoplayPlugin]}
				class="mx-auto w-full animate-fade rounded-lg shadow-xl animate-duration-1000 animate-once"
				onmouseenter={autoplayPlugin.stop}
				onmouseleave={autoplayPlugin.reset}
				opts={{ loop: true, direction: 'rtl' }}
			>
				<Carousel.Content>
					{#each teachers as e}
						<Carousel.Item class="w-30 relative rounded-lg">
							<enhanced:img
								src={e.img}
								alt="ias"
								loading="lazy"
								class="max-h-full w-full rounded-lg"
							/>
							<div
								class="absolute bottom-0 left-0 flex h-24 w-full flex-wrap items-center justify-center rounded-sm bg-stone-800 bg-opacity-80 p-2 text-center text-2xl font-bold text-gray-50 shadow-lg"
							>
								<div class="mb-1 w-full">{e.name}</div>
								<div>{e.subject}</div>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
			</Carousel.Root>
		</div>

		<Dialog.Root>
			<Dialog.Trigger class="rounded-lg bg-[#8ba20f] px-4 py-2 font-bold  text-gray-50"
				>عرض الكل</Dialog.Trigger
			>
			<Dialog.Content class="max-h-[80dvh] max-w-xl overflow-auto rounded-lg">
				<Dialog.Header>
					<Dialog.Title
						class="animate-fade-down pb-2 text-center text-xl tracking-wide animate-once"
					>
						<h3 class="mb-2">اعضاء الهيئة التدريسية</h3>
						<div class="rounded-sm bg-primary px-2 py-2 font-bold text-gray-50">
							{institute.name} - {level.heading}
						</div>
					</Dialog.Title>
					<Dialog.Description>
						<ul>
							{#each subjects as subject, i}
								<li class="animate-fade-left animate-once" style="animation-delay: {i * 150}ms;">
									<h5
										class="rounded-sm bg-opacity-90 py-1 text-justify text-lg font-bold text-gray-800"
									>
										{subject.subject}
									</h5>
									<Separator class="mb-2 bg-secondary pb-[0.1rem]" />

									<div class="flex flex-wrap gap-2">
										{#if subject.teachers.length > 0}
											<div class="py-2 text-justify font-bold">
												{subject.teachers.join(' - ')}
											</div>
										{/if}
									</div>
								</li>
							{/each}
						</ul>
					</Dialog.Description>
				</Dialog.Header>
			</Dialog.Content>
		</Dialog.Root>
	</div>

	<div class="my-8">
		<div
			class="flex items-center justify-center gap-4 rounded-lg bg-[#f8d8ee] p-3 text-2xl font-bold text-primary shadow-lg"
		>
			<MaterialSymbolsStar />
			<h3>خطة العمل</h3>
		</div>

		<ul class="my-2 list-disc py-2 text-justify">
			{#each workingPlans as wk}
				<li class="my-2 mb-2 text-base leading-loose text-gray-200">
					<span class="font-bold">{wk.title} </span>
					{wk.description}
				</li>
			{/each}
		</ul>
	</div>
</article>

<Footer
	reception={institute.reception}
	accounting={institute.accounting}
	address={institute.address}
/>
