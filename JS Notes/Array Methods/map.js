// The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// Note: map() does not execute the function for array elements without values.
// Note: this method does not change the original array.

// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any)

const numbers = [1, 3, 5, 6, 9];
const numbersDouble = numbers.map(double);

function double(value, index, array){
   return value * 2;
}

const numTriple = numbers.map(value => value * 3)

const timesIndex = numbers.map((value, index) => value * index)

console.log(numbersDouble);
console.log(numTriple);
console.log(timesIndex);

// another example. mapping over an array of objects.

const products = [
    {
        item: "laptop",
        price: 2000,
        count: 5
    },
    {
        item: "kindle",
        price: 60,
        count: 20
    },
    {
        item: "iphone",
        price: 1000,
        count: 20
    }
];

const productTotalValue = products.map(item => item.price * item.count)
console.log(productTotalValue);

const newObj = products.map(item => ({gadget: item.item, total: item.price * item.count}));
console.log(newObj);


// another example. converting an array of strings of numbers into integers
const strings = ['20', '193', '500', '99']
const newNumbers = strings.map(item => Number(item));
const newNums = strings.map(Number);
console.log(newNumbers);
console.log(newNums);

