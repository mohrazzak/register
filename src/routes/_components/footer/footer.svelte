<script>
	import MaterialSymbolsLocationOn from '~icons/material-symbols/location-on';
	import MaterialSymbolsPhoneInTalkOutline from '~icons/material-symbols/phone-in-talk-outline';
	import Item from './item.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	let { address, reception, accounting } = $props();

	const items = [
		{
			Icon: MaterialSymbolsLocationOn,
			title: 'العنوان',
			text: 'حلب - الشهباء الجديدة - جانب دوّار الغزالي.'
		},
		{
			Icon: MaterialSymbolsPhoneInTalkOutline,
			title: 'الاستقبال',
			text: '0989557701',
			isLink: true
		},
		{
			Icon: MaterialSymbolsPhoneInTalkOutline,
			title: 'المحاسبة',
			text: '0989557738',
			isLink: true
		}
	];
</script>

<div class="container my-8">
	<Separator class="m-auto max-w-md bg-secondary" />

	{#each items as item}
		<Item text={item.text} title={item.title} Icon={item.Icon} isLink={item.isLink} />
	{/each}
</div>
