<script lang="ts">
	import '../app.css';
	import Header from './_components/header.svelte';
	import bg from '$lib/assets/images/pano.jpg?enhanced';
	let { children } = $props();
</script>

<enhanced:img
	src={bg}
	alt="Alnukhbeh school"
	class="fixed left-0 top-0 -z-10 h-full w-full object-cover blur-sm brightness-[.3]"
/>
<Header />
<main class="m-auto max-w-lg">
	{@render children()}
</main>
