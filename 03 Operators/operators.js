
// operators

// Arithmatic Operators

console.log(10 + 20); // Addition
console.log(10 - 20); // Subtraction
console.log(10 * 20); // Multiplication
console.log(10 / 20); // Division
console.log(10 % 20); // Modulus
console.log(10 ** 20); // Exponentiation

// Assignment Operators
let a = 10;
a += 5; // a = a + 5
console.log(a); // 15
a -= 5; // a = a - 5
console.log(a); // 10
a *= 5; // a = a * 5
console.log(a); // 50
a /= 5; // a = a / 5
console.log(a); // 10
a %= 5; // a = a % 5
console.log(a);
a **= 5; // a = a ** 5
console.log(a); // 100000000

// Comparison Operators
console.log(10 == 10); // Equal to
console.log(10 === 10); // Strictly Equal to
console.log(10 != 20); // Not Equal to
console.log(10 !== 20); // Strictly Not Equal to
console.log(10 > 20); // Greater than
console.log(10 < 20); // Less than
console.log(10 >= 20); // Greater than or Equal to
console.log(10 <= 20); // Less than or Equal to

// Logical Operators
console.log(true && true); // Logical AND
console.log(true || false); // Logical OR
console.log(!true); // Logical NOT

// Bitwise Operators
console.log(5 & 3); // Bitwise AND
console.log(5 | 3); // Bitwise OR
console.log(5 ^ 3); // Bitwise XOR
console.log(~5); // Bitwise NOT
console.log(5 << 1); // Left Shift
console.log(5 >> 1); // Right Shift
console.log(5 >>> 1); // Unsigned Right Shift

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes

// Type Operators
console.log(typeof 10); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function

// instanceof Operator
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(function () {} instanceof Function); // true

// in Operator
console.log("length" in "Hello"); // true
console.log("name" in { name: "John" }); // true
console.log("age" in { name: "John" }); // false

// delete Operator
let obj = { name: "John", age: 30 };
delete obj.age;
console.log(obj); // { name: "John" }

// void Operator
function myFunction() {
  console.log("Hello");
}
console.log(void myFunction()); // undefined
