// For this exercise we're going to learn more about type conversion by
// implementing our own parseInt function that converts a string of numeric
// characters (including an optional plus or minus sign) to a number.

// The function takes a string of digits as an argument, and returns the
// appropriate number. Do not use any of the built-in functions for
// converting a string to a number type.

// For now, do not worry about leading + or - signs, nor should you worry
// about invalid characters; assume all characters will be numeric.

// Examples:

// stringToInteger('4321');      // 4321
// stringToInteger('570');       // 570

const STRINGS_NUMS = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7,
  8: 8, 9:9, 0: 0};

function stringToInteger(strNum) {
  return Array.from(strNum)
    .reverse()
    .reduce((acc, char, idx) => acc + (STRINGS_NUMS[char] * (10 ** idx)), 0);
}

console.log(stringToInteger('4321'));