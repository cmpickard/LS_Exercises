// Write a function that displays an 8-pointed star in an nxn grid, where n is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when n is 7).

// Examples:
// star(7);
// // logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

// star(9);
// // logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

/*
PROBLEM
-input: positive odd integer 7 or larger -- call it n

-output: undefined -- but the console should log an 8-pointed star on a grid of
n X n

-rules:
  - the console should log n rows
  - the rules for what the star should look like, formally:
    - first and last rows have the points maximally far apart:
    star at index 0, star at index n-1, and a star at index (n - 1) / 2
    - the middle star is always at that same index: (n - 1) / 2
    - the left and right stars each move one column inward on the next row --
    that is, on the row one closer to the center
    - the rows immediately above center and immediately below center have all
    three stars in a row: from centerIndex - 1 to centerIndex + 1
    - SO, suppose a row R is a distance D from the center row. The number of
    spaces between the center star and the left and right stars is D - 1
    - the middle row is just N stars

    For all non-center rows, we have:
    outer spaces, star, innerspaces, star, innerspaces, star, outerspaces
    We need to be able to calculate how many spaces are in outerspaces and
    innerspaces, using the distance D from the center row
    Let's calc innerspaces in terms of D, then calc outerspaces in terms of
    inner spaces.

    centerRowIdx = (n - 1) / 2
    distance = Math.abs(currentRowIdx - centerRowIdx)
    innerspaces = distance - 1;
    outerspaces = (total spaces - (innerspaces * 2)) / 2
          total spaces = n - 3
    outerspaces = (n - 3) - (2 * innerspaces) / 2
    we'll log to console,
    outerSpaces + '*' + innerSpaces + '*' ... etc.

-questions
  -what if no input?
  -what if input is not a positive odd int of 7 or greater?
  -what if too many args?
  -is there a max integer?

TEST CASES

DATA STRUCTURES
strings

ALGORITHM
(0) calculate centerRowIdx
(i) iterate from 0 to n - 1 -- that's the rowIdx. for each row,
  (a) check if centerRow, if so output n stars (use repeater function)
  (b) else, calculate distance, innerspaces and outerspaces
  (c) create strings with the correct number of spaces for inner / outer
  (d) log to console by concatting spaces and stars
*/

function star(size) {
  let centerRowIdx = (size - 1) / 2;

  for (let currRowIdx = 0; currRowIdx < size; currRowIdx++) {
    if (currRowIdx === centerRowIdx) {
      printCenterRow(size);
    } else {
      printOuterRow(centerRowIdx, currRowIdx, size);
    }
  }
}

function printOuterRow(centerRowIdx, currRowIdx, size) {
  let distance = Math.abs(centerRowIdx - currRowIdx);
  let innerSpaces = distance - 1;
  let outerSpaces = ((size - 3) - (innerSpaces * 2)) / 2;
  let inner = ' '.repeat(innerSpaces);
  let outer = ' '.repeat(outerSpaces);
  console.log(outer + '*' + inner + '*' + inner + '*' + outer);
}

function printCenterRow(size) {
  console.log('*'.repeat(size));
}

star(7);
star(9);
star(11);
star(13);