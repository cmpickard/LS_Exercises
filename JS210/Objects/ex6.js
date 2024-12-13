// A user wrote a function that takes an array as an argument and returns its
// average. Given the code below, the user expects the average function to
// return 5. Is the user's expectation correct? Why or why not?

// const myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5;

// function average(array) {
//   let sum = 0;

//   for (let i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }

//   return sum / array.length;
// }

// average(myArray);

/*
  ANSWER:
  The 2nd and 3rd lines might look like indexical reassignment of the last and
  second-to-last elements of the array, but they are acutally creating to new
  non-element propertiesw on the myArray object.

  This ends up matter later in our for loop inside the call to the average
  function. There, we iterate from -2 to 2 and use bracket notation to grab
  elements at those indices in the array object assigned to the variable array.
  However, -2 and -1 are not valid indices and so what actually happens on those
  two iterations is that JS coerces those numbers to strings and then looks up
  the values associated with those string keys -- 5 in the first iteration and
  5 in the second iteration.
  Thus, after the four iterations of loop are complete, the variable sum
  actually stores the number 20.

  We might still expect the average to come out to five, since we then divide
  20 by the size of our array. But... what size is the array? We might be
  tempted to say that it has size four, but that's not correct. The length
  property of an array stores the highest valid index number + 1. Since the
  highest valid index number is 1, that means the length of this array is 2.

  Thus, 20 / 2 evaluates to 10. And so 10 is what gets returned out of our call
  to the average method.
*/

// FURTHER EXPLORATION
// Refactor the average function so that it returns the result that the
// user expected, 5.

// ANS: we should just iterate starting from 0 rather than staring from -2.