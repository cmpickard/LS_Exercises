// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
// (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there
// is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// Examples:

// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
// featured(9876543201);
// // "There is no possible number that fulfills those requirements."

function featured(start) {
  const MAX_FEATURED = 9876543201;
  while (true) {
    start += 1;
    if (checkFeatured(start)) return start;
    if (start > MAX_FEATURED) return "no such number";
  }
}

function checkFeatured(num) {
  return num % 7 === 0 && num % 2 === 1 && uniqueDigits(num);
}

function uniqueDigits(num) {
  let charArray = [...String(num)].sort();
  return !charArray.some((char, idx) => char === charArray[idx + 1]);
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(9876543201));