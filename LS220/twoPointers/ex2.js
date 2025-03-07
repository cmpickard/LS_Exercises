// In this problem, you're given an array of numbers nums, and a specific
// integer k. Your objective is to compute the average value of each
// contiguous subarray of length k within the given array.

// Requirements:
// The input will be an array of numbers and an integer k.
// You need to find the average of every contiguous subarray of size k in the
// array.
// The output should be an array containing these averages.

// Example test cases:
// console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
// console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
// console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
// console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
// console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
// // [2.2, 2.8, 2.4, 3.6, 2.8]

/*
in: arry of ints, integer k
out: array of ints, size = 1 + inputArr.length - k
rules:
-find the avg of each k-length subarray and add the results in order to result

ds:
use pointers to grab each set of k elements

algo:

result = []
- start = 0
- end = start + size

*/

function average(arr) {
  return arr.reduce((sum, num) => sum + num) / arr.length;
}

function findAverages(nums, size) {
  let result = [];
  let start = 0;
  let end = start + size;
  while (end <= nums.length) {
    result.push(average(nums.slice(start, end)));
    start += 1;
    end += 1;
  }

  return result;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
// [2.2, 2.8, 2.4, 3.6, 2.8]


// Do it inside a reduce?
function findAverages2(arr, size) {
  let rollingSum = 0;
  return arr.reduce((avgs, num, idx) => {
    rollingSum += num;
    if (idx >= size - 1) {
      avgs.push(rollingSum / size);
      rollingSum -= arr[idx - (size - 1)];
    }

    return avgs;
  }, []);
}

console.log(findAverages2([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages2([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages2([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages2([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages2([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));