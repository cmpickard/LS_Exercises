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

function specialSort(a, b) {
  // eslint-disable-next-line eqeqeq
  if (a == b && a !== b) {
    return (typeof a === 'string' ? 1 : -1);
  } else {
    return Number.isNaN(a - b) ? a.codePointAt(0) - b.codePointAt(0) : a - b;
  }
}

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let sort1 = arr1.toSorted((a, b) => specialSort(a, b));
  let sort2 = arr2.toSorted((a, b) => specialSort(a, b));
  for (let idx = 0; idx < sort1.length; idx++) {
    if (sort1[idx] !== sort2[idx]) return false;
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