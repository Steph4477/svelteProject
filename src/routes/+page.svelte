<!-- +page.svelte -->
<script lang="ts">
    import Header from '../components/Header.svelte';
    import GameBoard from '../components/GameBoard.svelte';

    let userChoice: string = '';
    let computerChoice: string = '';
    const choices: string[] = ['pierre', 'feuille', 'ciseau'];
    let hideNoChoice: boolean = false;

    function play(choice: string): void {
        userChoice = choice;
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setTimeout(() => {
            hideNoChoice = true;
            setTimeout(() => {
                hideNoChoice = false;
                userChoice = '';
                computerChoice = '';
            }, 2000);
        }, 0);
    }
</script>

<Header />

<GameBoard {userChoice} {computerChoice} {hideNoChoice} {play} />

<style>
    :global(body) {
        background: linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
        max-width: 1366px;
        height: 120vh;
        color: white;
        margin-bottom: 5vh;
    }
</style>
