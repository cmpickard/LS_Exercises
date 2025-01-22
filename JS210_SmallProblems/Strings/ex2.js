// Write a function that takes an array of strings and returns an array of the
// same string values, but with all vowels (a, e, i, o, u) removed.

// Examples:


// removeVowels(['abcdefghijklmnopqrstuvwxyz']);
// // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);
// // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);
// // ["BC", "", "XYZ"]

function removeVowels(stringArr) {
  const NOT_VOWEL = /[^aeiou]/i;

  return stringArr.map(string => {
    return [...string]
      .filter(char => NOT_VOWEL.test(char))
      .join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));

// Further Exploration
// The current solution uses the transformation list processing strategy to
// remove the vowels from the strings. Reimplement the solution using a
// regex-based approach, if you have not done so already.