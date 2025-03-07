// In the previous exercise, you reimplemented a function that converts
// non-negative numbers to strings. In this exercise, you're going to
// extend that function by adding the ability to represent negative numbers.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. You may, however, use the integerToString function
// from the previous exercise.

// Examples:
// signedIntegerToString(4321);      // "+4321"
// signedIntegerToString(-123);      // "-123"
// signedIntegerToString(0);         // "0"

"use strict";

const NUMERALS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(int) {
  let negative = (int < 0 || Object.is(int, -0));
  int *= negative ? -1 : 1;

  let result = [];
  do {
    result.push(NUMERALS[int % 10]);
    int = Math.trunc(int / 10);
  } while (int > 0);

  let sign = negative ? '-' : '+';
  result = result.reverse().join('');
  result = (int === 0 && !negative) ? result : sign + result;

  return result;
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));
console.log(signedIntegerToString(-0));