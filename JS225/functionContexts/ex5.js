// Our earlier implementation of the Function.prototype.bind was simplistic.
// Function.prototype.bind has another trick up its sleeve besides
// hard-binding functions to context objects. It's called partial function
// application.

// Alter the myBind function written in the previous exercise to support
// partial function application of additional arguments to the original function

function myBind(func, context, ...args) {
  return function(...moreArgs) {
    return func.apply(context, args.concat(moreArgs));
  };
}

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15