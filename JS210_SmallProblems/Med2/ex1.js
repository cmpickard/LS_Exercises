// Write a function that takes a string and returns an object containing the
// following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Examples:

// Copy Code
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(str) {
  const UPPER_PATTERN = /[A-Z]/;
  const LOWER_PATTERN = /[a-z]/;

  let count = [...str].reduce((count, char) => {
    if (UPPER_PATTERN.test(char)) {
      count.uppercase += 1;
    } else if (LOWER_PATTERN.test(char)) {
      count.lowercase += 1;
    } else {
      count.neither += 1;
    }
    return count;
  }, {lowercase: 0, uppercase: 0, neither: 0});

  Object.entries(count).forEach(([type, number]) => {
    count[type] = (100 * (number / str.length)).toFixed(2);
  });

  return count;
}
console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));


function letterPercentages2(str) {
  let count = {};
  let scale = 100 / str.length;
  count.lowercase = ((str.match(/[a-z]/g) || []).length * scale).toFixed(2);
  count.uppercase = ((str.match(/[A-Z]/g) || []).length * scale).toFixed(2);
  count.neither = ((str.match(/[^a-zA-Z]/g || [])).length * scale).toFixed(2);

  return count;
}
console.log(letterPercentages2('abCdef 123'));
console.log(letterPercentages2('AbCd +Ef'));
console.log(letterPercentages2('123'));