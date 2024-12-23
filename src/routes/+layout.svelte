<script lang="ts">
	import '../app.css';
	import Header from './_components/header.svelte';
	import bg from '$lib/assets/images/pano.jpg?enhanced';
	let { children } = $props();
</script>

<!-- Main Content -->
<Header />
<main>
	{@render children()}
</main>
