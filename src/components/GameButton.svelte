<!-- components/GameButton.svelte -->

<script lang="ts">
	export let name: string;
	export let play: (choice: string) => void;
	export let image: string;	
</script>

<div class="button-{name}">
	<button on:click={() => play(name)} aria-label={`bouton pour jouer ${name}`}>
		<img src={image} alt="Image d'une main en forme de {name}" class="game-controls" />
	</button>
</div>

<style>
    button {
        cursor: pointer;
        width: 100px;
        height: 100px;
        border: none;
        background-color: white;
        border-radius: 100px;	
        transition: transform 0.3s ease; 
		box-shadow: inset 0px 10px 0px 0px hsl(214, 10%, 86%);
    }

    button:active {
        transform: translateY(-10px);
    }
	
	button:hover {
		box-shadow: none;		
	}

	.button-pierre{
		width: 150px;
		height: 150px;
		border-radius: 100px;
		background: linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%));
		display: flex;
		justify-content: center;
		align-items: center;
		
	}

	.button-feuille{
		width: 150px;
		height: 150px;
		border-radius: 100px;
		background: linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%));
		display: flex;
		justify-content: center;
		align-items: center;	
	}

	.button-ciseau{
		width: 150px;
		height: 150px;
		border-radius: 100px;
		background: linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%));
		display: flex;
		justify-content: center;
		align-items: center;		
	}

	.game-controls {
		background-color: white;
	}
</style>
