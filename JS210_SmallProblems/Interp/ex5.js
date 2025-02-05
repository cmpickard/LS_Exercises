// The Vigenere Cipher encrypts alphabetic text using polyalphabetic
// substitution. It uses a series of Caesar Ciphers based on the letters of
// a keyword. Each letter of the keyword is treated as a shift value. For
// instance, the letter 'B' corresponds to a shift value of 1, and the
// letter 'd' corresponds to a shift value of 3. In other words, the
// shift value used for a letter is equal to its index value in the
// alphabet. This means that the letters 'a'-'z' are equivalent to the
// numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character
// by applying the current shift value to a Caesar Cipher for that
// particular character. To make this more concrete, let's look at the
// following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!
// Notice that in the example, the key isn't moved forward if the
// character isn't in the alphabet. Like the Caesar Cipher, the Vigenere
// Cipher only encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the
// keyword doesn't matter—in other words, the resulting encryption won't
// change depending on the case of the keyword's letters
// (e.g., 'MEat' === 'mEaT').

// For a quick lookup of a ciphertext per character, you may consult
// this tabula recta. Each row of the table corresponds to a Caesar
// Cipher encryption using the columns' character letter as a shift value.

/*
Problem
  input: string of plaintext, string keyword
  output: ciphertext
  rules:
  - the plaintext should be encyphered using the same procedure as a Caesar
  cipher, except the shift value changes in accordance with the keyword input.
  - each letter in the keyword corresponds to an index shift value -- where 'a'
  is 0, 'b' is 1, etc.
  - the first letter in the plaintext is encyphered using a Caesar cipher
  shifted by value corresponding to the first letter of the keyword, the second
  letter in the plaintext... etc.
  - if the keyword is shorter than the plaintext, we start over at the beginning
  of the keyword after using the last letter
  - only alphabetic chars are encyphered and any chars we do not encypher DO NOT
  count as "using" the next char from the keyword
  - if the keyword is longer than the plaintext, then there will simply be
  unused letters in the keyword.
  - case doesn't matter in the keyword
  - assume keyword has only alphabetic chars

  questions:
  - what if no input?
  - what if input wrong type?
  - what if too many args?
  - what if keyword is ''?
  - what if keyword is longer than plaintext?
  - what if keyword contains non alphabetic chars?


Test Cases

Data Structure
handling the plaintext should work the same as with the Caesar cipher: i can
create a character array and map it to an array of encyphered chars

the big Q is how to handle the keyword. I can either iterate through it as a
string using indices, or convert it to an array.
I could go ahead and convert all the chars to shift-values, in which case, it
would be more natural to have an array of shift value integers.

If i'm going the array route, I could go so far as to create an array of exactly
the right size -- with the shift values repeating as needed. that way i won't
have to keep track of where I am in the keyword while iterating through the
plaintext array. Let's tentaitvely try that.

Algorithm
(0) replace keyword with keyword.toUpperCase()
(i) Create my shift value array
  (a) create an array of exactly the right length: where length = the number of
  character in plaintext that need to be encyphered. i can use a regex and match
  to count the number of alphabetic chars
  let numChars = ...
  (b) create a new string that is the keyword repeated N number of times, where
  N = (Math.ceil(numChars / keyword.length))
  (c) convert to char array
  (d) map into an array of integers where each int is the shift value associated
  with each letter in array
    (1) calculate char code of current char then subtract 'A'.charCodeAt(0)
    (2) return result
(ii) create array from plaintext then iterate through using map.
on each iteration,
  (a) check if alphabetic, if so:
  (b) pass the char and shiftValues.shift() into the caesar cipher function
(iii) return mapped array .join('')
*/

function vigenereCipher(plaintext, keyword) {
  let shiftVals = createShiftVals(plaintext, keyword);

  return [...plaintext].map(char => {
    return ((/[A-Z]/i.test(char))) ? shiftChar(char, shiftVals.shift()) : char;
  }).join('');
}

function createShiftVals(plaintext, keyword) {
  const CHAR_CODE_A = 'A'.charCodeAt(0);
  let upperKeyword = keyword.toUpperCase();
  let numChars = plaintext.match(/[A-Z]/ig).length;
  let repetitions = Math.ceil(numChars / upperKeyword.length);
  let keywordRepeat = new Array(repetitions)
    .fill(null)
    .map(_ => upperKeyword)
    .join('');
  return [...keywordRepeat].map(char => {
    let ascii = char.charCodeAt(0);
    return ascii - CHAR_CODE_A;
  });
}

function shiftChar(char, shift) {
  const UPPER_BOUND = 'Z'.charCodeAt(0);
  const LOWER_BOUND = 'z'.charCodeAt(0);
  const LETTERS = 26;
  const UPPER_PATTERN = /[A-Z]/;
  const LOWER_PATTERN = /[a-z]/;

  let asciiShifted = char.charCodeAt(0) + shift;

  if ((UPPER_PATTERN.test(char) && asciiShifted > UPPER_BOUND) ||
      (LOWER_PATTERN.test(char) && asciiShifted > LOWER_BOUND)) {
    asciiShifted -= LETTERS;
  }

  return String.fromCharCode(asciiShifted);
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat'));
// 'Bmnxmtpeqw dhz'x gh ar pbldal!'
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'AAAAAAAAAAAAA'));
// 'Pineapples don't go on pizzas!'
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab'));
// 'Riogaqrlfu dpp't hq oo riabat!'
console.log(vigenereCipher("dog", 'rabbit'));
// 'uoh'