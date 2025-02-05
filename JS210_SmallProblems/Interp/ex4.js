"use strict";

/* eslint-disable max-len */
// Write a function that implements the Caesar Cipher. The Caesar Cipher is one
// of the earliest and simplest ways to encrypt plaintext so that a message can
// be transmitted securely. It is a substitution cipher in which each letter in
// a plaintext is substituted by the letter located a given number of positions
// away in the alphabet. For example, if the letter 'A' is right-shifted by 3
// positions, it will be substituted with the letter 'D'. This shift value is
// often referred to as the key. The "encrypted plaintext" (ciphertext) can be
// decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case)
// Any other character is left as is. The substituted letters are in the same
// letter case as the original letter. If the key value for shifting exceeds
// the length of the alphabet, it wraps around from the beginning.

// Examples:
// // simple shift
// caesarEncrypt('A', 0);       // "A"
// caesarEncrypt('A', 3);       // "D"

// // wrap around
// caesarEncrypt('y', 5);       // "d"
// caesarEncrypt('a', 47);      // "v"

// // all letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
// caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

/*
Problem:
  Input: a string corresponding to the to-be-encrypted plaintext, & a (+?) int
  corresponding to the number of letters down the cipher will shift letters in
  the plaintext

  Output: a string correspondin to the encrypted cyphertext

  Rules:
  - each alphabetic character in the input string should be swapped in-place w/
  the corresponding cipher character.
  - there is a one-to-one mapping of input chars to cipher chars, the mapping
  consists of moving shifting each letter down by a fixed amount, given by the
  input int - the KEY
  - computationally, we can think of the shift as amounting to adding a fixed
  value to each character's utf char code
  -char case remains unchanged -- uppers stay upper, lowers stay low
  -non-alphabeticals are unchanged
  -the alphabet wraps around, so that 'z' always shifts starting with 'a'
  -the key can be greater than 26 -- in which case, we can treat it as
  key % 26.


  Questions:
  - no args?
  - too many args?
  - wrong type of args?
  - what if the integer shift val is negative? what if it's zero? what if it's
  more than abs(26)?
  - what if the string is empty?
  - what is the max length of the input string we might receive?

Test Cases:
(see below)

Data Structure:
i'll want to iterate through all the chars in the input string, so an array of
chars is the obvious choice. I can doing a mapping of input chars to output
chars and on each iteration check whether the input char is alphabetic and, if
so, whether it's upper or lower case, then shift it accordingly.
Then I can simply join the mapped array to recover a ciphertext string to return

Algorithm:
(i) replace key with key % 26
(ii) convert plaintext to array of chars, iterate through using map
['p', 'l', 'a'...].map(char => ...)
  (a) check whether char is alphabetic, if not return char -- use regex
  if (/[^a-z]/i.test(char)) return char
  (b) for all other cases, return char shifted by key;
  HELPER FUNCTION: shiftChar(char, shift)
    (i) get ascii value of char -- char.charCodeAt(0)
    const UPPER_BOUND = 'Z'.charCodeAt(0);
    const LOWER_BOUND = 'z'.charCodeAt(0);
    const LETTERS = 26;
    a = 97, z = 122
    A = 65, Z = 90
    (ii) check whether upper or lower -- use RegEx /[A-Z]/
      (a) for upper:
      ascii = (ascii + shift > UPPER_BOUND) ? ascii + (shift - LETTERS) : ascii + shift
      (b) for lower:
      ascii = (ascii + shift > LOWER_BOUND) ? ascii + (shift - LETTERS) : ascii + shift
    (iii) return String.fromCharCode(ascii)
(iii) return mappedArray.join('');
*/

function caesarEncrypt(plaintext, key) {
  let modKey = key % 26;

  let cipherArray = [...plaintext].map(char => {
    if (/[^a-z]/i.test(char)) return char;
    return shiftChar(char, modKey);
  });

  return cipherArray.join('');
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

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"
caesarEncrypt('a', 3);       // "d"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
