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
const METERS_TO_FEET = 10.7639;
const FEET_TO_METERS = METERS_TO_FEET ** -1;
let rlSync = require('readline-sync');

function calcArea() {
  let len = Number(rlSync.question('Enter the length of the room in meters:\n'));
  let width = Number(rlSync.question('Enter the width of the room in meters:\n'));
  let area = Number((len * width).toFixed(2));
  let areaInFeet = (area * METERS_TO_FEET).toFixed(2);

  console.log(`The area of the room is ${area} square meters ` +
    `(${areaInFeet} square feet.)`);
}

calcArea();

// Further Exploration
// Modify the program so that it asks the user for the input type
// (meters or feet). Compute for the area accordingly, and log it and its
// conversion in parentheses.

function calcArea2() {
  let units;
  while (units !== 'm' && units !== 'f') {
    units = rlSync.question('Are you giving values in (m)eters or (f)eet?');
  }
  units = (units === 'm' ? 'meters' : 'feet');
  let len = Number(rlSync.question(`Enter the length of the room in ${units}:\n`));
  let width = Number(rlSync.question(`Enter the width of the room in ${units}:\n`));

  let areaMeters;
  let areaFeet;

  if (units === 'meters') {
    areaMeters = Number((len * width).toFixed(2));
    areaFeet = (areaMeters * METERS_TO_FEET).toFixed(2);
  } else {
    areaFeet = Number((len * width).toFixed(2));
    areaMeters = (areaFeet * FEET_TO_METERS).toFixed(2);
  }

  console.log(`The area of the room is ${areaMeters} square meters ` +
    `(${areaFeet} square feet.)`);
}

calcArea2();