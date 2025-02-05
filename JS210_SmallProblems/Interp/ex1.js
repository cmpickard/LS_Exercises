/* eslint-disable no-loop-func */
// You have a bank of switches before you, numbered from 1 to n. Every switch is
// connected to exactly one light that is initially off. You walk down the row
// of switches and toggle every one of them. You walk back to the beginning of
// the row and start another pass. On this second pass, you toggle switches 2,
// 4, 6, and so on. On the third pass, you go back to the beginning again,
// this time toggling switches 3, 6, 9, and so on. You continue to repeat
// this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after n repetitions.

// Examples:

// function lightsOn(switches) {
//   // ...
// }

// lightsOn(5);        // [1, 4]
// // Detailed result of each round for `5` lights
// // Round 1: all lights are on
// // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/* PEDAC
Input: int number of rounds / lights (n)
Output: array of lights that are on after rounds
Rules:
- there are n light switches -- which are always in exactly one of ON / OFF
- the lights are numbered from 1 to n
- for every int from 1 and n, we flip the state of every light whose num
is evenly divisible by the int -- i.e. each "round" corresponds to an integer
and during that round, all and only the light whose num is evenly divisible by
the integer are toggled (during round 4, switch 4, 8, 12, 16... are flipped)
- the return value is an array with all and only the numbers corresponding to
the switches that remained on after the last round
- lights start off, then on round 1, all lights are flipped on, etc.

Questions
-what if input is zero?
-what if no input?
-what if input is non-integer?
-what if too many args?
-does the output array need to be ordered?


TestCases:
lightsOn(5);        // [1, 4]
lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
lightsOn(20);       // [1, 4, 9, 16]

DataStrucutre:

or [null, true, false, false, true,...]
could do, let arr = new Array(int).fill(null).map(_ => true)
arr.unshift(null)

Then after all the rounds, I can do a map / filter. map to replace trues with
the idx, and falses with nothing, then filter the elements directly. and
return.

e.g. n = 5
Algorithm:
(0) check input, return [] if n < 1 or wrong type
(i) Create array of booleans + leading null so the idx of each element = the
light num
[null, true, true, true, true, true]
(ii) Iterate either over the rounds or over the switches -- let's do switches
SO, iterate from 2 to n, on each iteration: (skip over 1 b/c we're initializing
the lights to ON meaning we've already simulated round 1 and that's the only
round where switch 1 is flipped) --
for loop
  -- iterate from 2 to currSwitchNum, on each iteration -- param == round
  for loop
    let round = 2
    -- let flips = 0;
    -- check if currSwitchNum % round === 0, if so increment flips
    flips += 1
  -- if flips is odd (flips % 2 === 1), set light to false, else true
    lights[currSwitchNum] = false
(iii) map array -- replace all trues with their index and leave falses in place
(iv) filter array -- return element from filter callback function
(v) return filtered array
*/

function lightsOn(num) {
  let lights = new Array(num + 1).fill(null);
  for (let currSwitchNum = 1; currSwitchNum <= num + 1; currSwitchNum++) {
    let flips = 0;
    for (let round = 1; round <= currSwitchNum; round++) {
      if (currSwitchNum % round === 0) flips += 1;
    }
    lights[currSwitchNum] = (flips % 2 !== 0);
  }

  return lights.map((status, idx) => (status ? idx : status)).filter(el => el);
}

console.log(lightsOn(0));        // []
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(20));       // [1, 4, 9, 16]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]