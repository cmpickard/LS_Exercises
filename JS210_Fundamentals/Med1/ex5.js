// What will the following code snippets log?

// Code Snippet 1
// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

/* ANSWER
The total value is 15.
First, the function definition is hoisted to the top of the program -- that
includes both the implicit function variable declaration and the function's
block. At this point, counter references a function object. The two variable
declarations are also hoisted but (a) below the function defintion, and (b) in
the case of the counter variable, the variable name is already in-use in the
present function scope, so hoisting the declaration has no effect.

Once execution begins, counter is immediately reassigned to 5.

Since both counter and rate are defined before our outputting line and have
already been initialized with values, so those values are available on the
outputting line.
*/


// Code Snippet 2
// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// var counter = 5;
// var rate = 3;
/* ANSWER
The total valus is NaN

In the creation phase, JS is going to hoist first the function and then
our two var variable declarations to the top of
the program. The hoisting of the function will result in a variable named
counter being declared and initialized to the function object. This means that
the counter variable declared later does not need to be hoisted since JS is
already aware that there is a variable by that name in scope.

For the rate var, only the declaration is hoisted, not the initializer
value. The var variable will be initialized to undefined and won't receive
the intended assignment until the computer executes the relevant lines.

Thus, inside our outputting line, we are actually mulitiply a function by
undefined which returns NaN, which gets converted to a string and is output.
*/

// Code Snippet 3
// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));
/* ANSWER
The total value is 15

This one works the same as the first one. The function is hoisted to the top of
the program. The function variable counter points to the function object.
Then the two var declarations are hoisted. As before, JS already knows about
the existance of a variable named counter in this scope, so the hoisting of the
var declaration of counter has no effect.

*/

// Code Snippet 4
// let counter = 5;
// let rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));
/* ANSWER
This will throw an error.
Using let to declare variables, we are not permitted to re-declare a variable
inside the same scope as the original declaration.
During the creation phase, JS will notice that we have both declared a variable
with let named counter AND declared a function variable named counter. This will
cause an error to be thrown for the aforementioned reason, and the error will
say it was raised on line 4, the function definition line.

That last is a little surprising if we are thinking of hoisting as raising the
function above the let declarations. We might expect on that model that the
error would occur on line 1, which would be the second encounter with a variable
declaration named counter. But this is one of those cases where we see the
shortcomings of the hoisting model. JS is actually doing its creation phase
business in order and not shuffling things around. Thus, it only notices the
problem when it gets to the function declaration on line 5.

*/