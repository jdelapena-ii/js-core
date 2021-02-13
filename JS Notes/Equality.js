// JavaScript provides three different value-comparison operations:

// === - Strict Equality Comparison ("strict equality", "identity", "triple equals")
// == - Abstract Equality Comparison ("loose equality", "double equals")
// Object.is provides SameValue (new in ES2015).

// Strict equality using ===

var num = 0;
var obj = new String('0');
var str = '0';

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false