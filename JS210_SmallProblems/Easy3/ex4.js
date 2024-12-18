// Write a function that returns true if the string passed as an argument is
// a palindrome, or false otherwise. A palindrome reads the same forwards and
// backwards. For this problem, the case matters and all characters matter.

// Examples:
// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

function isPalindrome(str) {
  let lastIdx = str.length - 1;
  if (lastIdx < 1) return true;
  let substring = str.slice(1, lastIdx);
  return ((str[0] === str[lastIdx]) ? isPalindrome(substring) : false);
}

console.log(isPalindrome('ada'));
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true