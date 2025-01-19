// The concat function from the previous exercise could only concatenate a
// maximum of two arrays. For this exercise, you are going to extend that
// functionality. Refactor the concat function to allow for the concatenation of
// two or more arrays or values.

// Examples:

// concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
// concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]

function concat(arr, ...additions) {
  let newArr = arr.slice();

  for (let addition of additions) {
    if (Array.isArray(addition)) {
      for (let element of addition) {
        newArr.push(element);
      }
    } else {
      newArr.push(addition);
    }
  }

  return newArr;
}

console.log(concat([1, 2, 3], 4));                       // [1, 2, 3, 4]
console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]