// What does the following code log? Why is this so?

// let startingBalance = 1;
// const chicken = 5;
// const chickenQuantity = 7;

// function totalPayable(item, quantity) {
//   return startingBalance + (item * quantity);
// }

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity));

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity));

/*
  ANSWER:
  40
  45

  This behavior can seemingly be explained entirely using the notion of scope.
  We might say, "The startingBalance variable is block scoped at the highest
  level and so is available globally. That's why we are able to access its
  current value from inside our 2 calls to the totalPayable method.

  But a better explanation would involve an appeal to *closures*. That is, the
  underlying *mechanism* by which this kind of 'global variable' behavior is
  achieved is through the use of closures. When the totalPayable funciton is
  defined, JavaScript looks at all the variable references inside the function
  block and checks whether all of them can be resolved using local variables.
  If not, it checks to see whether those references can be resolved in the next-
  highest scope from the lexical position of the funciton definition... and so
  on until it finds (or fails to find) the relevant variables. This is all being
  done *during the creation phase* and is entirely independent of where our
  function is actually called in the program and, in fact, independent of
  whether our funciton gets called at all. For any variables referenced inside
  our function block that pick out non-local variables, Javascript places a
  pointer to the location of those variables inside a closure that it attaches
  to the function. That way, whenever the function gets called and makes a
  reference to those non-local variables, JavaScript will be able to peek inside
  the closure it created and find the pointers it needs to locate those
  variables' location in memory. Notice: the pointers point *to variables* and
  not *to values*. That fact explains why the functions are able to access the
  current value of global variables, rather than accessing the values they
  had at the point when the function was defined.
  SO
  In this particular code snippet, our function gets a closure package at the
  point of its definition which includes pointers to all the non-local vars
  that get referenced inside the function: startingBalance, chicken, and
  chickenQuantity. Because our function always has access to those pointers,
  any changes we make to those 3 variables -- any reassignments or mutations --
  will always be reflected inside function calls. That's why we find that our
  program is behaving as though the function knows about the reassignments we've
  been making to the startingBalance variables: because it does.
*/