// Write a function that takes one argument, a positive integer, and returns
// the sum of its digits. Do this without using for, while, or do...while
// loops - instead, use a series of method calls to perform the sum.

// Examples:
// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

function sum(num) {
  return [...String(num)].reduce((sum, num) => sum + Number(num), 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
