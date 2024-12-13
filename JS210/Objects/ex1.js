// Identify the bug in the following code.
// Don't run the code until after you've tried to answer.

// const myObject = {
//   a: 'name',
//   'b': 'test',
//   123: 'c',
//   1: 'd',
// };

// myObject[1];
// myObject[a];
// myObject.a;

/* ANS
  The attempt to access the value assigned to key 'a' on the second line using
  bracket notation contains an error. When referring to keys inside bracket
  notation, we need to use quotation marks to indicate that it's a string
  literal and not a variable name.
*/