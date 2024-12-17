// We can use the number of minutes before or after midnight to represent the
// time of day. If the number of minutes is positive, the time is after
// midnight. If the number of minutes is negative, the time is before midnight.

// The timeOfDay function shown below takes a time argument using this
// minute-based format, and returns the time of day in 24-hour format ("hh:mm").
// Reimplement the function using JavaScript's Date object.

// Examples:
// timeOfDay(0);          // "00:00"
// timeOfDay(-3);         // "23:57"
// timeOfDay(35);         // "00:35"
// timeOfDay(-1437);      // "00:03"
// timeOfDay(3000);       // "02:00"
// timeOfDay(800);        // "13:20"
// timeOfDay(-4231);      // "01:29"
// Note: Disregard Daylight Saving Time, Standard Time, and other complications.

// Copy Code
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }

// function padWithZeroes(number, length) {
//   let numberString = String(number);

//   while (numberString.length < length) {
//     numberString = `0${numberString}`;
//   }

//   return numberString;
// }

function padWithZeroes(time, length) {
  let timeString = String(time);

  while (timeString.length < length) {
    timeString = '0' + timeString;
  }

  return timeString;
}

function timeOfDay(deltaMinutes) {
  let endTime = new Date(Date.UTC(0, 0, 0, 0, deltaMinutes));
  let hours = endTime.getUTCHours();
  let mins = endTime.getUTCMinutes();

  return (`${padWithZeroes(hours, 2)}:${padWithZeroes(mins, 2)}`);
}

console.log(timeOfDay(126));