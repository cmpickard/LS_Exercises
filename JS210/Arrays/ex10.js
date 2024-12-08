// The array comparison function that we implemented in the Arrays lesson
// (Alternate link if the previous link doesn't work) implicitly assumed that
//    when comparing two arrays, any matching values must also have matching
//    index positions. The objective of this exercise is to reimplement the
//    function so that two arrays containing the same values—but in a different
//    order—are considered equal. For example, [1, 2, 3] === [3, 2, 1] should
//    return true.


// function areArraysEqual(array1, array2) {
//   // ...
// }


function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let arr2Copy = arr2.slice();

  for (let idx = 0; idx < arr1.length; idx++) {
    let secondIdx = arr2Copy.indexOf(copy1[idx]);
    if (secondIdx === -1) return false;
    delete arr2Copy[secondIdx];
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true