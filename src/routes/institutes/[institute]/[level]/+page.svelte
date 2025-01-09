<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import MaterialSymbolsEditDocumentOutlineRounded from '~icons/material-symbols/edit-document-outline-rounded';
	import MaterialSymbolsPersonCelebrateRounded from '~icons/material-symbols/person-celebrate-rounded';
	import PageHeading from '../../../_components/page-heading.svelte';
	import MaterialSymbolsStar from '~icons/material-symbols/star';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Footer from '../../../_components/footer/footer.svelte';

	interface SubjectGroup {
		subject: string;
		teachers: string[];
	}

	let { data } = $props();

	const { institute, level } = data;

	const autoplayPlugin = Autoplay({
		delay: 1600,
		stopOnInteraction: false,
		playOnInit: true,
		stopOnMouseEnter: true
	});

	const autoplayPlugin2 = Autoplay({
		delay: 2100,
		stopOnInteraction: false,
		playOnInit: true,
		stopOnMouseEnter: true
	});

	const subjects: SubjectGroup[] | undefined =
		level.teachers &&
		Object.entries(
			level.teachers.reduce<Record<string, string[]>>((acc, { name, subject }) => {
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
		class="animate-fade-left animate-once my-4 whitespace-pre-line text-justify text-base leading-8 tracking-wider text-gray-200"
	>
		{level.description}
	</p>

	<div>
		<Carousel.Root
			plugins={[autoplayPlugin]}
			class="animate-fade animate-duration-1000 animate-once mx-auto w-full rounded-lg shadow-xl"
			onmouseenter={autoplayPlugin.stop}
			onmouseleave={autoplayPlugin.reset}
			opts={{ loop: true, direction: 'rtl' }}
		>
			<Carousel.Content>
				{#each level.imgs as e}
					<Carousel.Item>
						<enhanced:img
							src={e}
							alt={'slider of school'}
							loading="lazy"
							class="h-[400px] object-cover"
						/>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>

	{#if level.test}
		<div class="mb-4 mt-8">
			<div
				class="text-primary my-2 flex items-center justify-center gap-4 rounded-lg bg-[#f8d8ee] p-3 text-2xl font-bold shadow-lg"
			>
				<MaterialSymbolsEditDocumentOutlineRounded />
				<h3>السبر</h3>
			</div>

			<ul class="my-2 list-disc py-2 text-justify">
				{#each level.test as t}
					<li class="mb-3 text-base leading-loose text-gray-200" class:font-bold={t.bold}>
						{@html t.text}
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if level.teachers?.length && subjects}
		<div class="my-8 list-disc text-justify">
			<div
				class="text-primary flex items-center justify-center gap-4 rounded-lg bg-[#f8d8ee] p-3 text-2xl font-bold shadow-lg"
			>
				<MaterialSymbolsPersonCelebrateRounded />
				<h3>اعضاء الهيئة التدريسية</h3>
			</div>

			<div class="my-4 py-4">
				<Carousel.Root
					plugins={[autoplayPlugin2]}
					class="animate-fade animate-duration-1000 animate-once mx-auto w-full rounded-lg shadow-xl"
					onmouseenter={autoplayPlugin.stop}
					onmouseleave={autoplayPlugin.reset}
					opts={{ loop: true, direction: 'rtl' }}
				>
					<Carousel.Content>
						{#each level.teachers as e}
							<Carousel.Item class="w-30 relative rounded-lg">
								<enhanced:img
									src={e.img}
									alt="ias"
									loading="lazy"
									class="h-full max-h-full w-full rounded-lg bg-gray-200 object-cover"
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
				<Dialog.Trigger class="bg-secondary rounded-lg px-4 py-2 font-bold  text-gray-50"
					>عرض الكل</Dialog.Trigger
				>
				<Dialog.Content class="max-h-[80dvh] max-w-xl overflow-auto rounded-lg">
					<Dialog.Header>
						<Dialog.Title
							class="animate-fade-down animate-once pb-2 text-center text-xl tracking-wide"
						>
							<h3 class="mb-2">اعضاء الهيئة التدريسية</h3>
							<div class="bg-primary rounded-sm px-2 py-2 font-bold text-gray-50">
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
										<Separator class="bg-secondary mb-2 pb-[0.1rem]" />

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
	{/if}

	<div class="mb-4 mt-8">
		<div
			class="text-primary flex items-center justify-center gap-4 rounded-lg bg-[#f8d8ee] p-3 text-2xl font-bold shadow-lg"
		>
			<MaterialSymbolsStar />
			<h3>خطة العمل</h3>
		</div>

		<ul class="list-disc py-2 text-justify">
			{#each level.workingPlans as wk}
				<li class="py-2 text-base leading-loose tracking-wider text-gray-200">
					{#if wk.title}
						<div class="border-secondary mb-2 w-fit border-b-2 py-1 text-center font-extrabold">
							{wk.title}
						</div>
					{/if}
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
