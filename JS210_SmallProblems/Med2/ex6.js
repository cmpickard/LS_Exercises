// Write a function that computes the difference between the square of the sum
// of the first n positive integers and the sum of the squares of the first n
// positive integers.

// Examples:
// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150

function sumSquareDifference(int) {
  let nums = Array(int).fill(null).map((_, idx) => idx + 1);
  let sum = nums.reduce((sum, num) => sum + num);
  let squares = nums.map(num => num ** 2).reduce((sum, num) => sum + num);

  return (sum ** 2) - squares;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));
