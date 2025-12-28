// Create two interfaces Dog with bark() and Cat with meow().
// Make a new type Pet that is an intersection of Dog and Cat.
// Then instantiate a Pet object.

// Expected output:

// Copy Code
// pet.bark();
// // Output should be "Woof"
// pet.meow();
// // Output should be "Meow"

interface Dog { bark(): string };
interface Cat { meow(): string };
type Pet = Dog & Cat;

let myPet: Pet = {
  bark: () => 'woof',
  meow: () => 'meow',
};

console.log(myPet.bark());
console.log(myPet.meow());