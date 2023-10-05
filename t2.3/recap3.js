'use strict';

const numbers = [];
let input;

do {
  input = prompt("Enter a number (or type 'done' to finish):");
  console.log(`Enter a number (or type 'done' to finish): ${input}`);
  if (input !== 'done') {
    const number = parseInt(input);
    numbers.push(number);
  }
} while (input !== 'done');

const even = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    even.push(num);
  }
}
if (even.length > 0) {
  document.getElementById('evenNum').textContent = `Even numbers: ${even}`;
} else {
  document.getElementById('evenNum').textContent = `Even numbers: None`;
}
