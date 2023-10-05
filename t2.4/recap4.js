'use strict';

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const numbers2 = [2, 6, 7, 1, 8, 3, 4, 9, 10, 5];

function sortArray(a, b) {
  const sorting = a - b;
  return sorting;
}

console.log('original array: ' + numbers);
numbers.sort(sortArray);
console.log('sorted array: ' + numbers);

console.log('original array: ' + numbers2);
numbers2.sort(sortArray);
console.log('sorted array: ' + numbers2);
