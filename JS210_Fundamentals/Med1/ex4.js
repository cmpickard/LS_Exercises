// The getSelectedColumns function selects and extracts specific columns to a
// new array. Currently, the function is not producing the expected result. Go
// over the function and the sample runs shown below. What do you think the
// problem is?

// function getSelectedColumns(numbers, cols) {
//   var result = [];

//   for (var i = 0, length = numbers.length; i < length; i += 1) {
//     for (var j = 0, length = cols.length; j < length; j += 1) {
//       if (!result[j]) {
//         result[j] = [];
//       }

//       result[j][i] = numbers[i][cols[j]];
//     }
//   }

//   return result;
// }

// // given the following arrays of number arrays
// const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// // `array1` in row/column format
// // [[1, 2, 3],
// //  [4, 5, 6],
// //  [7, 8, 9]]

// getSelectedColumns(array1, [0]);     // [[1]];
// expected: [[1, 4, 7]]

// getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]];
// expected: [[1, 4, 7], [3, 6, 9]]

// getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]];
// expected: [[2, 2, 2], [3, 3, 3]]

/* One glaring issue is that there's variable shadowing inside the second
for... loop. The outer loop is using a local variable named length to store the
value for each iteration, but since the inner loop ALSO uses a local variable
named length for ITS values, all references to the length variable from inside
the inner loop will pick out the inner loop's version of that variable.

EXCEPT there are no references to length inside either for loop's block. So...
what's the issue? The variable shadowing appears not to matter.

The issue is that the outer block declares the length variabel using var rather
than let, and since var has function scope rather than block scope, the inner
loop does not count as a distinct scope. Since the inner loop is not a distinct
scope, the second for loop actually *reassigns* the length variable created in
the first loop rather than creating a new one. This is a peculiarity of how var
works. For let-declared variables, we will throw an error if we try to declare
a variable of the same name inside a scope that already has a declaration for
a variable of that name. (N.B. that error only occurs if both declaration are
in the same block scope. No error occurs if one of the let variables is in an
outer scope. While that var is in-scope for the second declaration, JS will
simply create a new inner-scope variabel of the same name that shadows the
outer scope variable.
For varioables declared with var, in contrast, a second declaration of the same
variable will never result in an error, even if both declarations are inside
the same function scope. Instead, JS will simply quietly reassigne the variable
to the initializer value specified in the second declaration)
*/