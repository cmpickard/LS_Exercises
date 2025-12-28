// Create two variables, computer and smartphone, using a type alias Device
// that requires manufacturer (string), model (string), and year (number).
// Demonstrate TypeScript's structural compatibility by creating a variable
// with a shape that has compatible properties with Device.

// Expected outcome:

// Demonstration of how TypeScript's structural typing system handles object
// shapes with compatible properties.

type Device = { manufacturer: string, model: string, year: number };

let computer: Device = { manufacturer: 'Dell', model: 'XPS13', year: 2015 };
let smartphone = { manufacturer: 'Nokia', model: 'IDK', year: 2015, headphoneJack: true };
let newDevice: Device = smartphone;

console.log(computer, smartphone, newDevice);