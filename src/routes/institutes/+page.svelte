<script lang="ts">
	import schools from '$lib/assets/images/family-logo.png?enhanced';
	import awael from '$lib/assets/images/nukhbeh-awael.png?enhanced';
	import inst from '$lib/assets/images/nukhbeh-inst.png?enhanced';
	import shahba from '$lib/assets/images/nukhbeh-shahba.png?enhanced';
	import shams from '$lib/assets/images/nukhbeh-shams.png?enhanced';
	import { institutes } from '$lib/data';
	import type { Box } from '$lib/interface/box.interface';
	import JumpingText from '../_components/jumping-text.svelte';
	import PageHeading from '../_components/page-heading.svelte';
	import SelectableBoxes from '../_components/selectable-boxes.svelte';

	const newBoxes: Box[] = institutes
		.filter((l) => l.slug !== '/institutes/school')
		.map((l) => ({
			delay: 0,
			heading: l.name,
			href: l.slug,
			alt: l.logoAlt,
			img: l.logo
		}));
</script>

<article class="container">
	<PageHeading
		img={schools}
		alt="لوغو أسرة النخبة التعليمية"
		heading="أهلا بك في معاهد النخبة "
		subheading="النخبة .. حيث يجتمع الإبداع والتميز والتكامل"
	/>

	<JumpingText heading="يرجى اختيار المعهد" />

	<SelectableBoxes boxes={newBoxes} />
</article>
