// Create a type alias called Direction that can take one of the following
// literal values: "left", "right", "up", "down". Then, declare a variable
// move of type Direction and set it to one of the allowed values.

//What
// do you think would happen if we reassign the move variable to a value that
// is not one of the Direction type, like "north"? Try it out and see if you
// were right.

// Expected outcome:

// A variable that can only be one of the few predefined strings.

type Direction = 'left' | 'right' | 'up' | 'down';

let move: Direction = 'left';
console.log(move);

// ANSWER: we'll get an error message that type string is not assignable to
// type Direction

// actually, the type complaint uses the string literal, not "string"
