// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five numbers.

// Examples:
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

let rlSync = require('readline-sync');
let num1 = rlSync.question('What is the first number?\n');
let num2 = rlSync.question('What is the second number?\n');
let num3 = rlSync.question('What is the third number?\n');
let num4 = rlSync.question('What is the fourth number?\n');
let num5 = rlSync.question('What is the fifth number?\n');
let last = rlSync.question('What is the number we are looking for?\n');

let numArr = [num1, num2, num3, num4, num5];
let answer = (numArr.includes(last)) ? 'does' : 'does not';
console.log(`The number ${last} ${answer} appear in ${numArr}`);