// The intention of the program below is to output a paragraph. Copy and paste
// the program into a JavaScript console (e.g., from the Chrome Developer Tools),
// then run it. Is the output what you expected? Are there any bugs/errors?


// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
//                 ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
//                 dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
//                 ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
//                 diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
//                 hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);

/* ANS:
What I expect to happen:
the correct way to use this format for long strings is to place down a `\` then
hit enter (thereby indicating that the newline is not part of the string) and
then restart the string text on the next line WIHOUT ANY WHITESPACE.

This example code is going to throw an error because all the tabs used to format
the string are being interpreted as literal whitespace characters -- though I'm
not sure why that makes it so that that last line of the string isn't even 
registering as part of the same string literal value.

What actually happened:
SyntaxError: Invalid or unexpected token

Analysis:
The reason the last line was not registering as a string is because there were
a bunch of spaces after the second to last line, which meant the escape char
was actually escaping a space and not the \n

*/