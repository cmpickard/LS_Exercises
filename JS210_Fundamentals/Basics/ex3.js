// One of the ways to manage the flow of a program is through the use of
// conditionals. Go over the code below and specify how many unique execution
// paths are possible.


if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

/* 
  ANSWER:
  1) condition1 is false; condition4 is false;
    -- plus any other combination of values for the other conditions
  2) condition1 is false; condition4 is true; condition5 is false
  3) condition1 is false; condition4 is true; condition5 is true
  4) condition1 is true; condition2 is false
  5) condition1 is true; condition2 is true
*/