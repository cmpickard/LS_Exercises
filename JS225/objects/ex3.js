// In JavaScript, comparing two objects either with == or === checks for object
// identity. In other words, the comparison evaluates as true if it's the same
// object on either side of == or ===. This is a limitation, in a sense,
// because sometimes we need to check if two objects have the same key/value
// pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns
// true or false depending on whether the objects have the same key/value pairs

function objectsEqual(obj1, obj2) {
  if (typeof obj1 !== 'object') return obj1 === obj2;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!(key in obj2)) return false;

    let val1 = obj1[key];
    let val2 = obj2[key];
    if (!objectsEqual(val1, val2)) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// FURTHER EXPLORATION
// How would we check for deep equality, for comparing objs that have objs as
// values?

let obj1 = {
  a: {b: 1, c: 2},
  d: {e: 3, f: {g:4, h:5} },
};

let obj2 = {
  a: {b: 1, c: 2},
  d: {e: 3, f: {g:4, h:5} },
};

let obj3 = {
  a: {b: 1, c: 2},
  d: {e: 3, f: {g:4, h:6} },
};

console.log(objectsEqual(obj1, obj2)); // true
console.log(objectsEqual(obj1, obj3)); // false