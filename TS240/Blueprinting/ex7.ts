// Create a variable randomValue that is of type unknown. Perform a type
// assertion to treat it as a string, and then call the .toUpperCase()
// method on it.

// Expected output:

// Copy Code
// HELLO WORLD

let randomValue: unknown = 'hello world';
(randomValue as string).toUpperCase();