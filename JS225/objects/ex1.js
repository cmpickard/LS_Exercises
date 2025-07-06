/* eslint-disable no-unused-vars */
/* eslint-disable max-lines-per-function */
// The code below is expected to output the following when run:


// > const helloVictor = createGreeter('Victor');
// > helloVictor.greet('morning');
// = Good Morning Victor

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}
// However, it instead results in an error. What is the problem with the code?
// Why isn't it producing the expected results?

/*
we forgot to use 'this' in the switch statement when trying to reference the
properties of the object whose method we're inside of
*/

// Further Exploration
// An alternative solution to this exercise is the following code:

// rest of code omitted for brevity

switch (timeOfDay) {
  case 'morning':
    msg += this.morning + ' ' + name;
    break;
  case 'afternoon':
    msg += this.afternoon + ' ' + name;
    break;
  case 'evening':
    msg += this.evening + ' ' + name;
    break;
}

// rest of code omitted for brevity
//Why does it work? What concept does this demonstrate?
/*
ANS:
This works because here, our reference to name results in a reference to the
variable created from the name variable and assigned to the argument passed into
our function. That variable is visible inside the switch statement and has the
same value (for now) as the this.name property so the result is the same.

In fact, that variable will REMAIN visible to the greet() method because it will
be bundled into that function's closure and so will always be referencable
*/