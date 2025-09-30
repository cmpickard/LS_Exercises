// Write a function that takes two element ids as arguments and swaps the
// positions of the elements represented by the ids. The function returns
// true for valid swaps and undefined for invalid. To put the focus on the
// node swapping functionality, you can assume that nodes will have a value
// for the id attribute and two arguments will always be provided. Use the
// following HTML and sample codes to test your output:

// <!doctype html>
// <html>
//   <head>
//     <title>Node Swap</title>
//   </head>
//   <body>
//     <div id="1">
//       <div id="4"></div>
//       <div id="5">
//         <div id="6"></div>
//       </div>
//     </div>
//     <div id="2"></div>
//     <div id="3">
//       <div id="7"></div>
//       <div id="8"></div>
//       <div id="9"></div>
//     </div>
//   </body>
// </html>
// Invalid Swaps
// // at least one of the id attributes doesn't exist
// > nodeSwap(1, 20);
// = undefined

// // at least one of the nodes is a "child" of the other
// > nodeSwap(1, 4);
// = undefined
// > nodeSwap(9, 3);
// = undefined
// Valid Swaps

// // one swap
// > nodeSwap(1, 2);
// <!doctype html>
// <html>
//   <head>
//     <title>Node Swap</title>
//   </head>
//   <body>
//     <div id="2"></div>
//     <div id="1">
//       <div id="4"></div>
//       <div id="5">
//         <div id="6"></div>
//       </div>
//     </div>
//     <div id="3">
//       <div id="7"></div>
//       <div id="8"></div>
//       <div id="9"></div>
//     </div>
//   </body>
// </html>

// // multiple swaps
// > nodeSwap(3, 1);
// > nodeSwap(7, 9);

// <!doctype html>
// <html>
//   <head>
//     <title>Node Swap</title>
//   </head>
//   <body>
//     <div id="3">
//       <div id="9"></div>
//       <div id="8"></div>
//       <div id="7"></div>
//     </div>
//     <div id="2"></div>
//     <div id="1">
//       <div id="4"></div>
//       <div id="5">
//         <div id="6"></div>
//       </div>
//     </div>
//   </body>
// </html>

// Further Exploration
// The current solution clones the nodes and uses the .replaceChild method to
// handle the swapping. The limitation of this approach, however, is that the
// nodes will lose all event listeners attached to it via JavaScript. For
// further exploration, refactor/implement a solution wherein the swapped
// nodes don't lose event listeners — if any — added via JavaScript.

function nodeSwap(node1Id, node2Id) {
  let node1 = document.getElementById(node1Id);
  let node2 = document.getElementById(node2Id);
  let temp = document.createElement('div');

  if (!node1 || !node2 ||
      node1.contains(node2) || node2.contains(node1)) return undefined;

  node1.insertAdjacentElement('beforebegin', temp);
  node2.insertAdjacentElement('beforebegin', node1);
  temp.insertAdjacentElement('afterend', node2);
  temp.remove();

  return true;
}

nodeSwap(1,2);