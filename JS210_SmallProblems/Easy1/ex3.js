// Build a program that asks the user to enter the length and width of a room in
// meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time.
// Use the readlineSync.prompt method to collect user input.

// Example:

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).
const M_TO_FT = 10.7639;
const FT_TO_M = M_TO_FT ** -1;
let rlSync = require('readline-sync');

function calcArea() {
  let length = Number(rlSync.question('Enter the length in meters:\n'));
  let width = Number(rlSync.question('Enter the width in meters\n'));
  let area = (length * width);
  console.log(`The area if ${area.toFixed(2)} square meters`);
}

calcArea();

// Further Exploration
// Modify the program so that it asks the user for the input type
// (meters or feet). Compute for the area accordingly, and log it and its
// conversion in parentheses.

function calcArea2() {
  let response = '';

  while (!['m', 'f'].includes(response)) {
    response = rlSync.question('Measurements in (m)eters or (f)eet?\n');
  }

  const units = (response === 'm' ? 'meters' : 'feet');

  const length = Number(rlSync.question(`Enter the length in ${units}\n`));
  const width = Number(rlSync.question(`Enter the width in ${units}\n`));
  const area = (length * width).toFixed(2);

  const altWidth = (units === 'meters') ? width * M_TO_FT : width * FT_TO_M;
  const altLength = (units === 'meters') ? length * M_TO_FT : length * FT_TO_M;
  const altArea = (altWidth * altLength).toFixed(2);
  const altUnits = (units === 'meters') ? 'feet' : 'meters';

  console.log(`The room is ${area} sq ${units}. (${altArea} sq ${altUnits})`);
}

calcArea2();