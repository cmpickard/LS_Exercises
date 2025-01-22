// Write a function that takes a year as an argument and returns the number of
// 'Friday the 13ths' in that year. You may assume that the year is greater than
// 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
// You may also assume that the same calendar will remain in use for the
// foreseeable future.

// Examples:

// Copy Code
// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

function fridayThe13ths(yearNum) {
  let year = new Date(yearNum, 0, 13);
  let count = 0;

  for (let month = 1; month <= 12; month++) {
    if (year.getDay() === 5) count += 1;
    year.setMonth(month);
  }

  return count;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));