"use strict";
// Object-oriented programming

// calss: template
// object: instance of a class

// javascript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}
const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class User {
  // User Class 안에는 총 3개의 fields가 있다
  // firstName, lastName, _age
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // this.age 하는 순간 get age()호출
    // = age; 하는 순간 set age()호출
  }
  get age() {
    // return this.age;
    return this._age; // 이게 찐
  }
  set age(value) {
    // 근데 setter에서
    // = value; 에서도 setter를 호출함
    // 그래서 다른 변수명을 써야 함(?)

    // if (value < 0) {
    //   throw Error("age cannot be negative");
    // }
    this._age = value < 0 ? 0 : value;

    // this.age = value; // call stack 초과
    // this._age = value; // 이게 찐
  }
}
const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age);

// 3. Fields (public, private)
// 최근에 추가되어서 아직 잘 쓰이지는 않음
class Experiment {
  publicField = 2;
  #privateField = 0; // class 외부에서 RW 불가
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

//  4. Static properties and methods
// 최근에 추가되어서 아직 잘 쓰이지는 않음
// odject마다 할당되어지는것이 아니라, Class 자체에 붙어있음(?)
class Article {
  static publisher = "Dream Coding";

  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  static draw() {
    console.log(`drawing ${this.color} color of`);
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // Shape.draw();
    console.log("세모세모");
  }
  getArea() {
    return (this.width / 2) * this.height;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
Shape.draw(); // undefined
rectangle.draw(); // blue
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, "red");
console.log(triangle.getArea()); // 200

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
// JS의 모든 object들은 Object를 상속해서 만들어진 것
console.log(triangle.toString());
