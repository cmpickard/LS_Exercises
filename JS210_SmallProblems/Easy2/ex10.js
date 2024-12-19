// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number,
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years
// 1901 - 2000 comprise the 20th century.

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
  let century = 1 + (Math.floor((year - 1) / 100));
  let lastDigit = String(century).slice(-1);
  let penultDigit = String(century).slice(-2, -1);
  let suffix;

  if (lastDigit === '1' && penultDigit !== '1') {
    suffix = 'st';
  } else if (lastDigit === '2' && penultDigit !== '1') {
    suffix = 'nd';
  } else if (lastDigit === '3' && penultDigit !== '1') {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return century + suffix;
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));