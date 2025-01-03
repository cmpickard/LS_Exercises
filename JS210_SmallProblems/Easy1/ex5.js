// Write a program that asks the user to enter an integer greater than 0, then
// asks if the user wants to determine the sum or the product of all numbers
// between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.
let rlSync = require('readline-sync');

function makeCalc() {
  const num = Number(rlSync.question('Enter an integer greater than 0:\n'));
  let choice = '';
  while (!['s', 'p'].includes(choice)) {
    choice = rlSync.question('Type "s" to compute sum, "p" for product.\n');
  }

  const operation = (choice === 's') ? 'sum' : 'product';

  let ans = 1;
  for (let currVal = 2; currVal <= num; currVal++) {
    ans = (choice === 's') ? ans + currVal : ans * currVal;
  }

  console.log(`The ${operation} of the integers between 1 & ${num} is ${ans}`);
}

makeCalc();

// Further Exploration:
// What if the input was an array of integers instead of just a single integer?
// How would your computeSum and computeProduct functions change? Given that the
// input is an array, how might you make use of the Array.prototype.reduce()
// method?

function computeSum(array) {
  return array.reduce((num, acc) => num + acc, 0);
}

function computeProduct(array) {
  return array.reduce((num, acc) => num * acc, 1);
}

console.log(computeSum([1, 2, 3, 4]));
console.log(computeProduct([1, 2, 3, 4]));