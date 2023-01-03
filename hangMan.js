const wordsPool = ['sea', 'ocean', 'wonderland', 'sun', 'grass', 'bottle', 'control', 'speaker', 'surf'];

let chosenWord = '';
let hiddenWord = '';
let attempts = 10;

function startGame() {
  chosenWord = wordsPool[Math.floor(Math.random() * wordsPool.length)];

  for (i = 0; i < chosenWord.length; i++) {
    hiddenWord += '*';
  }

  alert('Please open the console to play.');
  setTimeout(() => {announceStats();}, 100);
};

function announceStats() {
  console.log(`You have ${attempts} guesses.`)
  console.log(`The Word is:`)
  console.log(`${hiddenWord} (${chosenWord})`);
  handleGuess();
}

function handleGuess() {
  let guess = prompt('What is your guess?');

  if(guess === null || !isNaN(guess) || guess.length != 1) {
    alert('This input is invalid. Please type a single letter.')
    handleGuess();
  } else {
    if(chosenWord.indexOf(guess) != -1) {
      console.log(`Nice! '${guess}' is correct`);
      
      for (i = 0; i < chosenWord.length; i++) {
        if(chosenWord[i] === guess) {
          hiddenWord = hiddenWord.substring(0, i) + guess + hiddenWord.substring(i + 1)
        }
      }
      announceStats();
    } else alert('NO!');
  }
}

startGame();