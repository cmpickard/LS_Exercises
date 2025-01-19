// Write a function that takes an array of integers between 0 and 19 and returns
// an array of those integers sorted based on the English word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
// twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Do not mutate the argument.

// Example:

// Copy Code
// alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

const NUMBER_WORDS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixten',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

function alphabeticNumberSort(nums) {
  return nums.toSorted((num1, num2) => {
    let word1 = NUMBER_WORDS[num1];
    let word2 = NUMBER_WORDS[num2];

    if (word1 > word2) {
      return 1;
    } else if (word1 < word2) {
      return -1;
    } else {
      return 0;
    }
  });
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// FURTHER EXPLORATION
// The Array.prototype.sort method can also take a function expression as an
// argument. If you didn't use one the first time, try refactoring the
// solution using a function expression.