// Write a function that takes two arrays as arguments and returns an array
// containing the union of the values from the two. There should be no
// duplication of values in the returned array, even if there are duplicates
// in the original arrays. You may assume that both arguments will always be
// arrays.

// Example:
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

function union(arr1, arr2) {
  let result = [];

  for (let el of arr1.concat(arr2)) {
    if (!result.includes(el)) result.push(el);
  }

  return result;
}

function union2(...arrs) {
  return arrs.flat().reduce((result, elem) => {
    if (!result.includes(elem)) result.push(elem);
    return result;
  }, []);
}

console.log(union([1, 3, 5], [3, 6, 9]));
console.log(union2([1, 3, 5], [3, 6, 9]));