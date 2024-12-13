// The following program is expected to log each number between 0 and 9
// (inclusive) that is a multiple of 3. Read through the code shown below.
// Will it produce the expected result? Why or why not?

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i); // there should be an increment step here, infinite loop
  } else {
    i += 1;
  }
}
