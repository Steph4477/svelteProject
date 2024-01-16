<!-- GameRules.svelte 
<script lang="ts">
	export let userChoice: string;
	export let computerChoice: string;
</script>

<p>Votre choix: {userChoice}</p>
<p>Choix de l'ordinateur: {computerChoice}</p>

{#if userChoice === computerChoice}
	<p>Résultat: Égalité!</p>
{:else if (userChoice === 'pierre' && computerChoice === 'ciseau') 
    || 
        (userChoice === 'feuille' && computerChoice === 'pierre') 
    || 
        (userChoice === 'ciseau' && computerChoice === 'feuille')}
	<p>Résultat: Vous gagnez!</p>
{:else}
	<p>Résultat: Vous perdez!</p>
{/if} -->

<script lang="ts">
    export let userChoice: string;
    export let computerChoice: string;
    let userScore = 0;
    let computerScore = 0;

    $: {
        if (userChoice === computerChoice) {
            // Égalité, les scores ne changent pas
        } else if (
            (userChoice === 'pierre' && computerChoice === 'ciseau') ||
            (userChoice === 'feuille' && computerChoice === 'pierre') ||
            (userChoice === 'ciseau' && computerChoice === 'feuille')
        ) {
            // L'utilisateur gagne
            userScore += 1;
            if (computerScore > 0) {
                computerScore -= 1;
            }
        } else {
            // L'ordinateur gagne
            computerScore += 1;
            if (userScore > 0) {
                userScore -= 1;
            }
        }

        if (userScore === 5) {
            alert("Vous avez gagné la partie !");
            userScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            alert("L'ordinateur a gagné la partie !");
            userScore = 0;
            computerScore = 0;
        }
    }
</script>

<p>Votre choix: {userChoice}</p>
<p>Choix de l'ordinateur: {computerChoice}</p>

<p>Votre score: {userScore}</p>
<p>Score de l'ordinateur: {computerScore}</p>

{#if userChoice === computerChoice}
    <p>Résultat: Égalité!</p>
{:else if (userChoice === 'pierre' && computerChoice === 'ciseau') 
    || 
        (userChoice === 'feuille' && computerChoice === 'pierre') 
    || 
        (userChoice === 'ciseau' && computerChoice === 'feuille')}
    <p>Résultat: Vous gagnez!</p>
{:else}
    <p>Résultat: Vous perdez!</p>
{/if}