// What will the following code log to the console and 
// why? Don't run the code until after you have tried to answer.



// logValue();

// function logValue() {
//   console.log('Hello, world!');
// }

/* 
  ANS:
  Hello, world!

  During the first, creation phase -- prior to the execution of any code --
  Javascript identifies all of the variable and function declarations
  within each scope. For variables, only the declaration is hoisted, not the
  initial assignment. But with functions, the entire function body gets hoisted
  making each function available to be called throughout their respective scopes
  Thus, on the first line, we are able to call the logValue function success-
  fully.
*/

// FURTHER EXPLORATION
// Let's refactor the code a bit. What does it log now?
// What is the hoisted equivalent of this code?


// var logValue = 'foo';

// function logValue() {
//   console.log('Hello, world!');
// }

// console.log(typeof logValue);

/*
HOISTED EQUIVALENT:

function logValue() {
  console.log('Hello, world!');
}

var logValue   // has no effect b/c logValue is already a variable

logValue = 'foo;
console.log(typeof logValue);   =>  String 

*/