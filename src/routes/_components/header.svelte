<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import MaterialSymbolsArrowCircleLeft from '~icons/material-symbols/arrow-circle-left';

	function stepBack() {
		if (window.history.length > 1) {
			window.history.back();
		} else {
			goto('/');
		}
	}
</script>

<!-- <header
	class="flex h-14 w-full items-center justify-center bg-primary text-center text-lg font-semibold text-gray-50"
>
	<h1>تفاصيل التسجيل</h1>
</header> -->

<div class="m-auto flex h-12 max-w-lg items-end justify-end px-2">
	<button type="button" class:hidden={$page.url.pathname === '/'} onclick={stepBack}>
		<MaterialSymbolsArrowCircleLeft class="h-8 w-8 text-primary hover:text-gray-200" />
	</button>
</div>
