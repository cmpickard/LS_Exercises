// Implement a generic function firstElement that takes an array of any type
// and returns the first element or undefined if the array is empty.

// Expected output for firstElement([7, 9, 11]):
// 7

// Expected output for firstElement([]):
// undefined

function firstElement<T> (arr: Array<T>): T | undefined {
  return arr[0];
}