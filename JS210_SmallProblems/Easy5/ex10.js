// Write a function that takes a string argument containing one or more words
// and returns a new string containing the words from the string argument.
// All five-or-more letter words should have their letters in reverse order.
// The string argument will consist of only letters and spaces. Words will be
// separated by a single space.

// Examples:
// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');            // "hcnuaL loohcS"

function reverseWords(string) {
  return string.split(' ')
    .map((word) => {
      return word.length > 4 ? Array.from(word).reverse().join('') : word;
    })
    .join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));
