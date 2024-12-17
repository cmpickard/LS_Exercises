// Read through the code below and determine what will be logged. You may
// refer to the ASCII Table to look up character code values.

// function one() {
//   function log(result) {
//     console.log(result);
//   }

//   function anotherOne(...args) {
//     let result = '';
//     for (let i = 0; i < args.length; i += 1) {
//       result += String.fromCharCode(args[i]);
//     }

//     log(result);
//   }

//   function anotherAnotherOne() {
//     console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
//     anotherOne(116, 111);
//   }

//   anotherAnotherOne();
//   anotherOne(116, 104, 101);
//   return anotherOne;
// }

// one()(77, 97, 116, 114, 105, 120, 33);

/*
ANSWER:
Welcome
to
the
Matrix!


First the one() function is invoked. Inside that function call, the first line
that is executed is the call to anotherAnotherOne(). Inside that function call,
we have an outputting line that will output the result of evaluating the expre-
ssion, String.fromCharCode(87, 101, 108, 99, 111, 109, 101), which is the
string 'Welcome'.
Then, the final line of the anotherAnotherOne call is a call to anotherOne,
passing in two values, 116 and 111.
Inside the anotherOne call, we iterate through an array constructed from the
values passed in as arguments. That loop creates a new string value, 'to'
which is saved to the local var result and which value is then passed into
the log function as an argument. Inside that function, the string argument is
output to the console
The log call exits. The anotherOne call exits. The anotherAnotherOne call exits.
We resume execution on the second executable line of the one function call.

That line passes three values into the anotherOne function which will behave
the same as before. The result will be outputting the string 'the'.

Lastly, the one function exits and returns the anotherOne function object.

Back out in the top level scope, this returned function is immediately called
with a bunch of integer arguments. The function works similarly to the last
two times it was called, ultimately outputting the string, Matrix!
*/