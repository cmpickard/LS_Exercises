// Create a type representing all property names of the existing interface
// UserData:
interface UserData {
  name: string;
  age: number;
  email: string;
}
// Then write a function that takes a UserData object and a key from UserData,
// and prints out the value of that key from the object.

// Expected outcome:

// The function should be able to take any key of UserData and print out the
// corresponding value.

type DataPropName = keyof UserData;

function getProp(obj: UserData, prop: DataPropName) {
  return obj[prop];
}