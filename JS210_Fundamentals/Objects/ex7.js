// The calculateBonus function calculates the bonus for a given salary.
// It makes use of two arguments for determining the bonus: a salary amount
// and a boolean switch. If the boolean is true, the bonus should be half
// of the salary; otherwise the bonus should be 0. Fill in the blanks in
// the function so that it will work, then explain why it works.

// Examples:
// function calculateBonus() {
//   return _________[1] ? _________[0] / 2 : 0;
// }

// calculateBonus(2800, true);               // 1400
// calculateBonus(1000, false);              // 0
// calculateBonus(50000, true);              // 25000

// eslint-disable-next-line no-unused-vars
function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

/* EXPLANATION
  All of the arguments passed into a function / method call get implicitly saved
  to an array object pointed out by a local variable named 'arguments'. We can
  then look up the value of those arguments using the appropriate indices.
*/