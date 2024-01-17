<script lang="ts">
    import triangle from '$lib/assets/bg-triangle.svg';
    import GameRules from '../components/GameRules.svelte';
    import paper from '$lib/assets/icon-paper.svg';
    import scissors from '$lib/assets/icon-scissors.svg';
    import rock from '$lib/assets/icon-rock.svg';
    import GameButton from '../components/GameButton.svelte';

    export let userChoice: string = '';
    export let computerChoice: string = '';
    export let hideNoChoice: boolean = false;
    export let play: (choice: string) => void;
</script>

<div class="game-body">
    <img src={triangle} alt="Triangle" class="triangle" />
    <!-- hide the no choice by the user and the computer -->
    <div class="button-rock" style="display: {hideNoChoice && userChoice !== 'pierre' && computerChoice !== 'pierre' ? 'none' : 'block'}"> 
        <GameButton name="pierre" {play} image={rock} />
    </div>
    <div class="button-paper" style="display: {hideNoChoice && userChoice !== 'feuille' && computerChoice !== 'feuille' ? 'none' : 'block'}">
        <GameButton name="feuille" {play} image={paper} />
    </div>
    <div class="button-scissors" style="display: {hideNoChoice && userChoice !== 'ciseau' && computerChoice !== 'ciseau' ? 'none' : 'block'}">
        <GameButton name="ciseau" {play} image={scissors} />
    </div>

    <GameRules {userChoice} {computerChoice} />
</div>

<style>
    .game-body {
        margin-top: 25vh;
        position: relative;
    }

    .triangle {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .button-rock, .button-paper, .button-scissors {
        position: absolute;
        transform: translate(-50%, -50%);
    }
    .button-rock:hover, .button-paper:hover, .button-scissors:hover {
        transform: translate(-50%, -50%) scale(1.5);
    }


    .button-rock {
        top: 120%;
        left: 50%;
    }
    
    .button-paper {
        top: 0%;
        left: 40%;
    }

    .button-scissors {
        top: 0%;
        left: 60%;
    }
</style>