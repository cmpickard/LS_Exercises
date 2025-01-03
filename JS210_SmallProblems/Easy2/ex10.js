// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and
// ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

// Examples:
// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

function century(year) {
  let centuryNum = (Math.floor((year - 1) / 100)) + 1;
  let ending = '';
  if (centuryNum % 10 === 1 && centuryNum % 100 !== 11) {
    ending = 'st';
  } else if (centuryNum % 10 === 2 && centuryNum % 100 !== 12) {
    ending = 'nd';
  } else if (centuryNum % 10 === 3 && centuryNum % 100 !== 13) {
    ending = 'rd';
  } else {
    ending = 'th';
  }

  return centuryNum + ending;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
