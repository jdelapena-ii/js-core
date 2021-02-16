// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// Note: filter() does not execute the function for array elements without values.
// Note: filter() does not change the original array.

// Returns the elements of an array that meet the condition specified in a callback function.
// filter<number>(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any)

const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(item => item % 2 === 0);
console.log(even);

const odd = numbers.filter(item => item % 2 !== 0);
console.log(odd);


const people = [
    {
        name: "Jedo",
        age: 25
    },
    {
        name: "Novak",
        age: 32
    },
    {
        name: "Rafael",
        age: 35
    },
    {
        name: "Roger",
        age: 36
    }
]

const adult = people.filter(person => person.age > 30);
console.log(adult);

const adultName = people.filter(callback);
function callback(person) {
    if (person.age > 30){
    console.log(person.name)
    }
}
console.log(adultName);
