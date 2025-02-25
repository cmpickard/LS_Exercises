// We are assigned the task to implement a range function that returns an array
// of integers beginning and ending with specified start and end numbers. When
//  only a single argument is provided, that argument should be used as the
//  ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error
// saying Maximum call stack size exceeded? Can you fix the code, so it runs
// without error and satisfies the requirements?

function range(start, end) {
  if (end === undefined) [start, end] = [0, start];
  const rangeArr = [];

  for (let element = start; element <= end; element++) {
    rangeArr.push(element);
  }

  return rangeArr;
}

// Examples

console.log(range(10, 20));
console.log(range(5));

//FURTHER EXPLORATION
// There are two reasons why the following is not a working solution.
// Can you spot them?

// function range(start, end) {
//   if (!end) {
//     start = 0;
//     end = start;
//   }

//   // ...
// }

// REASON 1: this fails when end is explicitly assigned to 0
// REASON 2: this fails b/c it overwrites start before saving the value to end