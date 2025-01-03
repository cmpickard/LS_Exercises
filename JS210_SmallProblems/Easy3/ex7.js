// Write a function that takes an array of numbers and returns an array with the
// same number of elements, but with each element's value being the running
// total from the original array.

// Examples:

// Copy Code
// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

function runningTotal(nums) {
  return nums.reduce((arr, num) => {
    let lastNum = arr.slice(-1)[0] ?? 0;
    arr.push(lastNum + num);
    return arr;
  }, []);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// FURTHER EXPOLORATION
// Can you rewrite the solution with map?

function runningTotal2(nums) {
  let total = 0;

  return nums.map((num) => {
    let newVal = num + total;
    total += num;
    return newVal;
  });
}

console.log(runningTotal2([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal2([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal2([3]));                    // [3]
console.log(runningTotal2([]));                     // []