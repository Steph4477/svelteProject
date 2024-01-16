<!-- components/GameButton.svelte -->

<script lang="ts">
	export let name: string;
	export let play: (choice: string) => void;
	export let image: string;
</script>

<button on:click={() => play(name)} aria-label={`bouton pour jouer ${name}`}>
	<img src={image} alt="Image d'une main en forme de {name}" />
</button>

<style>
	button {
        cursor: pointer;
		width: 100px;
		height: 100px;
		border: none;
		background-color: white;
	}
</style>
