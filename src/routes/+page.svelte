<script lang="ts">
	// import family from '$lib/assets/images/logos/family-logo.png?enhanced';
	import type { Box } from '$lib/interface/box.interface';
	import JumpingText from './_components/jumping-text.svelte';
	import PageHeading from './_components/page-heading.svelte';
	import SelectableBoxes from './_components/selectable-boxes.svelte';

	const boxes: Box[] = [
		{ heading: ' مدارس نخبة حلب الخاصة', href: '/institutes/school' },
		{ heading: 'معاهد النخبة', href: '/institutes' }
	];
</script>

<article class="container">
	<PageHeading
		img={'https://res.cloudinary.com/dgive1g2g/image/upload/w_500,q_auto:low/v1737824394/register/images/logos/djqrffse5gmgknt0fay5.png'}
		alt="لوغو اسرة النخبة"
		heading="أهلا بك في<br>أسرة النخبة التعليمية"
		subheading="النخبة .. حيث يجتمع الإبداع والتميز والتكامل"
	/>

	<JumpingText heading="يرجى اختيار مركز التسجيل" />

	<SelectableBoxes {boxes} />
</article>
