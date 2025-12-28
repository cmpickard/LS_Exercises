// Define a discriminated union Shape that can be either a Circle with kind:
// "circle" and radius properties, or a Square with kind: "square" and
// sideLength properties. Then write a function getArea that calculates
// the area of the given shape.

// Expected output for getArea({ kind: "circle", radius: 10 }):

// Copy Code
// 314.1592653589793
// Expected output for getArea({ kind: "square", sideLength: 10 }):

// Copy Code
// 100

interface Square { kind: 'square', sideLength: number };
interface Circle { kind: 'circle', radius: number };
type Shape = Square | Circle

let circle: Circle = { kind: 'circle', radius: 10 };
let square: Square = { kind: 'square', sideLength: 10};

function getArea(arg: Shape): number {
  if (arg.kind === 'square') {
    return arg.sideLength * arg.sideLength;
  } else {
    return arg.radius * arg.radius * Math.PI;
  }
}