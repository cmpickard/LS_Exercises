// Write a function that takes a string argument and returns a new string
// containing the words from the string argument in reverse order.

// Examples:
// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));

// A buggy version of the solution for this exercise is shown below.
// For an extra challenge, try debugging this solution before looking
// at the real solution.
// function reverseSentence(string) {
//   return string.split('').reverse().join('');
// }
// ANSWER:
// We should be splitting and joining on ' ' rather than on the empty string.
// Spliting on the empty string creates an array of single characters, which is
// not what we want. And joining on the empty string means we are concatting
// the elements of the array back together with no spaces at all.