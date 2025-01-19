// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

// Examples:
// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

function repeater(string) {
  let doubled = '';
  for (let char of string) {
    doubled += (char + char);
  }

  return doubled;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));