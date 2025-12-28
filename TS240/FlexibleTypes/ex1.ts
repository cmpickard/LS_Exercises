// Create a function named wrapInArray that takes a parameter that could either
// be a string or a number, and returns an array containing just that value.


// ["hello"]
// [100]

function wrapInArray(arg: string): Array<string>;
function wrapInArray(arg: number): Array<number>;
function wrapInArray(arg: string | number): Array<string | number> {
  return [arg];
}