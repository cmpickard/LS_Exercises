// You are given a sentence represented by a string str. Your objective is to
// reverse all the characters in each word of the sentence while ensuring that
// the case of each character remains unchanged. The spaces between words should
// be preserved as they are, and the overall order of the words in the sentence
// must not be altered.

// You should solve the problem without using the Array.prototype.reverse method

// Example test cases:

// console.log(reverseWords("Hello World") === "olleH dlroW");
// console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
// console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
// console.log(reverseWords("Launch School") === "hcnuaL loohcS");

/*
  split into words arr on ' '
  map each word in arr, using start/end pointers to swap letters:
  for each word, break into char array then slide pointers until start >= end
    -set start = 0
    -set end = word.length - 1;
    -swap letters
    -start += 1
    -end += 1

  retuen words.join(' ')
*/

function reverseWords(string) {
  let words = string.split(' ');
  return words.map((word) => {
    let chars = [...word];
    let start = 0;
    let end = chars.length - 1;
    while (start < end) {
      [chars[start], chars[end]] = [chars[end], chars[start]];
      start += 1;
      end -= 1;
    }

    return chars.join('');
  }).join(' ');
}


console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
