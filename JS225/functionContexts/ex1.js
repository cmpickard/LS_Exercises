// Read the following code carefully. What do you think is logged on line 7
// Try to answer the question before you run the code.

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); // What is logged?

/*
NaN (because undefined + undefined is NaN)
SINCE WE'RE NOT INSIDE A FUNCTION CALL, THIS IS BOUND TO THE GLOBAL OBJECT.
The only time when this references something other than the global object is
when we're inside of a function -- and not even always then!

*/