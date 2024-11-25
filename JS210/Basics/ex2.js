const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

// Go over the following program. What does it log to the console at lines 7, 11,
// 15, and 19? Is it what you expected? Why or why not?

/* ANS
On line 7, it logs 'Hello' because true is truthy
On line 11, it logs nothing because myString is truthy and !mystring evaluates
to false, meaning the if statement does not execute the block
On line 15, it logs 'World' because myArray is truthy and !!myArray evalues
to true, meaning the if statement does execute the block
On line 19, it logs '!' because the logical expression evaluates as truthy.
While myOtherString is assigned to an empty string and so is falsy, the other
disjunct is an empty array, and empty arrays are truthy. Thus, the OR statement
evaluates as truthy and the if statement's block is executed
*/