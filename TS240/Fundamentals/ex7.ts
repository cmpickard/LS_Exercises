// Declare a variable userID without a type annotation and assign an
// initial number. Then, think about what would happen if you try to
// assign a string to the same variable on the next line. Test your
// hypothesis by actually doing it and observe the result.

// Expected outcome:

// An error indicating a type mismatch.

let userID = 1;
console.log(userID);
// Hypothesis: string is not assignable to type number

// userID = 'one';