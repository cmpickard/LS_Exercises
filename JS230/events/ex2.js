/* eslint-disable no-unused-vars */
// Implement a function that makes an element bold and allows the user of the
// function to optionally do something else with it.

// <!doctype html>
// <html lang="en-US">
//   <head>
//     <meta charset="utf-8">
//     <title>Bold Element + Custom</title>
//   </head>
//   <body>
//     <section>Hello World</section>
//     <p>Greetings!</p>
//   </body>
// </html>

// let sectionElement = document.querySelector('section');
// > makeBold(sectionElement, function(elem) {
//     elem.classList.add('highlight');
//   });

// > sectionElement.classList.contains('highlight');
// = true
// > sectionElement.style.fontWeight;
// = "bold"

function makeBold(element, func) {
  element.style.fontWeight = 'bold';
  if (func && typeof func === 'function') func.call(element);
}

// Further Exploration
// You can get the same behavior as the above solution by creating your own
// custom event. For this further exploration exercise, create your own
// CustomEvent called bolded that allows the user to add it as the type of
// event to listen to.


function makeBoldEvent(element) {
  element.style.fontWeight = 'bold';
  let bolded = new CustomEvent('bolded');
  dispatchEvent(bolded);
}

let section = document.querySelector('section');
section.addEventListener('bolded', () => {
  console.log('done!');
});

makeBoldEvent(section);
