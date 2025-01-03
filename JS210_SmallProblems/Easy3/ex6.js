// Write a function that returns true if its integer argument is palindromic, or
// false otherwise. A palindromic number reads the same forwards and backwards.

// Examples:

// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

function isPalindromicNumber(num) {
  let stringNum = String(num);
  if (stringNum.length < 2) return true;
  if (stringNum[0] !== stringNum.slice(-1)) return false;
  return isPalindromicNumber(stringNum.slice(1, stringNum.length - 1));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true