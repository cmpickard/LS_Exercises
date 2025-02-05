// Merge sort is a recursive sorting algorithm that works by breaking down an
// array's elements into nested sub-arrays, then combining those nested
// sub-arrays back together in sorted order. It is best explained with an
// example. Given the array [9, 5, 7, 1, 8, 2, 0, 6], let's walk through the
// process of sorting it with merge sort. We'll start off by breaking the
// array down into nested sub-arrays:

// [9, 2, 7, 6, 8, 5, 0, 1] -->              // initial list
// [[9, 2, 7, 6], [8, 5, 0, 1]] -->          // divide into two lists
// [[[9, 2], [7, 6]], [[8, 5], [0, 1]]] -->  // divide each sub-array in two
// // repeat until each sub-array contains only 1 value
// [[[[9], [2]], [[7], [6]]], [[[8], [5]], [[0], [1]]]]
// In the first step, we partition the array into an array of two sub-arrays,
// so that each sub-array contains approximately half of the entries. In the
// next step, we partition each sub-array in the same way. This process
// repeats until each of the innermost sub-arrays contains exactly one element.

// We then work our way back to a flat array by merging each pair of nested
// sub-arrays back together in the proper order:

// Copy Code
// [[[[9], [2]], [[7], [6]]], [[[8], [5]], [[0], [1]]]] -->
// [[[2, 9], [6, 7]], [[5, 8], [0, 1]]] -->
// [[2, 6, 7, 9], [0, 1, 5, 8]] -->
// [0, 1, 2, 5, 6, 7, 8, 9]
// For example, on the 2nd line, we merge [2, 9] with [6, 7], which becomes
// `[2, 6, 7, 9].

// Write a function that takes an array argument and returns a new array that
// contains the values from the input array in sorted order. The function
// should sort the array using the merge sort algorithm as described above.
// You may assume that every element of the array will be of the same data
// type—either all numbers or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

// Examples:
// mergeSort([9, 5, 7, 1]);               // [1, 5, 7, 9]
// mergeSort([5, 3]);                     // [3, 5]
// mergeSort([6, 2, 7, 1, 4]);            // [1, 2, 4, 6, 7]
// merge_sort([9, 2, 7, 6, 8, 5, 0, 1])); // [0, 1, 2, 5, 6, 7, 8, 9])

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

function merge(arr1, arr2) {
  if (!Array.isArray(arr1[0])) {
    let result = [];

    while (arr1.length + arr2.length > 0) {
      if (arr2.length === 0 || arr1[0] <= arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }

    return result;
  } else {
    return merge(merge(...arr1), merge(...arr2));
  }
}

function split(arr) {
  if (arr.length === 1) return arr;
  let halfIdx = Math.floor(arr.length / 2);
  return [split(arr.slice(0, halfIdx)), split(arr.slice(halfIdx))];
}

function mergeSort(arr) {
  return merge(...split(arr));
}

let arr = [4, 6, 1, 8, 7, 0, 3, 2];
console.log(mergeSort(arr));