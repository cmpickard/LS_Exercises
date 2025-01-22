// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter
// // changed to lowercase. Leave all other characters unchanged.

// Examples:
// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

function swapCase(str) {
  const UPPERS = /[A-Z]/;
  const LOWERS = /[a-z]/;

  let alteredChars = [...str].map(char => {
    if (UPPERS.test(char)) {
      return char.toLowerCase();
    } else if (LOWERS.test(char)) {
      return char.toUpperCase();
    } else {
      return char;
    }
  });

  return alteredChars.join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
