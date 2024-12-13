// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

// const myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };

// const prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';

// console.log(myObject[prop2]);
// console.log(myObject.prop2);

/*
  ANS:

  On line 9, JS will interpret myObject[prop2] as an attempt to
  assign a value to key we get from evaluating the
  expression prop2. In this case, because we haven't used quotes to mark out
  prop2 as a string literal, prop2 will be interpreted as a variable name, and
  so JS will attempt to find a variable of that name defined for the current
  lexical context. There is one and it has been assigned the string literal,
  '456'
  Thus, line 9 creates a new key/value pair in myObject. The key is '456' and
  the value is '678'.

  This is why the first console outputting line sends '678' to the console.
  myObject[prop2] retrieves the value assigned to the key '456', which as we've
  just seen is the string '678'.

  The second console outputting line sends '456' to the console. This is because
  when we use dot notation to reference an object's properties, we do not need
  to use quote marks around the name to make sure the name is not interpreted
  as a variable. (This is actually why we can't use variable names w/ dot
  notation! JS always assumes the characters after the dot are a string literal
  and there's no way to cancel that assumption.)
  Thus, what's returned and then output to console is the value assigned to the
  key 'prop2', which is the string literal '456'. (It's not the original value
  of '234' because the 'prop2' key was reassigned on line 8, where we used
  quotation marks and bracket notation to reassign the value associated with the
  key 'prop2'.)
*/


// FURTHER EXPLORATION
// Here is another example. What do you think will be logged to the
// console this time, and why?

// const myObj = {};
// myObj[myFunc()] = 'hello, ';

// function myFunc() {
//   return 'funcProp';
// }

// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);

/*
  ANSWER:
  Line one declares a new constant variable, myObj, and points it at an empty
  object literal.
  Line two adds a new key/value pair to myObj. The value is the string literal
  'hello, ' and the key is the value that the expression myFunc() resolves down
  to. Since myFunc() is a function call, JS will search through the current
  lexical
  context to find a function by that name. It finds one. While the myFunc
  function is defined below line two, due to hoisting both the variable that
  points to the function and the function block are already in scope. So myFunc
  is successfully called. The function returns the string literal 'funcProp', so
  that is the key that is paired with the aforementioned value.

  The next line will output to console a string representation of the object
  literal we've been working with, and we'll see that it has exactly one
  key/value pair. The key is 'funcProp' and the value is 'Hello, '

  The next line is the same as line2 except this time the key we're referencing
  already exists in myObj, so this is a reassignment rather than an initial
  assignment. As before, the call to myFunc returns the string value 'funcProp'
  which then is used as the key. The value for that key is reassigned to the
  string literal, 'world!'.

  The last line is like the other console outputting line. We get a string
  representation of myObj which has one property, funcProp: 'world!'
*/