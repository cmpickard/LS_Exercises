// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

// var myVar = 'This is global';

// function someFunction() {
//   var myVar = 'This is local';
//   console.log(myVar);
// }

// someFunction();

/*
ANSWER:
'This is local'
console.log(myVar) logs the current value of myVar. On that line, inside the
someFunction call, myVar refers to the local defined on the previous line. That
variable is shadowing the outer scope variable of the same name defined on the
first line. 
Thus what gets output is the string 'This is local'


*/