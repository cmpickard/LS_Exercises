// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

// let a = 7;

// function myValue(b) {
//   b += 10;
// }

// myValue(a);
// console.log(a);

/* 
ANS:
  the first line declares a new variable, a, and initializes it to the number
  7. Since this is a let declaration, the variable is block-scoped and since
  the variable declaration occurs in our programs top-level it is globally
  visible.
  The next line that's executed is the call to myValue, where we pass in the
  value stored in a as an argument
  
  Inside the function call, a new variable b is created and assigned to a copy
  of the value passed in in the function call -- namely, 7.
  Then the function reassigns that local variable b to 17. The function ends,
  returning undefined

  Finally, the console.log(a) statement outputs 7, the current value of a, to
  the console.

*/