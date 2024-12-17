// In this exercise, you will implement your own version of the
// Array.prototype.reverse method. Your implementation should differ from the
// built-in method in the following two ways:

// It should accept either a string or an array as an argument.
// It should return a new string or array.

function reverse(value) {
  let reversed = [];
  let isArray = Array.isArray(value);
  value = isArray ? value : value.split('');

  for (let i = value.length - 1; i >= 0; i--) {
    reversed.push(value[i]);
  }

  reversed = isArray ? reversed : reversed.join('')

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
Why doesn't this code work?

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  const reversed = [];
  const length = inputForReversal.length;

  for (let i = 0; i < length; i += 1) {
    reversed[length - i] = inputForReversal[i];  //should be, [length - (i + 1)] 
  }

  return reversed;
}

function reverseString(inputForReversal) {
  const stringArray = inputForReversal.split(' '); //should be, split('')
  return reverseArray(stringArray).join(' '); //should be, join('')
}


*/