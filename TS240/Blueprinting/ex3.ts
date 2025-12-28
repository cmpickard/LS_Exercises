// Create an interface Car that represents a vehicle with properties make
// (string), model (string), and year (number). Then create an object myCar
// that implements this interface.

// Expected outcome:

// An interface Car used to type-check an object myCar.

interface Car { make: string, model: string, year: number }
let myCar: Car = { make: 'Honda', model:'Civic', year:2004 };

console.log(myCar);