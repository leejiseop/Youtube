// 1. use strict
// added in ES 5
// use this for Vanilla JS
"use strict";

// 2. Variable
// let(ES6)
let globalName = "global";
{
  let name = "ellie";
  name = "hello";
  console.log(globalName);
}
console.log(name);
// var (don't ever use this), var hoisting
// 어디 선언했는지 상관없이 항상 상단으로 선언을 끌어올림
// 블록 건너뜀
{
  age = 5;
  var age;
}
console.log(age);

// 3. Constants (R only)
// use const whenever possible
// - only use let if variable needs to change.

// Immutable data types: primitive types, frozen objects(i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// favor immutable(변경불가) data type always. for a few reasons:
// - security
// - thread safety
// - recude human mistakes

// 4. Variable types (RW)
// primitive, single item: number, string, boolean, null, undefined, symbol
// 해당 변수에 값이 저장
// object(single items를 묶음), box container
// 해당 변수에 reference가 저장
// const obj --locked--> ref --> obj.name
//                         ㄴ--> obj.age
// function, first-class function(변수에 할당 가능, 함수를 인자로 전달 및 함수를 리턴 가능)
const count = 3; // integer number
const size = 3.5; // decimal number (decimal : 소수, 십진법)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// bigInt (new) long long int와 비슷
const bigInt = 12837465736478123654726n; // over (-2^53) ~ 2^53
// string
const char = "c";
const a = "hello ";
const b = "world";
const greeting = a + b;
console.log("value: " + greeting);
console.log(`value: ${greeting}`); // template literals. ''와 ``는 다르다.
// boolean
// false: 0, null, undefined, NaN, '' (empty string)
// true: 이외 모든것들
// null과 undefined
// null: '비어있다' 라는 값을 할당한 것
// undefined: 선언만 되고 아직 아무것도 정해지지 않은 것
console.log(null == undefined); // true
console.log(null === undefined); // false
// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// symbol의 출력은 꼭 .description을 붙여서 string으로 변환 후 출력
// object
const ellie = { name: "ellie", age: 20 }; // 구조체?
// ellie가 const여도 ellie.name, ellie.age로 접근해서 변경 가능.

// Dynamic Typing
// c, java는 statically typed language, JS는 dynamically typed language
// 할당되는 값에 따라서 런타입 중간에 타입이 변경될 수 있음.
// 혼자 프로토타입 짤땐 좋지만 규모가 커지면 꼬일수도
// '7' + 5 // '75' (string)
// '8' / '2' // 4 (number)
// 그래서 빡쳐서 TypeScript 만듬!! (JS + Type)
