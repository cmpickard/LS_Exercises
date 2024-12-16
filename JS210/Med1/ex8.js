// The productOfSums function shown below is expected to return the product of
// the sums of two arrays of numbers. Read through the following code. Will it
// produce the expected result? Why or why not?

// function productOfSums(array1, array2) {
//   let result = total(array1) * total(array2);
//   return result;
// }

// function total(numbers) {
//   let sum;

//   for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
//   }

//   sum;
// }

/*
  No.
  (i)We forgot to add an explicit return to the last line of the total function
  This is a classic rubyist mistake. JS doesn't do implicit return values -- or
  rather, it does, but the value is ALWAYS undefined. If we want to return any-
  thing else, we need to explicitly use a return statement.
  (ii)We declare the sum variable but we do not initialize it to a value, which
  means that the variable receives teh default value of undefined. That creates
  problems inside the for loop, since we're trying to reassign the sum variable
  to a new number equal to its present value plus the current value of i.
  But... on the first iteration, it's present value is undefined. Thus, we add
  a number to undefined and assign sum the value NaN. Then on each subsequent
  iteration, we add NaN to a number and reassign sum to the resulting NaN.
*/