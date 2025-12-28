// Create a generic function filterByType that filters an array based on the
// type provided. Use generics to return an array containing only elements of
// the given type.

// Expected output for
// filterByType<string>(["hello", "world", 42, true], "string"):

// Copy Code
// ["hello", "world"]

function filterByType<T> (arr: Array<any>, type: string): Array<T> {
  return arr.filter(el => typeof el === type);
}

filterByType