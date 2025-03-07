// Write a function that checks whether a given positive integer num is the
// result of an integer multiplied by itself, which is typically referred to as
// a square integer. The function should return true if num is a square integer,
// otherwise false. The implementation should not rely on any square root
// computation provided by built-in Math library.

/*
input: positive int
output: booelan
rules:
- check whether the input is a perfect square -- i.e. whether there is any
positive integer, n, such that input = n * n
- don't use a squareroot function

ds:
just ints between num and 1

algorthm:
BINARY SEARCH
-between 1 and num?
Suppose 25:
left = 1
right = Math.ceil(num / 2) -> 13
mid = 7
calc midSquared = mid * mid; ->m49
if midSquared === num return mid
if midSquared > num, right = mid - 1
if midSquared < num, left = mid + 1;

left = 1
right = 6
mid = 3
midSquared = 9

left = 4
right = 6
mid = 5
midSquared = 25


*/

function isSquareInteger(num) {
  let left = 0;
  let right = Math.ceil(num / 2);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midSquared = mid * mid;
    if (midSquared === num) {
      return true;
    } else if (midSquared > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

// Example test cases:
console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);
