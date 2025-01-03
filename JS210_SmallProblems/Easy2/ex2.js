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

function bannerize(text) {
  const length = text.length;
  const dashes = '+' + '-'.repeat(length + 2) + '+';
  const spaces = '|' + ' '.repeat(length + 2) + '|';
  text = '| ' + text + ' |';
  console.log(`${dashes}\n${spaces}\n${text}\n${spaces}\n${dashes}`);
}

bannerize('To boldly go where no one has gone before.');

// Further Exploration
// Modify this function so that it truncates the message if it doesn't fit
// inside a maximum width provided as a second argument (the width is the width
//   of the box itself). You may assume no maximum if the second argument is
//   omitted. For a real challenge, try word wrapping messages that are too
//   long to fit, so that they appear on multiple lines but are still contained
//   within the box

// function chopText(text, size) {
//   let textArray = [];
//   let numSplits = Math.floor((text.length / size)) + 1;
//   let lastCut = 0;

//   for (let counter = 0; counter < numSplits; counter++) {
//     if (counter === numSplits - 1) {
//       let lastLine = text.slice(lastCut);
//       for (let spaces = size - lastLine.length; spaces > 0; spaces--) {
//         lastLine += ' ';
//       }
//       textArray.push(lastLine);
//     } else {
//       textArray.push(text.slice(lastCut, lastCut + size));
//     }

//     lastCut += size;
//   }

//   return textArray;
// }

// function bannerizeWrapper(text, maxWidth) {
//   let textArray = chopText(text, maxWidth);
//   let bannerLength = maxWidth + 4;
//   printEdge(bannerLength);
//   printEmpty(bannerLength);

//   for (let idx = 0; idx < textArray.length; idx++) {
//     printText(textArray[idx]);
//   }

//   printEmpty(bannerLength);
//   printEdge(bannerLength);
// }

function bannerizeWrapper(text, maxLength = 76) {
  // cut up text into an array of equal sized pieces
  const lineArrSize = Math.ceil(text.length / maxLength);
  const lineArr = Array(lineArrSize)
    .fill(null)
    .map((_, idx) => {
      return text.slice(idx * maxLength, (idx + 1) * maxLength);
    });

  // fill out last line with spaces
  const numExtraSpaces = maxLength - lineArr.slice(-1)[0].length;
  const extraSpaces = Array(numExtraSpaces).fill(' ').join('');
  lineArr[lineArr.length - 1] += extraSpaces;

  // print banner
  const dashes = '+' + '-'.repeast(maxLength + 2) + '+';
  const spaces = '|' + ' '.repeat(maxLength + 2) + '|';
  console.log(`${dashes}\n${spaces}`);
  lineArr.forEach((line) => console.log('| ' + line + ' |'));
  console.log(`${spaces}\n${dashes}`);
}

let str =
"Modify this function so that it truncates the message if it doesn't fit\
 inside a maximum width provided as a second argument (the width is the width\
 of the box itself). You may assume no maximum if the second argument is\
 omitted. For a real challenge, try word wrapping messages that are too\
 long to fit, so that they appear on multiple lines but are still contained\
 within the box";

bannerizeWrapper(str, 80);