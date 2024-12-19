// Write a function that takes a positive integer, n, as an argument and logs a
// right triangle whose sides each have n stars. The hypotenuse of the triangle
// (the diagonal side in the images below) should have one end at the lower-left
// of the triangle, and the other end at the upper-right.

// Examples:

// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

function repeat(num, char) {
  let result = '';
  for (let count = 1; count <= num; count++) {
    result += char;
  }

  return result;
}

function triangle(size) {
  for (let stars = 1; stars <= size; stars++) {
    let spaces = size - stars;
    console.log(repeat(spaces, ' ') + repeat(stars, '*'));
  }
}


triangle(3);
triangle(5);
triangle(9);