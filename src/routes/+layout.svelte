<script lang="ts">
	import '../app.css';
	import Header from './_components/header.svelte';
	import SvgSpinnersRingResize from '~icons/svg-spinners/ring-resize';
	import { navigating } from '$app/stores';
	let { children } = $props();
</script>

{#if $navigating}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
		<div class="flex h-60 w-72 items-center justify-center rounded-lg shadow-lg">
			<SvgSpinnersRingResize style="color:white;" width="48px" height="48px" />
		</div>
	</div>
{/if}

<img
	src={'https://res.cloudinary.com/dgive1g2g/image/upload/w_400,q_auto:eco/v1737824172/register/images/gxfzqi2bc83wtchibubz.jpg'}
	alt="Alnukhbeh school"
	class="fixed left-0 top-0 -z-10 h-full w-full object-cover blur-sm brightness-[.3]"
/>
<Header />
<main class="m-auto max-w-lg pb-4">
	{@render children()}
</main>
