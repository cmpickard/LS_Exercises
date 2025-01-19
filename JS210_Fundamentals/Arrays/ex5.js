// In this exercise, you will implement your own version of two Array methods:
// Array.prototype.pop and Array.prototype.push. The pop method removes the last
// element from an array and returns that element. If pop is called on an empty
// array, it returns undefined. The push method, on the other hand, adds one or
// more elements to the end of an array and returns the new length of the array.

// pop
function pop(arr) {
  if (arr.length === 0) return undefined;
  let last = arr.slice(-1)[0];
  arr.length -= 1;
  return last;
}

const array1 = [1, 2, 3];
console.log(pop(array1));                       // 3
console.log(array1);                            // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]


// push
function push(arr, ...vals) {
  for (let element of vals) {
    arr[arr.length] = element;
  }

  return arr.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));             // 6
console.log(array2);                            // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0

/* FURTHER EXPLORATION

Why doesn't this solution worK? */

// function pop(array) {
//   const poppedElement = array[array.length - 1];      // should be length - 1
//   // eslint-disable-next-line no-unused-expressions
//   array.splice(array.length - 1);                     // should be length - 2

//   return poppedElement;
// }

// function push(array, ...args) {
//   const length = args.length;
//   let counter = 0;
//   for (let idx = length; idx < (length + args.length); idx += 1) {
//     array[idx] = args[counter];
//     counter += 1;
//   }

//   return array.length;
// }
