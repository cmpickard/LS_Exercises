// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 200 (inclusive).

// Example Output:

// Teddy is 69 years old!

function randomAgeForTeddy(min, max) {
  if (min > max) [min, max] = [max, min];

  let randomNum = Number((Math.random()).toFixed(2));
  let age = Math.floor(min + (randomNum * (max - min)));
  console.log(`Teddy is ${age} years old!`);
}

randomAgeForTeddy(20, 200);