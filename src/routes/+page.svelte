<!-- +page.svelte -->
<script lang="ts">
	import GameControls from '../components/GameControls.svelte';
	import GameRules from '../components/GameRules.svelte';

	let userChoice: string = '';
	let computerChoice: string = '';
	const choices: string[] = ['pierre', 'feuille', 'ciseau'];

	function play(choice: string): void {
		userChoice = choice;
		computerChoice = choices[Math.floor(Math.random() * choices.length)];
		console.log(computerChoice);
	}
</script>

<GameControls {play} />
<GameRules {userChoice} {computerChoice} />
