// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

// const myArray = ['a', 'b', 'c'];

// console.log(myArray[0]);
// console.log(myArray[-1]);

// myArray[-1] = 'd';
// myArray['e'] = 5;
// myArray[3] = 'f';

// console.log(myArray[-1]);
// console.log(myArray['e']);
// console.log(myArray);

/*
  ANS:
  The first outputting line logs 'a'.
  The second attempts to access the value associated with the string key '-1' --
  since JS, not recognizing -1 as a valid index, will coerce it to a string and
  then try to locate the property of that name. There is no such property, so
  bracket notation expression will return undefined and that is what will be
  output to the console. (as a string, obvs)

  The next two lines create new *properties* on the myArray object but because
  the keys we're using are not valid indices, these do not count as elements of
  the array. Those values of those two new properties are retrieved by the next
  to outputting lines and sent to the console. (first 'd' is output and then
  '5')

  Finally, the last line outputs to console a string representation of myArray.
  But how does JavaScript convert an array to a string in cases where the array
  has non-element properties? Are those properties part of the string or not?

  They are!
  The array will be output like this, with the elements listed first in order:
  ["a", "b", "c", "f", "-1": "d", e: 5]
*/