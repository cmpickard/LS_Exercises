// Write another function that returns true if the string passed as an argument
// is a palindrome, or false otherwise. This time, however, your function
// should be case-insensitive, and should ignore all non-alphanumeric
// characters. If you wish, you may simplify things by calling the
// isPalindrome function you wrote in the previous exercise.

// Examples:
// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true (case does not matter)
// isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
// isRealPalindrome('356653');              // true
// isRealPalindrome('356a653');             // true
// isRealPalindrome('123ab321');            // false

function isRealPalindrome(str) {
  let cleanStr = '';

  for (let idx = 0; idx < str.length; idx++) {
    let lowerChar = str[idx].toLowerCase();

    if (/[a-z0-9]/.test(lowerChar)) {
      cleanStr += lowerChar;
    }
  }

  return isPalindrome(cleanStr);
}

function isPalindrome(str) {
  if (str.length < 2) return true;
  return (!!(str[0] === str[str.length - 1]) && isPalindrome(str.slice(1,-1)));
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));