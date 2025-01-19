// Write a function that takes a number as an argument. If the argument is a
// positive number, return the negative of that number. If the argument is a
// negative number, return it as-is.

// Examples:
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

function negative(num) {
  return -1 * Math.abs(num);
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));

// Further Exploration
// An alternative solution would be to use the ternary operator
// (e.g., a ? b : c). If you haven't already used it, try refactoring the
// solution using the ternary operator.

// Did you notice that negative(0) returns -0? What is this value, -0? Is it
// different from 0 in some way? Use Google to look for an explanation of -0.
// In particular, see if you can learn how to differentiate between 0 and -0
// in a program.

function negative2(num) {
  return (num >= 0 ? -1 * num : num);
}

console.log(negative2(5));
console.log(negative2(-3));
console.log(negative2(0));