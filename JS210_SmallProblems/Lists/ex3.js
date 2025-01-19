// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:
// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

function multiplyAllPairs(arr1, arr2) {
  let result = arr1.reduce((products, num1) => {
    let innerProducts = [];
    for (let idx = 0; idx < arr2.length; idx++) {
      innerProducts.push(num1 * arr2[idx]);
    }

    products.push(innerProducts);
    return products;
  }, []);

  return result.flat().sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));