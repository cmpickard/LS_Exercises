// Let's build another program using madlibs. We made a similar program in the
// Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text template as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that text,
// and then returns it. You can build your lists of nouns, verbs, adjectives,
// and adverbs directly into your program. Your program should read this text
// and, for each line, place random words of the appropriate types into the
// text and return the result.

// The challenge of this program isn't just about writing your solution—it's
// about choosing the structure of the text template. Choose the right way to
// structure your template and this problem becomes much easier. Consequently,
// this exercise is a bit more open-ended since the input is also something
// that you'll be defining.

// Examples:

// Note: The quotes in the example strings returned by the madlibs function
// are only shown for emphasis. These quotes are not present in the actual
// output strings. The words in quotes come from the list of texts and it is
// the madlibs function that puts them in.

// function madlibs(template) {
//   // ...
// }

// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

// madlibs(template1);
// // The "sleepy" brown "cat" "noisily"
// // "licks" the "sleepy" yellow
// // "dog", who "lazily" "licks" his
// // "tail" and looks around.

// madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

// eslint-disable-next-line consistent-return
function randWord(type) {
  const NOUNS = ['dog', 'cow', 'boy'];
  const ADVERBS = ['quickly', 'hardly', 'roughly'];
  const ADJECTIVES = ['brown', 'dry', 'hard'];
  const VERBS = ['jumps', 'dies', 'digs'];

  switch (type) {
    case '*noun*':
      return randomFrom(NOUNS);
    case '*adverb*':
      return randomFrom(ADVERBS);
    case '*adjective*':
      return randomFrom(ADJECTIVES);
    case '*verb*':
      return randomFrom(VERBS);
  }
}

function randomFrom(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

function madlibs(template) {
  let sentence = template.map(word => {
    if (word[0] === '*') {
      return randWord(word);
    } else {
      return word;
    }
  }).join(' ');

  console.log(sentence);
}

let template = ['The', '*adjective*', '*noun*', '*adverb*', '*verb*'];

madlibs(template);