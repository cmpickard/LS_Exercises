// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

// function someFunction() {
//   myVar = 'This is global';
// }

// someFunction();
// console.log(myVar);

/* 
ANS:
The first line that gets executed in our program is the call to someFunction().
Inside that function, we reassign the variable myVar to the string value,
'This is global'. Only, there is no existing variable by that name, so JS
goes ahead and creates a property on the global object with the name myVar and
assigns to it the string 'This is global'

That property on the global object is then accessed in the final line of our
program -- b/c such properties are available everywhere in our program -- and
so This is global is output to console.

*/