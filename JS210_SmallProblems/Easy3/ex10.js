// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of
//  "it's" is 3, not 4.

// Examples:
// wordSizes('Four score and seven.');
// // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');
// // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");
// // { "5": 1, "2": 1, "3": 1 }
// wordSizes('');
//{}

function wordSizes(text) {
  let wordArr = text.split(' ');
  return wordArr.reduce((obj, word) => {
    let cleanedWord = word.replaceAll(/[^a-zA-Z]/g, '');
    let length = cleanedWord.length;
    if (length > 0) {
      obj[length] = obj[length] + 1 || 1;
    }

    return obj;
  }, {});
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes('What\'s up doc?'));
console.log(wordSizes(''));