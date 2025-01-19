// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (°) to
// represent degrees, a single quote (') to represent minutes, and a double
//   quote (") to represent seconds. There are 60 minutes in a degree, and
//     60 seconds in a minute.

// Note: You can use the following constant to represent the degree symbol:

// Copy Code
// const DEGREE = '\u00B0';
// Examples:

// Copy Code
// // All test cases should return true
// console.log(dms(30) === "30°00'00\"");
// console.log(dms(76.73) === "76°43'48\"");
// console.log(dms(254.6) === "254°35'59\"");
// console.log(dms(93.034773) === "93°02'05\"");
// console.log(dms(0) === "0°00'00\"");
// console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");
// Note: your results may differ slightly depending on how you round values
// but should generally be within a second or two of the results shown.

function dms(angle) {
  angle = normalizeAngle(angle);
  const SECONDS_AND_MINUTES_PER = 60;
  const DEGREE = '\u00B0';
  let degrees = Math.trunc(angle);
  let minutesPart = (angle % 1) * SECONDS_AND_MINUTES_PER;
  let secondsPart = (minutesPart % 1) * SECONDS_AND_MINUTES_PER;
  let minutes = String(Math.trunc(minutesPart));
  let seconds = String(Math.trunc(secondsPart));
  minutes = (minutes.length === 1 ? 0 + minutes : minutes);
  seconds = (seconds.length === 1 ? 0 + seconds : seconds);

  return degrees + DEGREE + minutes + "'" + seconds + '"';
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));

/* Further Exploration
The current solution implementation only works with positive numbers in the
range of 0 to 360 (inclusive). Can you refactor it so that it works with any
positive or negative number?

Our solution returns the following results for inputs outside the range 0-360:

dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"
Since degrees are normally restricted to the range 0-360, can you modify
the code so it returns a value in the appropriate range when the input is
less than 0 or greater than 360?

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"*/

function normalizeAngle(angle) {
  while (angle < 0) {
    angle += 360;
  }

  while (angle > 360) {
    angle -= 360;
  }

  return angle;
}

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"*/