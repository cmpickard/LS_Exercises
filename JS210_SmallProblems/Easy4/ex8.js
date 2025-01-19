// Write a function that takes one argument, a positive integer, and
// returns a list of the digits in the number.

// Examples:

// Copy Code
// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

function digitList(num) {
  let digits = [];
  do {
    digits.push(num % 10);
    num = Math.trunc(num / 10);
  } while (num > 0);

  return digits.reverse();
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));

// Further Exploration
// A more concise approach would be to use the Array.prototype.map method.
// Refactor the current solution to make use of this method, if you haven't
// already.

function digitList2(num) {
  return Array.from(String(num)).map(stringNum => Number(stringNum));
}

console.log(digitList2(12345));
console.log(digitList2(7));
console.log(digitList2(375290));
console.log(digitList2(444));