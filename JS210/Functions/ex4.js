// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.


// var myVar = 'This is global';

// function someFunction() {
//   console.log(myVar);
// }

// someFunction();

/* 
ANSWER:
  On the first line, a new function-scoped variable myVar is defined and
  initialized to the string 'This is global'. This variable is globally scoped
  since it's lexical context is the top-level of our program.

  The next line that gets executed is the invocation of the someFunction function
  Inside that function call, console.log(myVar) outputs to console the current
  value of the myVar variable. 
  That is, there is an attempt to reference a variable by that name, and the
  attempt succeeds. First, JS checks the local scope for a variable of that name
  but finds none. So it starts searching one level higher, with in this case
  is the global scope of our program where it does find a variable by that name
*/