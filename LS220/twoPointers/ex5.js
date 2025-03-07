// In this problem, you are provided with an ascending order array of
// integers, nums. Your task is to count the number of pairs in this array
// whose sum is greater than a given target value, target.

// Constraints:

// The array nums is sorted in ascending order.
// No duplicate pairs should be counted. For instance, if nums contains [1, 2]
// and target is 2, then (1, 2) is a valid pair since 1 + 2 > 2.
// You shouldn't include (2, 1)
// Example test cases:

/*
input: sorted arr of ints, target int
output: integer count
rules:
- considering all pairs of distinct elements from input array, count the number
of pairs whose sum is greater than the target integer
- no duplicate pairs (if (1, 2) then don't include (2, 1))

structure:
stick with the array

algorithm:
the array is sorted, so i can use a pointer based solution
probably start / end?
start = 0
end = length - 1
sum = start + end

WHILE (start < end)
INCREMENT START if sum < target
INCREMENT END && INCREMENT COUNT if sum > target
*/

function countPairs(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let count = 0;

  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum <= target) {
      start += 1;
    } else {
      count += end - start;
      end -= 1;
    }
  }

  return count;
}

console.log(countPairs([1, 2, 3, 4, 5], 6) === 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) === 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) === 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) === 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) === 0);
// No pairs