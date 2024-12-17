// In this exercise, you will implement your own version of two Array methods:
// Array.prototype.pop and Array.prototype.push. The pop method removes the last
// element from an array and returns that element. If pop is called on an empty
// array, it returns undefined. The push method, on the other hand, adds one or
// more elements to the end of an array and returns the new length of the array.

// pop
function pop(arr) {
  let lastElement = arr[arr.length - 1];
  if (lastElement !== undefined) arr.length = arr.length - 1;

  return lastElement;
}

const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]


// push

function push(arr, ...vals) {
  let indexCounter = arr.length;

  for (let i = 0; i < vals.length; i++) {
    arr[indexCounter] = vals[i];
    indexCounter += 1;
  }

  return arr.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0                        

/* FURTHER EXPLORATION 

Why doesn't this solution worK?

function pop(array) {
  const poppedElement = array[array.length];        // should be length - 1
  array.splice[array.length];                       // should be length - 1

  return poppedElement;
}

function push(array, ...args) {
  const length = args.length;

  for (let i = 1; i < length; i += 1) {  // should start at 0, not 1
    array[i] = args[i];                // should be, array[length + i] = args[i]
  }

  return array.length;
}

ANSWER:

*/