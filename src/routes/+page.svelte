<script lang="ts">
	import schools from '$lib/assets/images/logos/nukhbeh-schools.png?enhanced';
	import type { Box } from '$lib/interface/box.interface';
	import JumpingText from './_components/jumping-text.svelte';
	import PageHeading from './_components/page-heading.svelte';
	import SelectableBoxes from './_components/selectable-boxes.svelte';

	const boxes: Box[] = [
		{ heading: 'مدارس النخبة', href: '/institutes/school' },
		{ heading: 'معاهد النخبة', href: '/institutes' }
	];
</script>

<article class="container">
	<PageHeading
		img={schools}
		alt="لوغو مدارس نخبة حلب الخاصة"
		heading="أهلا بك في<br>مدارس نخبة حلب الخاصة"
		subheading="النخبة .. حيث يجتمع الإبداع والتميز والتكامل"
	/>

	<JumpingText heading="يرجى اختيار مركز التسجيل" />

	<SelectableBoxes {boxes} />
</article>
