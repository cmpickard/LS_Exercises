/* eslint-disable no-unused-vars */
// Expand the Contact type alias from exercise 1 to make age and isOnline
// optional properties.

// type Contact = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   isOnline: boolean;
// };
// Expected outcome:

// The Contact type alias with optional age and isOnline properties.

type Contact = {
  firstName: string;
  lastName: string;
  age?: number;
  isOnline?: boolean;
};