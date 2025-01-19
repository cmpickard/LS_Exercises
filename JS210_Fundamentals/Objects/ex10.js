// As seen in the previous exercise, the time of day can be represented as the
// number of minutes before or after midnight. If the number of minutes is
// positive, the time is after midnight. If the number of minutes is negative,
// the time is before midnight.

// The two functions below do the reverse of the previous exercise. They take
// a 24-hour time argument and return the number of minutes before or after
// midnight, respectively. Both functions should return a value between 0 and
// 1439 (inclusive). Refactor the functions using the Date object.

// Examples:
// afterMidnight('00:00');       // 0
// beforeMidnight('00:00');      // 0
// afterMidnight('12:34');       // 754
// beforeMidnight('12:34');      // 686
// Note: Disregard Daylight Saving Time, Standard Time, and other
// irregularities.

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);

//   return hours * MINUTES_PER_HOUR + minutes;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }

//   return deltaMinutes;
// }


// Refactor without Date object
// function afterMidnight2(timeStr) {
//   let [hrs, mins] = timeStr.split(':').map( (timePart) => Number(timePart));
//   return (hrs * MINS_PER_HOUR) + mins;
// }

const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;

afterMidnight(timeStr) {
}

function beforeMidnight(timeStr) {

}

console.log(afterMidnight('02:02'));
console.log(beforeMidnight('24:00'));