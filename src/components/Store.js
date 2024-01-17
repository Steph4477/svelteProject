import { writable } from 'svelte/store';

export const userScore = writable(0);
export const computerScore = writable(0);