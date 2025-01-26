<script lang="ts">
	import { institutes } from '$lib/data';
	import JumpingText from '../_components/jumping-text.svelte';
	import PageHeading from '../_components/page-heading.svelte';
	import SelectableBoxes from '../_components/selectable-boxes.svelte';

	const newBoxes = institutes
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
		img={'https://res.cloudinary.com/dgive1g2g/image/upload/w_200,q_auto:eco/v1737824394/register/images/logos/djqrffse5gmgknt0fay5.png'}
		alt="لوغو أسرة النخبة التعليمية"
		heading="أهلا بك في معاهد النخبة "
		subheading="النخبة .. حيث يجتمع الإبداع والتميز والتكامل"
	/>

	<JumpingText heading="يرجى اختيار المعهد" />

	<SelectableBoxes boxes={newBoxes} />
</article>
