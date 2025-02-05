// Write a function that displays a four-pointed diamond in an nxn grid,
// where n is an odd integer supplied as an argument to the function. You
// may assume that the argument will always be an odd integer.

// Examples:

// diamond(1);
// // logs
// *

// diamond(3);
// // logs
//  *
// ***
//  *

// diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

/*
input: odd int
output: undefined -- but function has console log side-effects
rules:
- input odd int, n, corresponds to the size of a diamond to be printed to the
console -- the diamond is int columns wide and int rows tall
- the diamond always has 1 star on the first and last rows, 3 stars on the 2nd
and 2nd to last rows, 5 stars on the 3rd and 3rd-to-last
-the middle row has n stars, and the next row has 2 fewer
-the stars are centered in the row, with the empty space padded out with spaces
-formal rules:
for a row, r, and a star size n:
  the center row num is at Math.ceil(n / 2) -- call that 'center'
  the distance from the center row, given by
  Math.abs(r - center) -- call that 'distance'
  the number of stars is equal to: n - (distance * 2) -- call that stars
  the number of spaces on each side is equal to (n - stars) / 2


questions:
- what if negative int?
- max int size?
- are there spaces to the right of the star symbols?

Test Cases:
// diamond(1);
// // logs
// *

// diamond(3);
// // logs
//  *
// ***
//  *

// diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

Data Structure
create string rows, then print them to the console.
could hold them in an array, but idk if that seems useful

I'll want a way to create a new string with x numbers of the same char
-- maybe a helper method

Algorithm
(i) make calculation for center:
  let center = Math.ceil(numRows / 2);
(ii) iterate through rows -- use for loop
  for (let row = 1; row <= numRows; row++) {
    -- on each iteration, calculate the distance from this row to the center
    row:
    let distance = Math.abs(row - center);
    let stars = numRows - (distance * 2);
    -- call helper method, pass in numRows, stars
    printRow(numRows, stars)
  }

printRow(numRows, stars) {
  i. calc number of spaces on either side of stars
    the number of spaces on each side is equal to (n - stars) / 2
  ii. generate a string w/ the correct number of spaces
  iii. generate a string with the correct number of stars
  -- use another helper method: repeatChar
  iv. return spaces + stars + spaces;
}

repeatChar(char, repetitions) {
  new Array(repetitions).fill(char).join('');
}

*/

function diamond(numRows) {
  let center = Math.ceil(numRows / 2);
  for (let row = 1; row <= numRows; row++) {
    let distance = Math.abs(center - row);
    let stars = numRows - (distance * 2);
    printRow(stars, numRows);
  }
}

function printRow(numStars, numRows) {
  let spaces = repeat(' ', (numRows - numStars) / 2);
  let stars = repeat('*', numStars);
  console.log(spaces + stars + spaces);

}

function repeat(char, repetitions) {
  return new Array(repetitions).fill(char).join('');
}

diamond(3);
diamond(5);
diamond(7);
diamond(9);

// Further Exploration
// The current solution builds a solid diamond—refactor it to build a hollow one

/*

Problem:
similar requirements, just need to work through exactly what changes in the
algorithm need to be made.

Everything can stay the same UNTIL we send inputs into printRow. We'll need a
new function, printHollowRow, with the following shape:
INPUTS: total number of rows, number of stars+hollow-spaces (called that volume)
OUTPUTS: undefined, but logs a hollow star row
RULES:
-if volume is 1, then the function behaves like before
-if volume is 3 or more then only 2 stars are printed -- the outermost
stars -- and the remaining slots are filled with spaces
  - the number of interior spaces is always volume - 2 -- call that innerSpaces

SO, we need to print a row that is:
spaces (calced as before) + * + innerSpaces + * + spaces

so we just need to create a new variable innerSpaces and assign to it a string
of the relevant length consisting only of spaces

*/

function hollowDiamond(numRows) {
  let center = Math.ceil(numRows / 2);
  for (let row = 1; row <= numRows; row++) {
    let distance = Math.abs(center - row);
    let stars = numRows - (distance * 2);
    printHollowRow(stars, numRows);
  }
}

function printHollowRow(volume, numRows) {
  let outerSpaces = repeat(' ', (numRows - volume) / 2);
  let innerSpaces = (volume <= 1) ? '' : repeat(' ', volume - 2);
  if (volume === 1) {
    console.log(outerSpaces + '*');
  } else {
    console.log(outerSpaces + '*' + innerSpaces + '*' + outerSpaces);
  }
}

hollowDiamond(3);
// *
//* *
// *

hollowDiamond(5);
//  *
// * *
//*   *
// * *
//  *