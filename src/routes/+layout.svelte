<script lang="ts">
	import '../app.css';
	import Header from './_components/header.svelte';
	let { children } = $props();
</script>

<Header />
<main class="mx-auto mb-12 min-h-dvh max-w-xl text-xl">
	{@render children()}
</main>
