// Write a function that returns a list of all substrings of a string that are
// palindromic. That is, each substring must consist of the same sequence of
// characters forwards as backwards. The substrings in the returned list
// should be sorted by their order of appearance in the input string.
// Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the
// previous exercise.

// For the purpose of this exercise, you should consider all characters
// and pay attention to case; that is, 'AbcbA' is a palindrome, but
// 'Abcba' and 'Abc-bA' are not. In addition, assume that single
// characters are not palindromes.

// Examples:
// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes');
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
// Show Solution & Discussion

function allSubstrings(str) {
  let initialStrs = [...str].map((_, idx) => str.slice(idx));
  return initialStrs.flatMap((subStr) => {
    return [...subStr].map((_, idx) => subStr.slice(0, idx + 1));
  });
}

function palindromes(str) {
  let substrs = allSubstrings(str);
  return substrs.filter(substr => checkPalindrome(substr) && substr.length > 1);
}

function checkPalindrome(str) {
  if (str.length < 2) return true;
  if (str.slice(0,1) !== str.slice(-1)) return false;

  return checkPalindrome(str.slice(1, str.length - 1));
}

console.log(checkPalindrome('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));