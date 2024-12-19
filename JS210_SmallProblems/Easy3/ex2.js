// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five numbers.

// Examples:

// Copy Code
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].

function testNumbers() {
  let rlSync = require('readline-sync');
  let first = rlSync.question('Enter the 1st number:\n');
  let second = rlSync.question('Enter the 2nd number:\n');
  let third = rlSync.question('Enter the 3rd number:\n');
  let fourth = rlSync.question('Enter the 4th number:\n');
  let fifth = rlSync.question('Enter the 5th number:\n');
  let last = rlSync.question('Enter the last number:\n');
  let numArr = [first, second, third, fourth, fifth].map(num => Number(num));

  let doesAppear = numArr.some(num => num === last) ? "does" : "does not";

  console.log(`The number ${last} ${doesAppear} appear in ${numArr}`);
}

testNumbers();