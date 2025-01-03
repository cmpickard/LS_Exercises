// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.

// Examples:

// Copy Code
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

function crunch(str) {
  return Array.from(str)
    .reduce((newString, currChar) => {
      const previousChar = newString[newString.length - 1];
      return (previousChar === currChar) ? newString : newString + currChar;
    }, '');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));

// FURTHER EXPLORATION
// It's also possible to solve this using regular expressions. For a nice
// challenge, give this a try with regular expressions. Can you think of
// any other solutions that don't use regular expressions?

function crunchRegExp(str) {
  return str.replaceAll(/(.)\1+/g, "$1");
}

console.log(crunchRegExp('ddaaiillyy ddoouubbllee'));
console.log(crunchRegExp('4444abcabccba'));
console.log(crunchRegExp('ggggggggggggggg'));
console.log(crunchRegExp('a'));
console.log(crunchRegExp(''));