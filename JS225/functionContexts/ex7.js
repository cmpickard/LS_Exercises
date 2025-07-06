// Read the following code carefully. Will the JavaScript garbage
// collection mechanism garbage collect the array assigned to the variable
// array after the function pushIt is called on line 11?

function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt(); // GC after this line?

// more code

/*
ANSWER:
No.

We;ve assigned to the variable pushIt an arrow function that mutates the array
that the var array points to by pushing an empty string into it AND then returns
a reference to that array. That means that that array cannot be garbage
collected b/c the pushIt function needs to reference it in order to work
properly
*/