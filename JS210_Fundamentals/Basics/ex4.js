// Take a look at the following code:

// let myName = 'Bob';
// const saveName = myName;
// myName = 'Alice';
// console.log(myName, saveName);


// What does this code log to the console? Think about it for a moment
// before continuing.

// If you said that this code logged:
// Alice Bob
// you would be 100% correct, and the answer should come as no surprise.

// Now let's look at something slightly different:
// const myName = 'Bob';
// const saveName = myName;
// myName.toUpperCase();
// console.log(myName, saveName);
// What does this code log? Can you explain these results?

/* 
The call to toUpperCase() on the third line returns a brand new string -- it 
MUST b/c strings are immutable in JS -- and that new string is simply not
saved anywhere. Thus, on the final line, both myName and saveName continue
to point to the original string value 'Bob' and so 'Bob Bob' is what gets 
output to the console
*/



// Further Exploration
// If you take another look at the code, you'll notice that on line 3, the string
// referenced by the myName variable calls the String.prototype.toUpperCase
// method. How is it possible that even though this string is a primitive,
// it's still able to call a method?

/* 
  ANSWER: Primitive values have access to methods in Javascript! When we say
  that a value is a 'primitive' we are not saying that it has no methods;
  we're simply saying that it is never *mutated* -- thus, any methods that a
  primitive calls will leave the original value unchanged. Whatever the method
  returns, it won't return the original value post-change. (b/c primitives 
  don't change. EVER.)
*/