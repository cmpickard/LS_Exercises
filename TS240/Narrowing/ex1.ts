// Create a function printLength that takes a parameter which could either be
// a string or an array of strings. Using type narrowing, print the length of
// the string or the count of elements in the array to the console along with
// what type of the element was passed in.

// Expected output for printLength("hello"):

// Copy Code
// String length: 5
// Expected output for printLength(["hello", "world"]):

// Copy Code
// Array count: 2

function printLength(arg: string | Array<string>): void {
  if (typeof arg === 'string') {
    console.log(`this string has length ${arg.length}`);
  } else {
    console.log(`this array has length ${arg.length}`)
  }
}