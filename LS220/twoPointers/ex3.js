// In this problem, you're given an array of integers nums and a target integer
// target. Your objective is to find the maximum sum that can be obtained by
//  adding two distinct elements from the array, where this sum is less than
//  the target.

// Requirements:
// The input will be an array of integers, nums, and a target integer, target
// You need to find the maximum value of nums[i] + nums[j] where i != j
//  and nums[i] + nums[j] < target.
// If no such pair exists, return -1.
// Example test cases:

// console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
// console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
// console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
// console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
// console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
// console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
// console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// // All test cases should log true

/*
input: arr of nums, target num
output: integer
rules:
-considering all possible 2-distinct-elements sums in our input arr -- return
the sum that is closest to the target without being equal to or more than
-max return value is thus target - 1. if we ever find that value, we can return
it immediately
-return -1 is all sums are more than the target


ALGORITHM:
- sort the array, THEN
- initialize currentMax as -1

- use an anchor/runner strategy:
  -set anchor at first element, then have the
  runner go along the remaining nums. at each position, sum anchor and runner
  and if the val is >= target, slide anchor down 1 and runner = anchor + 1;
  if val is < target and > currentMax, set currentMax equal to sum
  else, slide runner down 1

  -stop when anchor = arr.size - 1 || anchor >= target

*/

function twoSumLessThanTarget(nums, target) {
  nums.sort((a,b) => a - b);
  let currentMax = -1;
  let anchor = 0;
  let runner = 1;

  while (anchor < nums.length - 1 && nums[anchor] < target) {
    let sum = nums[anchor] + nums[runner];

    if (sum === target - 1) {
      return sum;
    } else if (sum >= target || runner === nums.length) {
      anchor += 1;
      runner = anchor;
    } else if (sum > currentMax) {
      currentMax = sum;
    }
    runner += 1;
  }

  return currentMax;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);

// start/end pointers
function twoSumLessThanTarget2(nums, target) {
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let maxSum = -1;
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum >= target) {
      end -= 1;
    } else {
      start += 1;
      if (maxSum < sum) maxSum = sum;
    }
  }

  return maxSum;
}

// Now do it with start / end pointers:
/*
sort
let currentMax = -1;
start = 0
end = nums.length - 1;

while (start < end) {
  let sum = nums[start] + nums[end]
  if (sum >= target) {
    end -= 1
  } else {
    if (currentMax < sum) currentMax = sum;
    start += 1;
  }
}

*/

console.log(twoSumLessThanTarget2([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget2([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget2([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget2([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget2([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget2([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget2([7, 4, 15, 11, 21, 9], 24) === 22);