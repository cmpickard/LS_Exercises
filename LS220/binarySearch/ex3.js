// Given an array nums, sorted in ascending order (where elements are equal to
//   or increase as you move through the array), determine if a specified number
//   target, appears more than three times in the array. The function should
//   return true if target is found at least four times, and false otherwise.
/*
input: asc sorted int array -- can contain dups + target int
output: boolean
rules:
- if the target integer appears 4+ times in the input array, return true
else return false

algorithm:
BINARY SEARCH
I have two tasks:
(1) determine whether / find the target in the input array
(2) find the length of the target-section of the input array

might need to do two binary searches:
Search #1: find first target -- if search fails, return false
Search #2: find last target -- search will always succeed if we get this far

FIND FIRST TARGET:
left = 0
right = nums.length - 1
mid
while (left <= right)

[1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4]
-mid = avg
-if (nums[mid] > target) right = mid - 1
-if (nums[mid] < target) left = mid + 1
-if (nums[mid] === target  && nums[mid - 1] !=== target) return mid
-else if (nums[mid] === target) right = mid - 1

then I can simply count the num of elements in that range
*/

function findFirstTarget(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target && nums[mid - 1] !== target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

function findLastTarget(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target && nums[mid + 1] !== target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return mid;
}

function isTargetFrequent(nums, target) {
  let firstIdx = findFirstTarget(nums, target);
  if (firstIdx === null) return false;
  let lastIdx = findLastTarget(nums, target);
  return (lastIdx - firstIdx) >= 3;
}
// Example test cases:
console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.