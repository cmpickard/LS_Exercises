// Write a function that returns true if the string passed as an argument is a
// palindrome, or false otherwise. A palindrome reads the same forwards and
// backwards. For this problem, the case matters and all characters matter.

// // Examples:
// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

function isRealPalindrome(phrase) {
  if (phrase.length < 2) return true;
  if (phrase.slice(0, 1) !== phrase.slice(-1)) return false;
  return isRealPalindrome(phrase.slice(1, phrase.length - 1));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // false (case matters)
console.log(isRealPalindrome("madam i'm adam"));      // false
console.log(isRealPalindrome('356653'));              // true