// In the following code, a user creates a person object literal and defines
// two methods for returning the person's first and last names. What is the
// result when the user tries out the code on the last line?

// const person = {
//   firstName() {
//     return 'Victor';
//   },
//   lastName() {
//     return 'Reyes';
//   },
// };

// console.log(`${person.firstName} ${person.lastName}`);

/*
  ANS:
  because we are not using parentheses in the two places where we're attempting
  to call our object literal methods, JavaScript is going to return the function
  objects themselves rather than *calling* those functions.

  So the output we'll get is a string representation of our two function
  objects,   separated by a space.
*/