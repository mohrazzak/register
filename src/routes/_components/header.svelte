<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import MaterialSymbolsArrowLeftAltRounded from '~icons/material-symbols/arrow-left-alt-rounded';
	function stepBack() {
		if (window.history.length > 1) {
			window.history.back();
		} else {
			goto('/');
		}
	}
</script>

<div class=" container z-10 m-auto flex h-12 max-w-xl items-end justify-end px-2">
	<button type="button" class:hidden={$page.url.pathname === '/'} onclick={stepBack}>
		<MaterialSymbolsArrowLeftAltRounded
			class="h-8 w-8 rounded-full  bg-primary p-1 text-white hover:bg-secondary "
		/>
	</button>
</div>
