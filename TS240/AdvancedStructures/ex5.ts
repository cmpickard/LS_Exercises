// Write a generic function getProperty that retrieves the value of a property
// from an object, where the key is guaranteed to be a property of the object.

// Expected outcome:

// The function should not compile if the key is not a property of the object.

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}