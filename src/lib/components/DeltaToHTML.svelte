<script lang="ts">
	import Quill from 'quill';
	import type Delta from 'quill-delta';
	import { onMount } from 'svelte';

	export let deltaContext: Delta | string;
	let description: HTMLDivElement;

	function DeltaAsHTML() {
		const context: Quill = new Quill(description, {});
		context.setContents(deltaContext as Delta);
		context.disable();
		return context.root.innerHTML;
	}

	onMount(() => {
		DeltaAsHTML();
	});
</script>

<!-- <svelte:window on:beforeunload|preventDefault /> -->

<div
	class="container mx-auto flex flex-col items-center"
	id="text-container"
	bind:this={description}
/>

<style lang="postcss">
	#text-container .ql-editor {
		@apply flex flex-col items-center;
	}
</style>
