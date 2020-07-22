"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[2]);

console.clear();

// 3. Looping

// a. for in (?)
// for (let i in fruits) {
//   console.log(fruits[i]);
// }

// for of
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// for
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// foreach
// fruits.forEach(function (fruit, index, array) { // 보통 array까지 받지는 않는다
//   console.log(fruit);
//   console.log(fruit, index);
//   console.log(fruit, index, array);
// });
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("peach", "berry");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("mango");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift and unshift are SLOWER thanpop, push

// splice: remove an item by index position
fruits.push("mango", "peach");
console.log(fruits);
// fruits.splice(1); // 갯수 지정 안하면 start number index 이후로 다 지워버림
// console.log(fruits);
fruits.splice(1, 1); // index 1부터 1개만 지운다
console.log(fruits);
fruits.splice(1, 1, "melon", "orange");
// fruits.splice(1, 0, "melon", "orange"); // 지우지 않고 넣기만 하는것도 가능!
console.log(fruits);

// combine two arrays
const fruits2 = ["pineapple", "watermelon"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf, includes
// console.clear();
console.log(fruits);
console.log(fruits.indexOf("orange")); // 2
console.log(fruits.includes("orange")); // true
console.log(fruits.indexOf("coconut")); // -1
console.log(fruits.indexOf("durian")); // -1
console.log(fruits.includes("coconut")); // false

// console.clear();
console.log(fruits);
fruits.push("melon");
console.log(fruits);
console.log(fruits.indexOf("melon")); // 1, 가장 첫번째 index
console.log(fruits.lastIndexOf("melon")); // 5, 가장 마지막 index
