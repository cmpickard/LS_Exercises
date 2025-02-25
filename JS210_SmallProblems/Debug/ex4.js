/* eslint-disable max-len */
// We were asked to implement a task list and the following functionality:

// adding a new task
// completing a given number of existing tasks
// displaying the task list
// We decided to keep things simple and model the tasks as strings.
// Completing a task for us simply means deleting the string from the array of
// tasks.

// Experimenting with our code reveals that it doesn't work exactly as we
// expected. Find the problem and fix it.

// Copy Code
// const todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
//              'call plumber', 'feed fido', 'get gas',  'organize closet'];

// function addTask(task) {
//   if (todos.includes(task)) {
//     console.log('That task is already on the list.');
//   } else {
//     todos.push(task);
//   }
// }

// function completeTasks(n = 1) {
//   let tasksComplete = 0;

//   while (todos.length > 0 && tasksComplete < n) {
//     console.log(`${todos[0]} complete!`);
//     delete todos[0];
//     tasksComplete++;
//   }

//   if (todos.length === 0) {
//     console.log('All tasks complete!');
//   } else {
//     console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
//   }
// }

// function displayTaskList() {
//   console.log(`ToDo list (${todos.length} tasks):`)
//   console.log('---------------------');

//   for (let i = 0; i < todos.length; i++) {
//     console.log(`-- ${todos[i]}`);
//   }
// }

// // Utilizing our task manager

// addTask('oil change');
// addTask('dentist');
// addTask('homework');

// completeTasks(3);
// displayTaskList();

//ANSWER
// the issue is that we're using the delete operator to remove elements from our
// task array, and the delete operator remove the value from the given index
// and leaves it an empty slot -- it DOESN'T shift all of the other elements
// around so that the length of the array is reduced by one.
// as a result, the code keeps deleting the element at the first index which,
// after the first time that happens, is just repeatedly re-emptying out the
// already empty slot.