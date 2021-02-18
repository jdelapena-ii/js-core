// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
// Note: reduce() does not execute the function for array elements without values.
// Note: This method does not change the original array.

// reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number)

const numbers = [1, 2, 3, 4, 5];

// .reduce(callback, initialValue)
const total = numbers.reduce(sum)

// callback(accumulator, value, index, array)
function sum(accumulator, value, index, arr) {
    return accumulator + value;
}

console.log(total);


const nums = [1, 2, 33, 4, 5, 16];

const max = nums.reduce(callback, -Infinity)

function callback(accumulator, value) {
    if(accumulator > value){
        return accumulator
    } else {
        return value;
    }
}
console.log(max);