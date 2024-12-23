<script lang="ts">
	import '../app.css';
	import Header from './_components/header.svelte';
	import bg from '$lib/assets/images/pano.jpg?enhanced';
	let { children } = $props();
</script>

<enhanced:img
	src={bg}
	alt="Hero background"
	class="fixed left-0 top-0 -z-10 h-full w-full object-cover blur-sm brightness-[.3]"
/>
<!-- Main Content -->
<Header />
<main>
	{@render children()}
</main>
