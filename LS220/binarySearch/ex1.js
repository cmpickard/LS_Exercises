// You're given an array, chars, of lowercase English letters sorted in
// ascending order, and a lowercase letter, key. Your task is to find the
// smallest letter in chars that is lexicographically greater than key.
// If no such letter exists, return the first letter in chars.

/*
input: sorted array of lowercase letters, chars + single lowerc letter, key
output: single lowercase letter
rules:
- consider all of the elements of chars that are lexicographically larger than
key. Return the one is that closest to key
- if all letters are lexico... smaller or equal to key, return chars[0]

datastrucutre:
stick with array

algo:
I want to find the index where the element to the left is <= key and the element
to the right is > key

'g'
                 L    M    R
['a', 'c', 'f', 'h', 'i', 'j']

Binary Search:
left = 0
right = chars.length - 1
mid = Math.floor((l + r) / 2)
while(left <= right) {
  if midchar > key && midchar - 1 <= key {
    return midchar
  } else if (midchar > key) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}
return chars[0]

*/

// Example test cases:
function findNextLetter(chars, key) {
  let left = 0;
  let right = chars.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (chars[mid] > key && chars[mid - 1] <= key) {
      return chars[mid];
    } else if (chars[mid] > key) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return chars[0];
}
console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.