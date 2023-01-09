const wordsPool = ['sea', 'ocean', 'wonderland', 'sun', 'grass', 'bottle', 'control', 'speaker', 'surf'];

let chosenWord = '';
let hiddenWord = '';
let attempts = 10;
let guessedLetters = [];

function startGame() {
  chosenWord = wordsPool[Math.floor(Math.random() * wordsPool.length)];

  for (i = 0; i < chosenWord.length; i++) { //hide the word behind asterisks
    hiddenWord += '*';
  }

  alert('Please open the console before continuing[F12].');
  setTimeout(() => {announceStats();}, 100);
};

function announceStats() {
  if(hiddenWord.indexOf('*') === -1) { //if the word is discovered
    alert('You Win!');
    console.log(`congratulations! You win! The word was '${chosenWord}'`);
  } else {
    console.log(`You have ${attempts} guesses.`)
    console.log(`The Word is:`)
    console.log(`${hiddenWord}`);
    handleGuess();
  }
}

function handleGuess() {
  let guess = prompt('What is your guess?').toLowerCase();

  if(guess === null || !isNaN(guess) || guess.length != 1) { //if input is invalid
    alert('This input is invalid. Please type a single letter.')
    handleGuess();
  } 
  else if(guessedLetters.indexOf(guess) != -1) { //if already guessed that letter
    alert('You already guessed that.');
    handleGuess();
  }
  else {
    guessedLetters.push(guess); //add the letter to guessed array

    if(chosenWord.indexOf(guess) != -1) { //if guess is correct
      console.log(`Nice! '${guess}' is correct`);
      
      for (i = 0; i < chosenWord.length; i++) { //reveal the proper letters
        if(chosenWord[i] === guess) {
          hiddenWord = hiddenWord.substring(0, i) + guess + hiddenWord.substring(i + 1)
        }
      }
      announceStats();
    } 
    else { //if guess is wrong
      if(attempts > 1) { 
        console.log(`Unfortunately, ${guess} is incorrect.`)
        attempts--
        announceStats();
      } 
      else { //if no attempts left
        alert('Game Over!')
        console.log(`You lost! the word was ${chosenWord}`);
      }
    };
  }
}

startGame();




