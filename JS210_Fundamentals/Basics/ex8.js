// The previous exercise mimics the parseInt function to a lesser extent. In
// this exercise, you're going to extend that function to work with signed
// numbers.

// Write a function that takes a string of digits and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the
// first character is a +, your function should return a positive number;
// if it is a -, your function should return a negative number. If there is
// no sign, return a positive number.

// You may assume the string will always contain a valid number.

// Examples:

// stringToSignedInteger('4321');      // 4321
// stringToSignedInteger('-570');      // -570
// stringToSignedInteger('+100');      // 100

const DIGITS =  { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
  '8': 8, '9':9, '0': 0, '-': 0, '+': 0};

function stringToSignedInteger(strInt) {
  let positive = (strInt[0] !== '-');
  strInt.replace(/[-+]/, '');

  let result = Array.from(strInt).reverse().reduce((acc, char, idx) => {
    return acc + (DIGITS[char] * (10 ** idx));
  }, 0);

  return result * (positive ? 1 : -1);
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-100'));
console.log(stringToSignedInteger('+570'));
