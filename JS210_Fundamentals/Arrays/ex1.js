// Read through the code shown below. What does it log to the console at lines
// 6 and 10?


let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);

/*
ANSWER:
After the call to the pop method, it logs,
[1, 2, 3]
[1, 2, 3]

After the reassignment of myArray, it logs,
[1, 2]
[1, 2, 3]

The pop method is mutating and so the change is reflected in both of the
variables that contain a pointer to our single array object

But reassignment creates a brand new array object and points our variable
at that new object. That reassignment has no effect on the other variable --
viz. myOtherArray -- which continues to contain a pointer to the original
array.

*/