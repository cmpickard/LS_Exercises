// Define a function isStringArray that takes an array of unknown elements and
// uses a type predicate to check if the array only contains strings.

// Expected output for isStringArray([1, 2, 3]):

// Copy Code
// false
// Expected output for isStringArray(["test", "string"]):

// Copy Code
// true

function isStringArray(arg: Array<unknown>): arg is Array<string> {
  return arg.every(el => typeof el === 'string');
}