<script>
	import MaterialSymbolsLocationOn from '~icons/material-symbols/location-on';
	import MaterialSymbolsPhoneInTalkOutline from '~icons/material-symbols/phone-in-talk-outline';

	let { address, reception, accounting } = $props();
</script>

<div class="container my-8">
	<p class="justify-right flex items-center gap-3 text-sm text-gray-200">
		<MaterialSymbolsLocationOn class="text-gray-200" />
		{address}
	</p>

	<p class="justify-right mt-4 flex items-center gap-3 text-sm text-gray-200">
		<MaterialSymbolsPhoneInTalkOutline class="text-gray-200" />
		الاستقبال: <a class="underline" href="tel://{reception}"> {reception} </a>
	</p>

	<p class="justify-right mt-4 flex items-center gap-3 text-sm text-gray-200">
		<MaterialSymbolsPhoneInTalkOutline class="text-gray-200" />
		المحاسبة: <a class="underline" href="tel://{accounting}"> {accounting} </a>
	</p>
</div>
