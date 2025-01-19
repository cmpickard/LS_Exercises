// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

// const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico',
//   'Groucho', 'Zeppo'];
// const array2 = [];

// for (let i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

// for (let i = 0; i < array1.length; i += 1) {
//   if (array1[i].startsWith('C')) {
//     array1[i] = array1[i].toUpperCase();
//   }
// }

// console.log(array2);

/*
  ANS:
  ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico',
   'Groucho', 'Zeppo'];

  The first for... loop iterates through every element of arr1, pushing the val
  into arr2. Because all of arr1's elements are strings and since strings are
  primitive values in JS, this effectively makes arr2 hold a copy of the exact
  same values as arr1 but not actually share any references.

  Thus, when the second for... loop iterates again through arr1 and replaces
  all the elements that start with a 'c' character to be upper case, there is
  no effect on arr2. In fact, because strings are primitive immutables what's
  going on inside arr1 is *already* not mutation (and thus, of course we won't
  find that the elements of arr2 have been mutated too -- since there was no
  mutation at all!)

  FURTHER EXPLORATION
  What would happen if an object literal was part of the array1 elements pushed
  to array2? Would changes made to the object literal in array1 be reflected in
  array2?
  How would you change the code so that any changes made to array1 in the second
  for loop get reflected to array2?

  ANSWER:
  (i) Yes. In that case, the use of the push method would effectively cause a
  copy of the pointer to the object literal to be stored in arr2. And then if
  we later mutated that object literal, we'd see those changes reflected in arr1

  (ii) You could re-order the two loops. OR we could initialize the second array
  to point to the same object as the first arr,
  const arr2 = arr1;


*/

