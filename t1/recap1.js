'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(`Fruits: ${fruits}`);
console.log(`Leght of Fruits: ${fruits.length}`);
console.log(`Element at index 2: ${fruits[2]}`);
console.log(`Leght of Fruits: ${fruits[fruits.length - 1]}`);

const vegetables = [];
for (let i = 0; i <= 2; i++) {
  const vege = prompt('give me a vegetable');
  vegetables.push(vege);
}
console.log(`Vegetables: ${vegetables}`);
console.log(`Leght of Vegetables: ${vegetables.length}`);
