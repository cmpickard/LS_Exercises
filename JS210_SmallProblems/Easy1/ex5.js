/* eslint-disable id-length */
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

function getOperation() {
  let ans;
  while (ans !== 's' && ans !== 'p') {
    ans = rlSync.question('Enter "s" to compute the sum, "p" to compute the product\n');
  }
  return ans;
}

function makeCalc() {
  let num = Number(rlSync.question('Please enter an integer greater than 0:\n'));
  let operation = getOperation();

  let result = (operation === 's' ? 0 : 1);
  if (operation === 'p') {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  } else {
    for (let i = 1; i <= num; i++) {
      result += i;
    }
  }

  operation = (operation === 's' ? 'sum' : 'product');

  console.log(`The ${operation} of the integers between 1 and ${num} is ${result}`);
}

makeCalc();

// Further Exploration:
// What if the input was an array of integers instead of just a single integer?
// How would your computeSum and computeProduct functions change? Given that the
// input is an array, how might you make use of the Array.prototype.reduce()
// method?

function computeSum(array) {
  let sum = array.reduce(((acc, num) => acc + num), 0);
  console.log(`The sum of the array is ${sum}`);
}

function computeProduct(array) {
  let product = array.reduce(((acc, num) => acc * num), 1);
  console.log(`The product of the array is ${product}`);
}

computeSum([1, 2, 3, 4]);
computeProduct([1, 2, 3, 4]);