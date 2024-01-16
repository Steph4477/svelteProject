<!-- components/GameControls.svelte -->

<script lang="ts">
    import paper from '$lib/assets/icon-paper.svg';
    import scissors from '$lib/assets/icon-scissors.svg';
    import rock from '$lib/assets/icon-rock.svg';
    import GameButton from './GameButton.svelte';
    export let play: (choice: string) => void;
</script>

<GameButton name="pierre" play={play} image={rock} />
<GameButton name="feuille" play={play} image={paper} />
<GameButton name="ciseau" play={play} image={scissors} />