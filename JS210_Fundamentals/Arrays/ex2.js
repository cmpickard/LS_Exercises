// In the previous exercise, the value of the reference gets copied. For this
// exercise, only the values of the array should be copied, but not the
// reference. Implement two alternative ways of doing this.

// Here is the code from the previous exercise:

let myArray = [1, 2, 3, 4];
let myOtherArray;

/* OPTION 1 */
for (let element of myArray) {
  myOtherArray.push(element);
}

/* OPTION 2 */
myOtherArray = myArray.slice(0);

/* OPTION 3 */
myOtherArray = myArray.split('').join('');