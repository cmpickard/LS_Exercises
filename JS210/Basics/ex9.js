// In the previous two exercises, you developed functions that convert simple
// numeric strings to signed integers. In this exercise and the next, you're
// going to reverse those functions.

// You will learn more about converting strings to numbers by writing a
// function that takes a positive integer or zero, and converts it to a
// string representation.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. Your function should do this the old-fashioned way
// and construct the string by analyzing and manipulating the number.

// Examples:

// integerToString(4321);      // "4321"
// integerToString(0);         // "0"
// integerToString(5000);      // "5000"

"use strict";

const NUMERALS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(int) {
  let resultArr = [];

  do {
    resultArr.push(NUMERALS[int % 10]);
    int = Math.floor(int / 10);
  } while (int > 0);

  return resultArr.reverse().join('');
}

console.log(integerToString(4321));