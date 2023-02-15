// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log(`H A N G M A N
The game will be available soon.`);

let userGuess = input('Guess the word:');
const answer = userGuess === 'python' ? "You survived!" : "You lost!";
console.log(answer);