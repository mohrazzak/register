<script lang="ts">
	import family from '$lib/assets/images/logos/family-logo.png?enhanced';
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
		img={family}
		alt="لوغو اسرة النخبة"
		heading="أهلا بك في<br>اسرة النخبة التعليمية"
		subheading="النخبة .. حيث يجتمع الإبداع والتميز والتكامل"
	/>

	<JumpingText heading="يرجى اختيار مركز التسجيل" />

	<SelectableBoxes {boxes} />
</article>
