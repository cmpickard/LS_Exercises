// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

// let a = 7;

// function myValue(a) {
//   a += 10;
// }

// myValue(a);
// console.log(a);

/*
  7

  The first line declares a new variable, a, and initializes it to the value 7.
  Then there's a call to the myValue function, with the value of a passed in
  as an argument.
  Inside the myValue call, a new variable also named a is created. this 
  variable is locally scoped to the function and shadows the outerscoped variable
  of the same name. we then reassign the local version of a from 7 to 17. This
  has no effect on the outer variable a. That fact is actually overdetermined:
  first, even if the inner variable wasn't shadowing the outer variable, the
  reassignment inside the function would not have affected the outer variable.
  That's because numbers are primitives and immutable, so there's no way for 
  any code inside the function to affect what value is stored in the outer var.
*/