// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string with
// all of the non-alphabetic characters replaced by spaces. If one or more
// non-alphabetic characters occur in a row, you should only have one space
// in the result (i.e., the result string should never have consecutive spaces).

// Example:
// cleanUp("---what's my +*& line?");    // " what s my line "

function cleanUp(text) {
  let cleaned = '';
  Array.from(text).forEach((char) => {
    if (/[A-Za-z]/.test(char)) {
      cleaned += char;
    } else if (cleaned.slice(-1) !== ' ') {
      cleaned += ' ';
    }
  });

  return cleaned;
}

console.log(cleanUp("---what's my +*& line?"));

function cleanUpReduction(text) {
  return Array.from(text).reduce((cleaned, char) => {
    if (/[A-Za-z]/.test(char)) {
      return cleaned + char;
    } else if (cleaned.slice(-1) !== ' ') {
      return cleaned + ' ';
    } else {
      return cleaned;
    }
  },'');
}

console.log(cleanUpReduction("---what's my +*& line?"));