// JS is a single threaded language. It runs a line of code one at a time. (Please check JS EVENT LOOP);
// Meaning a line of code blocks a code before the latter is executed.
// Async JS solves that. A line of code that takes time can be invoked/called now and be executed later - not blocking the next line of codes.

console.log(1);
console.log(2);
// this function is invoked here
setTimeout(() => {
    console.log("This is a callback function invoked after 2 but executed after 4!")
}, 1500);
console.log(3);
console.log(4);
// the function is executed here.