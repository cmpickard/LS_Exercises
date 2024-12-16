// Read through the following code. Why will it log 'debugging'?

// function debugIt() {
//   const status = 'debugging';
//   function logger() {
//     console.log(status);
//   }

//   logger();
// }

// debugIt();

/*
The status variable defined on the first line of the debugIt function has block-
scope, and is local to the function. That means it will remain accessable every-
where in the debugIt function, including in nested functions and blocks.
Thus, it is available inside the call to the logger function.

*/