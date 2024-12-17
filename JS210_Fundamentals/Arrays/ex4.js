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

  for (let i = 0; i < additions.length; i++) {
    let currentVal = additions[i];
    let isArray = Array.isArray(currentVal) ? true : false;
    if (isArray) {
      for (let j = 0; j < currentVal.length; j++) {
        newArr.push(currentVal[j]);
      }
    } else {
      newArr.push(currentVal);
    }
  }

  return newArr;
}

console.log(concat([1, 2, 3], 4));                       // [1, 2, 3, 4]
console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]