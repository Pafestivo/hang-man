const wordsPool = ['sea', 'ocean', 'wonderland', 'sun', 'grass', 'bottle', 'control', 'speaker', 'surf'];

let chosenWord = '';
let hiddenWord = '';

function startGame() {
  chosenWord = wordsPool[Math.floor(Math.random() * wordsPool.length)];

  for (i = 0; i < chosenWord.length; i++) {
    hiddenWord += '*';
  }

  console.log(`Guess the word: ${hiddenWord} (${chosenWord})`);
};

startGame();