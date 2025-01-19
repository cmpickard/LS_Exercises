// In this exercise, you will implement your own version of the
// Array.prototype.reverse method. Your implementation should differ from the
// built-in method in the following two ways:

// It should accept either a string or an array as an argument.
// It should return a new string or array.

function reverse(value) {
  let reversed = (typeof value === 'string') ? '' : [];
  for (let idx = value.length - 1; idx >= 0; idx--) {
    reversed = reversed.concat(value[idx]);
  }

  return reversed;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]

/* FURTHER EXPLORATION
Why doesn't this code work? */

// FIXED:
// function reverse(inputForReversal) {
//   if (Array.isArray(inputForReversal)) {
//     return reverseArray(inputForReversal);
//   } else {
//     return reverseString(inputForReversal);
//   }
// }

// function reverseArray(inputForReversal) {
//   const reversed = [];
//   const length = inputForReversal.length;

//   for (let idx = 0; idx < length; idx += 1) {
//     reversed[length - idx - 1] = inputForReversal[idx];
//   }

//   return reversed;
// }

// function reverseString(inputForReversal) {
//   const stringArray = inputForReversal.split('');
//   return reverseArray(stringArray).join('');
// }