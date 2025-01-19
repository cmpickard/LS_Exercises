// Write a function that takes a string argument consisting of a first name,
// a space, and a last name, and returns a new string consisting of the last
// name, a comma, a space, and the first name.

// Examples:

// Copy Code
// swapName('Joe Roberts');    // "Roberts, Joe"

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));

// Further Exploration
// What if the person had more than one first name?
// Refactor the current solution so that it can accommodate this.

function swapName2(name) {
  let last = name.split(' ').slice(-1);
  return last + ', ' + name.split(' ').slice(0, -1).join(' ');
}

console.log(swapName2('John James Roberts'));