<!-- +page.svelte -->
<script lang="ts">
	import triangle from '$lib/assets/bg-triangle.svg';
	import GameRules from '../components/GameRules.svelte';
	import paper from '$lib/assets/icon-paper.svg';
    import scissors from '$lib/assets/icon-scissors.svg';
    import rock from '$lib/assets/icon-rock.svg';
    import GameButton from '../components/GameButton.svelte';
	import ListContainer from '../components/ListContainer.svelte';
	import Header from '../components/Header.svelte';

	let userChoice: string = '';
	let computerChoice: string = '';
	const choices: string[] = ['pierre', 'feuille', 'ciseau'];
	console.log(choices);
	function play(choice: string): void {
		userChoice = choice;
		computerChoice = choices[Math.floor(Math.random() * choices.length)];
	}
	
</script>

<Header />

<div class="game-body">
    <img src={triangle} alt="Triangle" class="triangle" />
    <div class="button-rock"><GameButton name="pierre" play={play} image={rock} /></div>
    <div class="button-paper"><GameButton name="feuille" play={play} image={paper} /></div>
    <div class="button-scissors"><GameButton name="ciseau" play={play} image={scissors} /></div>
    
    <GameRules {userChoice} {computerChoice} />
</div>


<style>
	:global(body) {
		background: linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
		max-width: 1366px;
		height: 100vh;
		color: white;
		overflow: hidden;
	}
	.game-body {
		margin-top: 25vh;
		position: relative;
		
		
	}
	.triangle {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.button-rock {
		position: absolute;
		top:120%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.button-paper{
		position: absolute;
		top: 0%;
		left: 40%;
		transform: translate(-50%, -50%);
	}
	.button-scissors{
		position: absolute;
		top: 0%;
		left: 60%;
		transform: translate(-50%, -50%);
	}
</style>
