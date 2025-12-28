// Create an interface StringMap with an index signature that allows any
// number of string keys to be mapped to string values. Then, create an
// object dictionary that adheres to StringMap and stores a couple of
// key-value pairs.

// Expected outcome:

// The dictionary object should allow string keys with string values, as
// per StringMap's index signature.

interface StringMap {
  [key: string]: string
};

let dictionary: StringMap = {
  'yes': 'okay',
  'no': 'nope',
}