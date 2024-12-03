// What will the following code log to the console and why?
// don't run the code until after you have tried to answer.

// var myVar = 'This is global';

// function someFunction() {
//   var myVar = 'This is local';
// }

// someFunction();
// console.log(myVar);

/* ANSWER
  'This is global'

  The first line declares a new function-scoped, global variable named myVar and
  assigns it to the string 'This is global'
  The next executed line is the invocation of someFunction()
  Inside the function call, we declare a new function-scoped varaible with var.
  Because the lexical context of this declaration is the someFunction function,
  the scope of this variable is local to this function.
  While this new variable has the same name as the global scoped var declared
  on the first line; it is distinct and shadows the other variable. This inner
  scoped variable is initialized with the value 'this is local'

  The function closes and the local myVar disappears. On the final line,
  we log the present value of myVar, which reference grabs the value assigned
  to the global myvar variable defined on the first line -- This is global --
  and outputs it to console.
*/