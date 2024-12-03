// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

// let a = [1, 2, 3];

// function myValue(b) {
//   b[2] += 7;
// }

// myValue(a);
// console.log(a);

/*
ANSWER:
[1, 2, 10]

This first line declares a new variable a and assigns it to the array object
[1,2,3]. This variable is declared with let so it's block-scoped, and since
the declaration occurs in the top-level of the program, it is globally visible.

We then call the myValue function and pass in a pointer to the array as an
argument. Inside the function call, a copy of that pointer is assigned to the
local variable b, one of the funciton parameters.
We then use indexical reassignnment to replace the 3rd element of the array
that b points to with a number 7 greater than it's current value.
The function exits, implicitly returning undefined.

The last line outputs to console the current value of a. Since a points to the
same array that we modified inside the function call -- and since arrays are
mutable -- we find that the array is now [1, 2, 10]

*/