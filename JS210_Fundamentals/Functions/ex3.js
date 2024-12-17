// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

// var myVar = 'This is global';

// function someFunction() {
//   myVar = 'This is local';
// }

// someFunction();
// console.log(myVar);

/* 
Answer:
  This is local

  The first line declares a new function-scoped variable with var, and initializes
  it to the value 'This is global'. This variable has global scope and will
  be accessible from inside the call to someFunction.
  The next line that gets executed is the call to someFunction, and inside that
  function call we reassign the myVar variable to a new string value, This is
  local.

  After we return from the function call, consol.elog(myVar) outputs to console
  the current value of myVar which is the strng, 'This is local'
*/