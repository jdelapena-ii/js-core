// The forEach() method calls a function once for each element in an array, in order.
// Requires a callback function with 3 parameters

// Performs the specified action for each element in an array.
// forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any)


// one use is to console every value in the array
const numbers = [1, 3, 5, 6, 9];
numbers.forEach(consoleItem);
function consoleItem(item, index, arr){
    console.log(`index of ${item} is ${index}`);
}
console.log('');
    // in arrow function
    numbers.forEach((item, index, arr) => {
        console.log(`index of ${item} is ${index}`)
    });


// another use is to add all the numbers in the array
const num = [1, 3, 5, 6, 9];
let sum = 0;
num.forEach((item) => {
    sum += item;
})
console.log(sum);

// another use is to console how many times a letter appears in the array
const letters = ['a', 'a', 'c', 'a', 'b', 'c', 'd', 'c', 'b'];
let count = {};
letters.forEach(item => {
    if(count[item]) {
        count[item] += 1;
    } else {
        count[item] = 1;
    }
})
console.log(count);