<script>
	let { Icon, isLink = false, text, title } = $props();
</script>

<p class="justify-right mt-4 flex items-center gap-3 text-sm text-gray-200">
	<Icon class="text-gray-200" />
	{title}: {#if isLink}
		<a class="underline" href="tel://{text}"> {text} </a>
	{:else}
		{text}
	{/if}
</p>
