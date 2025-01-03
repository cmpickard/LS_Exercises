// Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5. For instance, if
// the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 +
//   12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples:
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

function multisum(num) {
  return Array(num)
    .fill(null)
    .map((_, idx) => idx + 1)
    .filter((val) => val % 3 === 0 || val % 5 === 0)
    .reduce((acc, num) => acc + num, 0);
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));