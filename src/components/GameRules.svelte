<!-- GameRules.svelte -->
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
{/if}
