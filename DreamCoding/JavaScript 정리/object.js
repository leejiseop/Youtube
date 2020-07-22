"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instances of Object

// object = { key: value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const name = "ellie";
const age = 4;
print(name, age);
// function print(name, age, ...) {
//   console.log(name);
//   console.log(age);
//   ...
// }
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const ellie = { name: "ellie", age: 4 };
print(ellie);

// 이런거도 되니 알아만 두되, 사용은 지양하자. 나중에 코드 꼬임
ellie.hasJob = true;
console.log(ellie.hasJob); // true
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(ellie.name); // 코딩하는 순간 - 주로 이걸 사용
console.log(ellie["name"]); // 정확하게 무슨 키가 필요한지 모를 때
// ㄴ runtime에서 결정될 때

ellie["hasJob"] = true;
console.log(ellie.hasJob); // true

function printValue(obj, key) {
  // console.log(obj.key);
  console.log(obj[key]);
}
printValue(ellie, "name");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };

const person4 = makePerson("ellie", 30);

function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// 4. Construstor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
// const person4 = new Person('ellie', 30);

// 5. in operator: property existance check ("key" in obj)
console.log("name" in ellie); // true
console.log("random" in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of

// for (key in obj)
// value 접근 불가?
for (const key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (const value of array) {
  console.log(value);
}

console.clear();

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (const key in user) {
  user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = Object.assign({}, user);
// const user4 = {};
// Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
// 뒤에 있는것이 앞의것을 덮어쓴다
console.log(mixed.color);
console.log(mixed.size); // blue big

// foreach: Array, Map, Set
