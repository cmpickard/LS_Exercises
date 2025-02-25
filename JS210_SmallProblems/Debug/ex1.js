// Upon first glance, this code looks like it should work.
// But it throws a TypeError, saying: Cannot read property 'forEach
// of undefined. Why is that?
// let ladder = ''

// ['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
//   if (ladder !== '') {
//     ladder += '-'
//   }

//   ladder += word
// })

// console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// ANSWER: the error has to do with the missing semicolon on the first line,
// where the ladder variable is declared.
// the [] are being processed as bracket notation accessing a property on the
// empty string.