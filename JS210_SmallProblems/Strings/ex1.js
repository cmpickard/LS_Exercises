// Write a function that takes a string argument and returns true if all of
// the alphabetic characters inside the string are uppercase; otherwise,
// return false. Ignore characters that are not alphabetic.

// Examples:
// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true

const FIRST = 'a'.charCodeAt(0);
const LAST = 'z'.charCodeAt(0);

function isUppercase(str) {
  if (str.length === 0) return true;
  let ascii = str.charCodeAt(0);
  return (ascii >= FIRST && ascii <= LAST) ? false : isUppercase(str.slice(1));
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));