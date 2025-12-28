// Create a function named toUpperCaseArray that takes an array of strings,
// converts each string to uppercase, and returns a new array.

// When given ['hello', 'world'], the function returns ['HELLO', 'WORLD'].

function toUpperCaseArray(arr: Array<string>): Array<string> {
  return arr.map(el => el.toUpperCase());
}

toUpperCaseArray(['hello', 'world']);