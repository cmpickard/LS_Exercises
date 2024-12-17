// The penultimate function takes a string as an argument and returns the
// next-to-last word in the string. The function assumes that "words" are any
// sequence of non-whitespace characters. The function also assumes that the
// input string will always contain at least two words. The penultimate function
// in the example below does not return the expected result. Run the code
// below, check the current result, identify the problem, explain what the
// problem is, and provide a working solution.

// Examples:

function penultimate(string) {
  return string.split(' ')[-2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

/*
  The two calls to the penultimate function are both returning undefined. That
  is because of the erroneous attempt to access the second-to-last element of
  an array inside the penultimate function using a negative index. That is not
  a thing in JavaScript; we can not use negative indices to grab elements start-
  ing from the last. The string.split(' ') expression is returning an array of
  strings, but we then attempt to access a *property* of that array rather than
  an element -- viz. the property named '-2'. There is no such property so the
  expression resolves to undefined and that is what is returned.

  To fix this issue, we could, e.g., reverse the array and then grab the second
  element:
  return string.split(' ').reverse()[1];

  Another option would be to use the slice method which DOES let us use negative
  indices:

  return string.split(' ').slice(-2, -1)[0];

  Here we provide to arguments to slice: a beginning index and an ending
  index. If we provide just one, slice assumes we want all the elements from the
  starting index to the end of the array. (That would work just fine in this
  case, but it's generally good to be intentional about what we want and not
  rely on default behavior)
*/