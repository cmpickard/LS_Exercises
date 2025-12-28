// Implement a function assertNever that takes a value of type never and throws
// an error. Refactor the solution we had in the last exercise to add
// exhaustiveness checking to the getArea function above to ensure all
// cases are handled.

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === 'square') {
    return shape.sideLength ** 2;
  } else {
    let _exhaustiveCheck: never = shape;
    throw new Error(_exhaustiveCheck);
  }
}