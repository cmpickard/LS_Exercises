// Write a function that takes one argument, a positive integer, and returns a
// string of alternating '1's and '0's, always starting with a '1'. The length
// of the string should match the given integer.

// Examples:
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

function stringy(num) {
  return '10'.repeat(num).slice(0, num);
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); //"101010101"