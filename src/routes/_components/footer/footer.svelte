<script>
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import MaterialSymbolsLocationOn from '~icons/material-symbols/location-on';
	import MaterialSymbolsPhoneInTalkOutline from '~icons/material-symbols/phone-in-talk-outline';

	let { address, reception, accounting } = $props();
</script>

<div class="container my-8 flex flex-wrap items-center justify-center gap-6">
	<Separator class="m-auto h-0.5 max-w-md bg-primary" />
	<p class=" flex items-center gap-3 text-sm text-gray-200">
		<MaterialSymbolsLocationOn class="text-gray-200" />
		{address}
	</p>

	<p class="flex items-center gap-3 text-sm text-gray-200">
		<MaterialSymbolsPhoneInTalkOutline class="text-gray-200" />
		الاستقبال: <a class="underline" href="tel://{reception}"> {reception} </a>
	</p>

	{#if accounting}
		<p class="flex items-center gap-3 text-sm text-gray-200">
			<MaterialSymbolsPhoneInTalkOutline class="text-gray-200" />
			المحاسبة: <a class="underline" href="tel://{accounting}"> {accounting} </a>
		</p>
	{/if}
</div>
