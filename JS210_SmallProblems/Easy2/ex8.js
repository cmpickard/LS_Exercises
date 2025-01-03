// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for
// negative values or values greater than 100.

// Examples:
// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

function getGrade(...grades) {
  const GRADE_BRACKETS = { 10: 'A', 9: 'A', 8: 'B', 7: 'C', 6: 'D', 5: 'F',
    4: 'F', 3: 'F', 2: 'F', 1: 'F', 0: 'F' };
  let avg = grades.reduce((sum, num) => sum + num, 0) / (grades.length);
  let tens = Math.floor(avg / 10);
  return GRADE_BRACKETS[tens];
}

console.log(getGrade(90, 95, 93));
console.log(getGrade(50, 50, 95));
console.log(getGrade(100, 100, 100));