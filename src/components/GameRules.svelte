<!-- GameRules.svelte -->
<script lang="ts">
    import { userScore, computerScore } from '../components/Store';
    export let userChoice: string;
    export let computerChoice: string;

    $: {
		// Égalité, ne fait rien
        if (userChoice === computerChoice) {
        } 
		// user win
		else if (
            (userChoice === 'pierre' && computerChoice === 'ciseau') ||
            (userChoice === 'feuille' && computerChoice === 'pierre') ||
            (userChoice === 'ciseau' && computerChoice === 'feuille')
        ) {
            userScore.update((value) => value + 1);
			if ($computerScore > 0) {
				computerScore.update((value) => value - 1);
			}
		// loose
			} else {
            if ($userScore > 0) {
                userScore.update((value) => value - 1);
            }
            computerScore.update((value) => value + 1);
        }
        if ($userScore === 5) {
            alert('Vous avez gagné la partie !');
            userScore.set(0);
            computerScore.set(0);
        } else if ($computerScore === 5) {
            alert("L'ordinateur a gagné la partie !");
            userScore.set(0);
            computerScore.set(0);
        }
    }
</script>

<p>Votre choix: {userChoice}</p>
<p>Choix de l'ordinateur: {computerChoice}</p>

<p>Votre score: {$userScore}</p>
<p>Score de l'ordinateur: {$computerScore}</p>

{#if userChoice === computerChoice}
	<p>Résultat: Égalité!</p>
{:else if (userChoice === 'pierre' && computerChoice === 'ciseau') || (userChoice === 'feuille' && computerChoice === 'pierre') || (userChoice === 'ciseau' && computerChoice === 'feuille')}
	<p>Résultat: Vous gagnez!</p>
{:else}
	<p>Résultat: Vous perdez!</p>
{/if}
