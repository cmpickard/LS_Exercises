// Write a function that returns true if its integer argument is palindromic,
// or false otherwise. A palindromic number reads the same forwards and
// backwards.

// Examples:
// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

function isPalindromicNumber(int) {
  let strNum = String(int);
  if (strNum.length < 2) return true;
  return (!!(strNum[0] === strNum[strNum.length - 1]) &&
  isPalindromicNumber(strNum.slice(1,-1)));
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));