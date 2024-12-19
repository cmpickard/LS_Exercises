/* eslint-disable no-multi-str */
// Write a function that will take a short line of text, and
// write it to the console log within a box.

// Examples:

// logInBox('To boldly go where no one has gone before.');
// will log on the console:

// Copy Code
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// Copy Code
// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
// You may assume that the output will always fit in your browser window.

function printEdge(size) {
  let dashes = '';
  for (let idx = 0; idx < size - 2; idx++) {
    dashes += '-';
  }

  console.log('+' + dashes + '+');
}

function printEmpty(size) {
  let spaces = '';
  for (let idx = 0; idx < size - 2; idx++) {
    spaces += ' ';
  }

  console.log('|' + spaces + '|');
}

function printText(text) {
  console.log('| ' + text + ' |');
}

function bannerize(text) {
  let bannerLength = text.length + 4;

  printEdge(bannerLength);
  printEmpty(bannerLength);
  printText(text);
  printEmpty(bannerLength);
  printEdge(bannerLength);
}

bannerize('To boldly go where no one has gone before.');

// Further Exploration
// Modify this function so that it truncates the message if it doesn't fit
// inside a maximum width provided as a second argument (the width is the width
//   of the box itself). You may assume no maximum if the second argument is
//   omitted. For a real challenge, try word wrapping messages that are too
//   long to fit, so that they appear on multiple lines but are still contained
//   within the box

function chopText(text, size) {
  let textArray = [];
  let numSplits = Math.floor((text.length / size)) + 1;
  let lastCut = 0;

  for (let counter = 0; counter < numSplits; counter++) {
    if (counter === numSplits - 1) {
      let lastLine = text.slice(lastCut);
      for (let spaces = size - lastLine.length; spaces > 0; spaces--) {
        lastLine += ' ';
      }
      textArray.push(lastLine);
    } else {
      textArray.push(text.slice(lastCut, lastCut + size));
    }

    lastCut += size;
  }

  return textArray;
}

function bannerizeWrapper(text, maxWidth) {
  let textArray = chopText(text, maxWidth);
  let bannerLength = maxWidth + 4;
  printEdge(bannerLength);
  printEmpty(bannerLength);

  for (let idx = 0; idx < textArray.length; idx++) {
    printText(textArray[idx]);
  }

  printEmpty(bannerLength);
  printEdge(bannerLength);
}

let str = "Modify this function so that it truncates the message if it doesn't fit\
 inside a maximum width provided as a second argument (the width is the width\
 of the box itself). You may assume no maximum if the second argument is\
 omitted. For a real challenge, try word wrapping messages that are too\
 long to fit, so that they appear on multiple lines but are still contained\
 within the box";

bannerizeWrapper(str, 80);