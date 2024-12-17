// In the previous exercise, the value of the reference gets copied. For this
// exercise, only the values of the array should be copied, but not the
// reference. Implement two alternative ways of doing this.

// Here is the code from the previous exercise:

let myArray = [1, 2, 3, 4];
let myOtherArray;

/* OPTION 1 */
myOtherArray = myArray.concat([]);

/* OPTION 2 */
for (i = 0; i < myArray.length; i++) {
  myOtherArray[i] = myArray[i];
}

/* OPTION 3 */

myOtherArray = myArray.slice();