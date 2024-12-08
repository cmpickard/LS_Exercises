// The oddities function takes an array as an argument and returns a new array
// containing every other element from the input array. The values in the returned
// array are the first (index 0), third, fifth, and so on, elements of the input
// array. The program below uses the array returned by oddities as part of a
// comparison. Can you explain the results of these comparisons?

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

// oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
// oddities(['abc', 'def']) === ['abc'];         // false

/* ANS
  When JS evaluates equality statement between two arrays (or between any
  two objects), it checks whether the two object are literally one single
  value stored in a single place in memory. It DOESN'T check whether the
  two relata have all the same properties / elements / etc. It merely looks to
  see if they refer to the same locaiton in mem.
*/