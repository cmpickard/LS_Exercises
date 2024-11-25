// In this exercise, you will write a program that asks the user for a phrase,
// then outputs the number of characters in that phrase. Go over the
// documentation for String to find an appropriate method to use.

// Examples:
// Please enter a phrase: walk
// // console output
// There are 4 characters in "walk".

// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".

let rlSync = require('readline-sync');
input = rlSync.question('Please enter a phrase.\n');
console.log(`The length of ${input} is ${input.length}`)



// FURTHER EXPLORATION
// The solution counts all the characters in the phrase, including spaces.
// Refactor it so that it ignores spaces.

// Since the refactored program shouldn't count spaces,
// you can use the String.prototype.replace method to return a new string with
// all spaces removed from it. Go over the documentation to see how you can do
// this. The thing to note here is that the first argument passed to replace
// can be a regular expression pattern.

// As an added challenge, further refactor the solution so that it only counts
// alphabetic characters.

let nonWhiteSpaceInput = input.replace(/ /g, '');
console.log(`The number of chars in '${input}' is ${nonWhiteSpaceInput.length}`);

let alphaInput = input.replace(/[^a-zA-Z]/g, '');
console.log(`The number of alphabetic chars in '${input}' is ${alphaInput.length}`);

