// The sort() method sorts the items of an array.
// The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
// By default, the sort() method sorts the values as strings in alphabetical and ascending order.
// This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce an incorrect result when sorting numbers.
// You can fix this by providing a "compare function" (See "Parameter Values" below).
// Note: This method changes the original array.

const names = ['Lian', 'Florin', 'James', 'Zoe', 'Yohan', 'Basti'];
const sorted = names.sort();
console.log(sorted);

const numbers = [0, 5, 1, 8, 29, 9, 100];
const arranged = numbers.sort((a, b) => b-a);
console.log(arranged);
