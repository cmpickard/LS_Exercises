// The following code demonstrates the Pomodoro technique. Although it seems
// to work in principle, it never prints the minute count from line 11.
// What is wrong?

// var tasks = 10;
// var checkmarks = 0;
// var sessions = 0;
// var minutes = 0;

// function pomodoro() {
//   console.log('Work.');

//   while (minutes < 25) {
//     minutes += 1;
//     console.log('...' + minutes);
//   }

//   console.log('PLING!');

//   sessions += 1;
//   checkmarks += 1;

//   if (checkmarks === tasks) {
//     console.log('Done!');
//     return;
//   }

//   var rest;
//   if (sessions === 4) {
//     sessions = 0;
//     rest = 30;
//   } else {
//     rest = 5;
//   }

//   console.log('Rest for ' + rest + ' minutes.');

//   var minutes = 0;
//   pomodoro();
// }

// pomodoro();

// ANSWER:
// the second to last line of our function redeclares the variable minutes, and
// that means, due to hoisting, that minutes is undefined for the entirety of
// the function until that last couple lines -- and thus is not successfully
// incremented during the initial while loop. Easy fix: we can simply remove
// the var keyword from that line