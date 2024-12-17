/* eslint-disable id-length */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
// You have written basic functions to display a random greeting to any
// number of friends upon each invocation of greet. Upon invoking the
// greet function, however, the output is not as expected. Figure out
// why not and fix the code.


function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting;

    console.log(`${greeting}, ${name}!`); // this is going to say "function,
    //<name>" or some such
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

/*
2 Problems:
the first function needs a return statement

The second function fails to call randomGreeting
*/