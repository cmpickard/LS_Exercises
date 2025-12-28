// Write a function printId that takes a parameter which could be either a
// number or a string. Inside the function, use a type guard to print
// "Your ID is a number" if the type is a number, or "Your ID is a string"
// if the type is a string.

// Expected output for printId(101):

// Copy Code
// Your ID is a number
// Expected output for printId("202"):

// Copy Code
// Your ID is a string

function printId(arg: number | string): void {
  if (typeof arg === 'number') {
    console.log('your id is a number')
  } else {
    console.log('your id is a string');
  }
}