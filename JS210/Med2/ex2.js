// Read through the following code. Currently, it does not log the expected
// result. Explain why this happens, then refactor the code so that it works
// as expected.

// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true

/*
  When we use either equality operator to compare objects, JS assesses the truth
  value of the expression by assessing whether the two relata are located at the
  same location in memory -- i.e. whether they are literally one single object.

  What we intuitively *want* from such an expression is to check whether the
  contents of the two objects are the same. But we'll need to find a different
  way to do that since the equality operators only have the aforementioned use.

*/

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

let result = true;

if (Object.keys(person).length !== Object.keys(otherPerson).length) {
  result = false;
}

// this doesn't work for nested objects
for (let key in person) {
  if (person[key] !== otherPerson[key]) result = false;
}

console.log(result);    // false -- expected: true