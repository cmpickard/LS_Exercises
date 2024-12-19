// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

// Example:
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

let rlSync = require('readline-sync');
let age = rlSync.question('What is your age?\n');
let retirementAge = rlSync.question('At what age would you like to retire?\n');
let year = new Date().getFullYear();
let yearOfRetirement = (retirementAge - age) + year;

console.log(`It's ${year}. You will retire in ${yearOfRetirement}`);
console.log(`You have only ${yearOfRetirement - year} years of work to go!`);