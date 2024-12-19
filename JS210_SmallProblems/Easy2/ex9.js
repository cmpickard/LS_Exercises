// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string with
// all of the non-alphabetic characters replaced by spaces. If one or more
// non-alphabetic characters occur in a row, you should only have one space
// in the result (i.e., the result string should never have consecutive spaces).

// Example:
// cleanUp("---what's my +*& line?");    // " what s my line "

function cleanUp(str) {
  let result = '';
  const letterPattern = /[A-Za-z]/;

  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str[idx];

    if (letterPattern.test(currentChar)) {
      result += currentChar;
    } else if (result.slice(-1) !== ' ') {
      result += ' ';
    }
  }

  return result;
}

console.log(cleanUp("---what's my +*& line?"));