// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log(`H A N G M A N
The game will be available soon.`);

const words = ['python', 'java', 'swift', 'javascript'];
const hints = ['pyt---', 'jav-', 'swi--', 'jav-------'];
const index = Math.floor(Math.random() * words.length);
const computerChoice = words[index];
let userGuess = input(`Guess the word: ${hints[index]}`);
const answer = userGuess == words[index] ? "You survived!" : "You lost!";
console.log(answer);
