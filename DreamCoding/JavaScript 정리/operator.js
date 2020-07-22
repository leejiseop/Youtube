// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2); // 12
console.log(`string literals:
abcabc123123
'''''
1 + 2 = ${1 + 2}`);
console.log("\tellie'sbook\n");

// 2. Numeric operators
// + - * / % **

// 3. Increment and decrement operators
let counter = 2;
let preIncrement = ++counter;
console.log(preIncrement); // 3
let postIncrement = counter++;
console.log(postIncrement); // 3
postIncrement = ++counter;
console.log(postIncrement); // 5
// 4. Assignment operators
let x = 3;
x += 2;

// 5. Comparison operators
//  < <= > >=

// 6. Logical opreators: || && !
// OR은 하나만 true 나오면 true이기 때문에
// 여러 값들 순서대로 보다가 true 나오면 뒤에거 비교 안하고 마침
// 그러니, simple한걸 앞에 두자. 비교문에서 함수는 뒤로
// AND도 마찬가지. 하나라도 false 나오면 false니까
// simple한걸 앞으로, 함수는 뒤로.

// 7. Equality
const string5 = "5";
const num5 = 5;
// == loose equality, with type conversion
console.log(string5 == num5); // true
// === strict equality, no type conversion
console.log(string5 === num5); // false
console.log(string5 !== num5); // true
//  obj equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// 8. Conditional operators: if
// if, else if, else
// if (a === b) {
//   a();
// } else if (a === c) {
//   b();
// } else {
//   c();
// }

// 9. Ternary operator: ?
// condition ? value1 : value2;

// 10. Switch statement
// switch (a) {
//   case '1':
//     a();
//     break;
//   case '2':
//     b();
//     break;
//   case '3':
//   case '4':
//   case '5':
//     c();
//     break;
//   default:
//     break;
// }

// 11. loops
// while (i > 3) {
//   abc();
// }
// do {
//   abc();
// } while (i > 3);

// 12. for 도 c랑 똑같음
// nested loops: 이중포문
// break, continue

// 현업에서는 loop에서 label 안쓴다고 함
