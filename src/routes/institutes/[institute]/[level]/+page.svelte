<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import MaterialSymbolsEditDocumentOutlineRounded from '~icons/material-symbols/edit-document-outline-rounded';
	import MaterialSymbolsPersonCelebrateRounded from '~icons/material-symbols/person-celebrate-rounded';
	import PageHeading from '../../../_components/page-heading.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import MaterialSymbolsStar from '~icons/material-symbols/star';
	import jalalAddas from '$lib/assets/images/teachers/jalal_addas.jpeg?enhanced';
	import kamelKadi from '$lib/assets/images/teachers/kamel_kadi.jpeg?enhanced';
	import jamalSheikhDiab from '$lib/assets/images/teachers/jamal_sheikh_diab.jpeg?enhanced';

	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	let { data } = $props();

	const institute = data.institute;
	const level = data.level;

	const plugin = Autoplay({
		delay: 2000,
		stopOnInteraction: false,
		playOnInit: true,
		stopOnMouseEnter: true
	});

	const imgs = [
		{ img: jalalAddas, name: 'جلال عدّاس', subject: 'فيزياء' },
		{ img: kamelKadi, name: 'كامل قاضي', subject: 'علوم' },
		{ img: jamalSheikhDiab, name: 'جمال شيخ دياب', subject: 'رياضيات' }
	];

	const subjects = [
		{
			subject: 'الرياضيات',
			teachers: [
				'جمال شيخ دياب',
				'عبد العزيز زكريا',
				'أنس درغام',
				'خالد أبو حسان',
				'وسيم شياح',
				'محمد قريق'
			]
		},
		{
			subject: 'الفيزياء',
			teachers: ['جلال عدّاس', 'أنس نجار', 'يونس دسوقي', 'علاء عرب', 'محمد طباخ']
		},
		{
			subject: 'الكيمياء',
			teachers: ['محمود درويش', 'سامر سليمان', 'محمود حرح']
		},
		{
			subject: 'اللغة العربية',
			teachers: ['رامز السعيد', 'صبحي سواس', 'حسام دويك']
		},
		{
			subject: 'اللغة الإنكليزية',
			teachers: ['حسن نعسان', 'توفيق السيد', 'طارق السيد علي']
		},
		{
			subject: 'اللغة الفرنسية',
			teachers: ['علاء عطار', 'ليون شدياق']
		},
		{
			subject: 'التربية الوطنية',
			teachers: ['سعيد الحسن', 'محمد العيسى']
		},
		{
			subject: 'التربية الدينية',
			teachers: ['إيهاب جمال']
		}
	];
</script>

<article class="container">
	<PageHeading
		img={institute?.logo}
		alt={institute?.logoAlt}
		heading={level?.heading}
		subheading={undefined}
	/>

	<p
		class="mt-4 animate-fade-left whitespace-pre-line text-justify text-base leading-8 text-gray-200 animate-once"
	>
		{institute?.description}
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
				{#each institute.images as e}
					<Carousel.Item>
						<enhanced:img src={e} alt="ias" loading="lazy" />
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>

	<div>
		<div
			class="mt-5 flex items-center justify-center gap-4 rounded-lg bg-secondary bg-opacity-80 p-3 text-2xl font-bold text-primary shadow-lg"
		>
			<MaterialSymbolsEditDocumentOutlineRounded />
			<h3>السبر</h3>
		</div>

		<ul class="my-4 list-disc py-4 text-justify">
			<li class="mb-2 text-base text-gray-200">
				تتضمن النوطة المراجعات الشاملة التي قام مدرسو النخبة بتنظيمها لاهم العناوين والمحاور ، التي
				يجب على الطلاب الإلمام بها جيداً، لكي يضمنوا انطلاقة قوية مع بداية العام الدراسي الجديد .
			</li>
			<li class="mb-2 text-base font-bold text-gray-200">
				تطلب النوطة من مكتبة الغزالي :
				<div>الشهباء الجديدة -نزلة جامع الغزالي – امام جامعة الاتحاد .</div>
			</li>
		</ul>
	</div>

	<div class="my-4 list-disc py-4 text-justify">
		<div
			class="mt-5 flex items-center justify-center gap-4 rounded-lg bg-secondary bg-opacity-80 p-3 text-2xl font-bold text-primary shadow-lg"
		>
			<MaterialSymbolsPersonCelebrateRounded />
			<h3>اعضاء الهيئة التدريسية</h3>
		</div>

		<ul>
			<div class="my-3 py-3">
				<Carousel.Root
					plugins={[plugin]}
					class="mx-auto w-full animate-fade rounded-lg shadow-xl animate-duration-1000 animate-once"
					onmouseenter={plugin.stop}
					onmouseleave={plugin.reset}
					opts={{ loop: true, direction: 'rtl' }}
				>
					<Carousel.Content>
						{#each imgs as e}
							<Carousel.Item class="w-30 relative rounded-lg">
								<enhanced:img
									src={e.img}
									alt="ias"
									loading="lazy"
									class="max-h-full max-w-full rounded-lg"
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
		</ul>

		<Dialog.Root>
			<Dialog.Trigger class="rounded-lg bg-primary px-4 py-2 text-gray-50">عرض الكل</Dialog.Trigger>
			<Dialog.Content class="max-h-[80dvh] overflow-auto rounded-lg">
				<Dialog.Header>
					<Dialog.Title class="animate-fade-down pb-2 text-xl tracking-wide animate-once">
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

	<div>
		<div
			class="mt-5 flex items-center justify-center gap-4 rounded-lg bg-secondary bg-opacity-80 p-3 text-2xl font-bold text-primary shadow-lg"
		>
			<MaterialSymbolsStar />
			<h3>خطة العمل</h3>
		</div>

		<ul class="my-4 list-disc py-4 text-justify">
			<li class="mb-3 text-base text-gray-200">
				<span class="font-bold"> الدورة الصيفية : </span>
				تبدأ الدورة في 1/6/2024 ، وتنتهي في 15/9/2024 .وتشمل مراجعات شاملة للحادي عشر ، وبعض أبحاث البكالوريا
			</li>
			<li class="mb-3 text-base text-gray-200">
				<div>
					<span class="font-bold">الدورة الشتوية :</span>
					تبدأ الدورة في 15/9/2024 ، وتنتهي 15/3/2025 . وتشمل ماتبقى من منهاج البكالوريا .
				</div>
			</li>
			<li class="mb-3 text-base text-gray-200">
				<div>
					<span class="font-bold">دورة المذاكرت والمراجعات :</span>
					تبدأ الدورة في 15/3/2025 ، وتنتهي 28/5/2025 .وتشمل مذاكرات نصفية وشاملة لكافة المواد مع مراجعة
					شاملة لكافة المنهاج وينظم الطالب من خلالها دراسته حتى يوم الامتحان النهائي
				</div>
			</li>
		</ul>
	</div>
</article>
