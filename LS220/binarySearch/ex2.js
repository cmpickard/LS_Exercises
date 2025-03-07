"use strict";
/* eslint-disable max-len */
// In this problem, you're presented with a nested array, matrix, which has
// two key characteristics:

// Each subarray in the matrix is sorted in ascending order.
// The first element of each subarray is larger than the final element of the
// preceding subarray.
// Your task is to determine whether a given integer, target, exists within
// this nested array.

// The time complexity of your solution should be O(log(M*N)).
/*
input: nested, double sorted 2D array + target int
output: boolean
rules:
-elements in each nested array is asc sorted
-elements of outer array are also sorted AND have the restriction that there is
no overlap in their ranges. The last element of subarray N is smaller than the
first element of subarray N + 1
-return true if target is somewhere inside the 2D array, false otherwise

algorithm:
BINARY SEARCH
[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20

Search #1: finding the correct subarry
- left = 0
- right = matrix.length - 1;
- mid = Math.floor((left + right) / 2);
CHECK:
first = matrix[mid][0]
last = matrix[mid][matrix[mid].length - 1];

if (first <= target && last >= target) return mid
else if (first <= target) left = mid + 1;
else right = mid - 1;

*/

// Example test cases:
function findInNestedArray(matrix, target) {
  let subarray = matrix[findSubArray(matrix, target)];
  if (!subarray) return false;
  let left = 0;
  let right = subarray.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (subarray[mid] === target) {
      return true;
    } else if (subarray[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function findSubArray(matrix, target) {
  let left = 0;
  let right = matrix.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let first = matrix[mid][0];
    let last = matrix[mid][matrix[mid].length - 1];
    if (first <= target && last >= target) {
      return mid;
    } else if (first <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.