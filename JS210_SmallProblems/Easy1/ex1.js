// Log all odd numbers from 1 to 99, inclusive, to the console,
// with each number on a separate line.

function printOdds() {
  for (let count = 1; count < 100; count += 2) {
    console.log(count);
  }
}

printOdds();

// Further Exploration
// Repeat this exercise with a technique different from the one that you used,
// and different from the one provided. Also consider adding a way for the user
// to specify the limits of the odd numbers logged to the console.

function fancyPrintOdds(limit = 100) {
  let counter = 1;
  while (counter <= limit) {
    console.log(counter);
    counter += 2;
  }
}

fancyPrintOdds(11);