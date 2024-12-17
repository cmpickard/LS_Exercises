// What will the following program log to the console? Can you explain why?

// const array = ['Apples', 'Peaches', 'Grapes'];

// array[3.4] = 'Oranges';
// console.log(array.length);               // 3
// console.log(Object.keys(array).length);  // 4

// array[-2] = 'Watermelon';
// console.log(array.length);               // 3
// console.log(Object.keys(array).length);  // 5

/*
  In JS, arrays are a special species of object that have , inter alia, a length
  property that keeps track of the number of elements in the array. As
  initialized on the first line, our array has 3 elements.
  The next line may appear to be adding a 4th element to the array, but its not.
  Only positive integers (and zero) are valid indices for array elements and
  only key/value pairs with a valid index as a key count as elements.
  Likewise, then, the key/value pair we add to the array object a few lines
  down also does not add an element to the array, but simply another property'
  on the array object.

  The array.length property keeps track ONLY of the array's number of elements
  so it remains at 3. But we can see that the object is acquiring new keys
  as we add on our two additional properties.
*/
