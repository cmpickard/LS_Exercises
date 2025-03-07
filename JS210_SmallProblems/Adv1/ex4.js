// As we saw in the previous exercises, a matrix can be represented by an array
// of arrays. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6
// is represented by the following array of arrays:

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// A 90-degree rotation of a matrix produces a new matrix in which each side of
// the matrix is rotated clockwise by 90 degrees. For example, the 90-degree
// rotation of the matrix shown above is:

// 3  4  1
// 9  7  5
// 6  2  8
// A 90-degree rotation of a non-square matrix is similar. For example, given
// the following matrix:

// 3  4  1
// 9  7  5
// its 90-degree rotation is:

// 9  3
// 7  4
// 5  1
// Write a function that takes an arbitrary MxN matrix, rotates it clockwise
// by 90-degrees as described above, and returns the result as a new matrix.
// The function should not mutate the original matrix.

// Examples:

// const matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// const matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// const newMatrix1 = rotate90(matrix1);
// const newMatrix2 = rotate90(matrix2);
// const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

function rotate90(matrix) {
  let result = Array(matrix[0].length).fill(null).map((_) => []);
  let reversed = matrix.map(el => el).reverse();
  reversed.forEach((row, rowIdx) => {
    row.forEach((element, colIdx) => {
      result[colIdx][rowIdx] = element;
    });
  });

  return result;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

console.log(rotate90(matrix1)); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(rotate90(matrix2)); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(rotate90(rotate90(rotate90(rotate90(matrix2)))));
// [[3, 7, 4, 2], [5, 1, 0, 8]]