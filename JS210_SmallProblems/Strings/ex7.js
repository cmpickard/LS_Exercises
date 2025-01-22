// Modify the function from the previous exercise so that it ignores
// non-alphabetic characters when determining whether a letter should be
// upper or lower case. Non-alphabetic characters should still be included
// in the output string, but should not be counted when determining the
// appropriate case.

// Examples:
// staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
// staggeredCase('ALL CAPS');                     // "AlL cApS"
// staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"

function staggeredCase(str) {
  let upper = false;

  return [...str].map(char => {
    if (/[A-Z]/i.test(char)) upper = !upper;
    return upper ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));