// Write a function that rotates the last n digits of a number.
// For the rotation, rotate by one digit to the left, moving the first
// digit to the end.

// Examples:
// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

function rotate(str) {
  return str.slice(1) + str.slice(0, 1);
}

function rotateRightmostDigits(num, rightOffset) {
  let stringNum = String(num);
  let back = rotate(stringNum.slice(-rightOffset));
  let front = stringNum.slice(0, stringNum.length - rightOffset);

  return Number(front + back);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917