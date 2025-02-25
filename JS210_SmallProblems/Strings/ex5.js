// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter
// // changed to lowercase. Leave all other characters unchanged.

// Examples:
// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

function swapCase(str) {
  return [...str].map(char => {
    if (char.toUpperCase() === char) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
