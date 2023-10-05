'use strict';

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function sortArray(numbers, order) {
  if (order === 'asc') {
    numbers.sort((a, b) => a - b);
  } else {
    numbers.sort((a, b) => b - a);
  }
  return numbers;
}

console.log(`this is ascending: ${sortArray(numbers, 'asc')}`);
console.log(`this is descending: ${sortArray(numbers, 'desc')}`);
