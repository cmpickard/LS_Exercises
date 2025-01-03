// Write another function that returns true if the string passed as an argument
// is a palindrome, or false otherwise. This time, however, your function should
// be case-insensitive, and should ignore all non-alphanumeric characters. If
// you wish, you may simplify things by calling the isPalindrome function you
// wrote in the previous exercise.

function isRealPalindrome(phrase) {
  let testPhrase = phrase.toLowerCase().replaceAll(/[^a-z0-9]/g,'');

  if (testPhrase.length < 2) return true;
  if (testPhrase[0] !== testPhrase.slice(-1)) return false;
  return (isRealPalindrome(testPhrase.slice(1, testPhrase.length - 1)));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true
console.log(isRealPalindrome("madam i'm adam"));      // true (all characters matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false