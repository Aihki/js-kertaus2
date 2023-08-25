'use strict';

const numbers = [];

for (let i = 0; i <= 4; i++) {
  const numb = prompt('give me a number');
  numbers.push(numb);
}

console.log('Numbers:' + numbers);
document.getElementById('numbers').textContent = `Numbers: ${numbers}`;

const checkNum = prompt('give a number to check');
if (numbers.includes(checkNum)) {
  console.log(`Number ${checkNum} is found in the array.`);
  alert(`Number ${checkNum} is found in the array.`);
} else {
  console.log(`Number ${checkNum} is not found in the array.`);
  alert(`Number ${checkNum} is not found in the array.`);
}
numbers.pop();
console.log('Updated Numbers:' + numbers);
document.getElementById('Updated').textContent = `Updated  numbers: ${numbers}`;

numbers.sort((a, b) => a - b);
console.log('Sorted numbers:' + numbers);
document.getElementById('sorted').textContent = `Sorted numbers: ${numbers}`;
