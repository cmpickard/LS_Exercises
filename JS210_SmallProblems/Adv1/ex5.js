// Write a function that takes two sorted arrays as arguments and returns a
// new array that contains all the elements from both input arrays in sorted
// order.

// You may not provide any solution that requires you to sort the result
// array. You must build the result array one element at a time in the
// proper order.

// Your solution should not mutate the input arrays.

// Examples:

// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]

function merge(arr1, arr2) {
  let result = [];
  arr1 = arr1.slice();
  arr2 = arr2.slice();

  while (arr1.length + arr2.length > 0) {
    if (arr1[0] <= arr2[0] || arr2.length === 0) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]