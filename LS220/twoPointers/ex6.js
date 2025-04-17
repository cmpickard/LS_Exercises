"use strict";
// You have an ordered array nums consisting of integers. Your task is to
// determine whether there are any two distinct elements in the array where
// one element is exactly three times the value of the other element. The
// time complexity of the solution should be O(N).

// Restrictions:

// You should not use built-in methods like filter, map, reduce, or find.
// Do not use the includes method for checking existence in the array.
// Avoid using indexOf or lastIndexOf.

/*
input: sorted asc array in ints
output: boolean
rules:
- return true if one element of the input arr is = to 3 * another_element of
the input arry. otherwise, return false
- cannot be the same element (so, e.g., [0] would return false)
- can't use built-in list processors like filter / map / reduce / find / indexOf

datastructure:
array,
pointers

algorithm:
       A   R
[1,2,4,13,39]

-anchor = 0; runner = 1
-while runner < arry.length:
  -3anchor === runner val return true
  -3anchor < runner val increment anchor
    -after incrementing A, check if A === R, if so increment R
  -3anchor > runner val increment runner

return false
*/

// Example test cases:

function checkTripleMatch(nums) {
  let anchor = 0;
  let runner = 1;
  while (runner < nums.length) {
    let triple = nums[anchor] * 3;
    if (triple === nums[runner]) {
      return true;
    } else if (triple < nums[runner]) {
      anchor += 1;
      if (runner === anchor) runner += 1;
    } else {
      runner += 1;
    }
  }

  return false;
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);