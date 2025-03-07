'use strict';

// Imagine you're a pet owner wanting to give treats to your pets. Each pet
// has a specific appetite level represented by an array appetite[i], which
// is the minimum size of a treat the pet will be happy with. Each treat has
// a size represented by an array treats[j]. A pet will be satisfied if the
// size of the treat treats[j] is greater than or equal to its appetite
// level appetite[i]. Your goal is to maximize the number of satisfied pets
// and output the number of satisfied pets in the end.

/*
input: 2 arrays of ints
output: integer
rules:
- we are matching elements from the two arrays using specific rules, then
returning the number of successful matches.
- the max return value is appetites.length; the min is 0
- the matching rules are as follows:
  -each element can be matched with exactly one element from the other array
  -a 'match' occurs when an element from arr1 (appetites) is matched with an
  element that is equal or larger from arr2 (treats)
  -the goal is to maximize the number of matches, so we are presumably trying
  to make sure that we minimize "excess satisfaction" -- and not match arr1
  elements with arr2 elements that are much larger than them


algorithm:
-sort both arrays?
-try to match the smallest elements from appetites first
each arr has a pointer, each pointer is initially set to 0;
currAppetiteIdx = 0
currTreatIdx = 0
count = 0;

while (currentAppetiteIdx < appetites.length)
-check if (currentAppetite <= currentTreat)
  - if so, count += 1
    AND currentAppetitesIdx += 1
  EITHER WAY:
  currentTreatIdx += 1

*/

function assignTreats(appetites, treats) {
  appetites.sort((a,b) => a - b);
  treats.sort((a, b) => a - b);

  let appIdx = 0;
  let treatIdx = 0;
  let count = 0;

  while (treatIdx < treats.length) {
    if (appetites[appIdx] <= treats[treatIdx]) {
      count += 1;
      appIdx += 1;
    }
    treatIdx += 1;
  }

  return count;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);