## README.md

## find sum of array

const arrayUtils = require('sum_of_array_123');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];

console.log(arrayUtils.sum(arr)); // Output: 65
console.log(arrayUtils.removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayUtils.max(arr)); // Output: 10
console.log(arrayUtils.min(arr)); // Output: 1
console.log(arrayUtils.shuffle(arr)); // Output: [6, 3, 7, 2, 5, 10, 9, 8, 1, 4]
console.log(arrayUtils.sortAsc(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]
console.log(arrayUtils.sortDesc(arr)); // Output: [10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(arrayUtils.flatten([[1, 2], [3, 4], [5, 6]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(arrayUtils.chunk(arr, 3)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 10]]
console.log(arrayUtils.countOccurrences(arr)); // Output: { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 1, '10': 2 }