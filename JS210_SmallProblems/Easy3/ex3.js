// Build a program that logs when the user will retire and how many more
// years the user has to work until retirement.

// Example:
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

function retirement() {
  let rlSync = require('readline-sync');
  let age = rlSync.question('What is your age?\n');
  let retirementAge = rlSync.question('At what age will you retire?\n');
  let yearsToRetirement = retirementAge - age;
  let year = new Date().getFullYear();

  console.log(`It's ${year}. You will retire in ${year + yearsToRetirement}`);
  console.log(`You have only ${yearsToRetirement} years of work to go!`);
}

retirement();