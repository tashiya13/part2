let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.LastResult');  // Fixed case-sensitivity here for 'LastResult'
const LowOrHi = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number.`);
  } else if (guess < 1) {
    alert(`Please enter a number greater than or equal to 1.`);
  } else if (guess > 100) {
    alert(`Please enter a number less than or equal to 100.`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {  
      displayGuess(guess);
      displayMessage(`Game Over. The random number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The number is too low.`);
  } else if (guess > randomNumber) {
    displayMessage(`The number is too high.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;  // Fixed: Display remaining guesses correctly
}

function displayMessage(message) {
  LowOrHi.innerHTML = `<h2>${message}</h2>`;  // Updates message in the 'LowOrHi' container
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  document.querySelector('.startOver').appendChild(p);  // Ensure 'startOver' element is in HTML
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);  // Reset the random number
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';  // Clear previous guesses
    remaining.innerHTML = `${10 - numGuess}`;  // Reset remaining guesses count
    userInput.removeAttribute('disabled');  // Enable input for new game
    document.querySelector('.startOver').removeChild(p);  // Remove the new game button
    playGame = true;
  });
}
























































































































