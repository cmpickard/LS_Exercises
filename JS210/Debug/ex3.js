/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
// The function placeABet below accepts a guess from the user between 1 and 25.
// The function should determine a winning number and return a message to the
// user indicating whether he/she entered a winning guess. When you try to
// invoke placeABet, an error is raised. Fix the bug and explain what caused it.


function placeABet(guess) {
  (function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  });

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// the generateRandomInt function expression is not saved anywhere. The object
// is created but not assigned to a variable. It might not be obvious that the
// function IS a function expression, but we can tell it is b/c the line starts
// with a parenthesis rather than with the function keyword.
// As a result, we'll get an error message that generateRandomInt is not a
// function or maybe generateRandomInt is a reference error