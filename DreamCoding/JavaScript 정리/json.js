"use strict";

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);
const aaa = ["apple", "banana"];
console.log(aaa);

console.clear();

// 객체의 메소드를 화살표 함수로 선언할 경우 this는 전역객체를 가르키기 때문에 window가 출력된대요!
// jump: function() { console.log(`${this.name} can jump!`); }
// 또는 jump() { console.log(`${this.name} can jump!`); }
// 로 수정하시면 name이 정상적으로 출력됩니다!
const rabbit = {
  // JSON에 포함된다
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),

  // JSON에는 포함되지 않는다
  // symbol: Symbol("id"), // Uncaught TypeError: Cannot convert a Symbol value to a string(?)
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};
console.log(rabbit);

let rabbitJSON = JSON.stringify(rabbit);
console.log(rabbitJSON);

// 원하는 목록만 JSON 변환 가능
// 배열 : 원하는 키를 골라서 출력
rabbitJSON = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(rabbitJSON);

console.clear();
// 함수: 원하는 키를 골라서 값을 바꿔서 출력(기존 값 대신 사용할 값을 return)
// 특정 값을 JSON에서 누락시키려면 return undefined;
// 참고: 함수 내에서의 this는 현재 처리하고있는 프로퍼티가 위치한 객체를 가리킴
rabbitJSON = JSON.stringify(rabbit, (key, value) => {
  // return value;
  return typeof value === "string" ? value.toUpperCase() : value;
  // return key === "name" ? "ellie" : value;
});

console.log("--------------------");
console.log(rabbitJSON);

// 2. JSON to Object
// parse(JSON)
console.clear();

rabbitJSON = JSON.stringify(rabbit);
console.log(rabbitJSON);
// const obj = JSON.parse(rabbitJSON);
const obj = JSON.parse(rabbitJSON, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key === "birthDate" ? new Date(value) : value;
});
console.log("--------------------");
console.log(obj);
// obj는 serialize 된, 즉 실존하는 data들만 srting으로 만들어진 JSON으로부터
// 다시 만들어졌기 때문에 함수 등이 포함되어있지 않다
// 콜백함수 이용해서 new Date(value) 하면 된다
rabbit.jump(); // can jump!
// obj.jump(); // error

console.log(rabbit.birthDate.getDate()); // function 형태
console.log(obj.birthDate); // 콜백함수 return value;
// string 형태: getDate() 사용 불가
console.log(obj.birthDate.getDate()); // 콜백함수 return new Date(value)
// function 형태: getData() 사용 가능

// 유용한 웹사이트
// JSON Diff
// JSON Beautifier
// JSON Parser
// JSON Validator
