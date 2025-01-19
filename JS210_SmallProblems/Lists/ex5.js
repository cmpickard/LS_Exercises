// Write a function that takes a string argument and returns a list of
// substrings of that string. Each substring should begin with the first
// letter of the word, and the list should be ordered from shortest to longest.

// Examples:
// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));

// Further Exploration
// Rewrite leadingSubstrings using list processing functions. That is,
// convert the string into an array of some sort and use functions like map,
// filter, or reduce to get the desired substrings. (You will also need to
//   use join.) Try not to use forEach as that is too similar to the for
//   loop approach.