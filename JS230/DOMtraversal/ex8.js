/* eslint-disable indent */
/* eslint-disable max-len */
// Implement a function that converts a nested array of nodeNames (see Nodes to
//   Array exercise for examples) to nodes. Go over the sample code and the
//   corresponding return values below as a guide for what you will implement.

// example1
// Nested array of nodes
// const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

// arrayToNodes(nodes);

// <body>
//   <header></header>
//   <main></main>
//   <footer></footer>
// </body>


// // Nested array of nodes
// const nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];
//
// ["BODY", [
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", [
//       ["DIV",[]]]]]],
//   ["DIV", []],
//   ["DIV", [
//     ["DIV", []],
//     ["DIV", []],
//     ["DIV", []]]]]]

// arrayToNodes(nodes);

// <body>
//   <div>
//     <div></div>
//     <div>
//       <div></div>
//     </div>
//   </div>
//   <div></div>
//   <div>
//     <div></div>
//     <div></div>
//     <div></div>
//   </div>
// </body>

function arrayToNodes(arr) {
  let newNodeTree = document.createElement(arr[0]);

  function buildNodeTree(nodeName, children, parent) {
    let newElement = document.createElement(nodeName);
    parent.appendChild(newElement);
    children.forEach(child => buildNodeTree(child[0], child[1], newElement));
  }

  arr[1].forEach(node => buildNodeTree(node[0], node[1], newNodeTree));
  return newNodeTree;
}

// arrayToNodes([]);
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
console.log(arrayToNodes(nodes));

const nodes2 = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];
arrayToNodes(nodes2);