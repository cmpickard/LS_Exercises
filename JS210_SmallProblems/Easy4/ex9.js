// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of
// occurrences.

// Example:

// Copy Code
// const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2
// // suv => 1

function countOccurences(list) {
  let count = list.reduce((obj, elem) => {
    obj[elem] = (obj[elem] === undefined) ? 1 : obj[elem] + 1;
    return obj;
  }, {});

  for (let item in count) {
    console.log(`${item} => ${count[item]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];
countOccurences(vehicles);