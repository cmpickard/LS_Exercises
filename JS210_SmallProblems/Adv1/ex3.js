// In the previous exercise, you wrote a function that transposed a 3x3
// matrix represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square
// matrices. Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it
// works with any MxN matrix with at least one row and one column.

// Examples:

// transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
// transpose([[1]]);                     // [[1]]

// transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

function transpose(matrix) {
  let result = Array(matrix[0].length).fill(null).map(_ => []);

  matrix.forEach((row, rowIdx) => {
    row.forEach((element, colIdx) => {
      result[colIdx][rowIdx] = element;
    });
  });

  return result;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]