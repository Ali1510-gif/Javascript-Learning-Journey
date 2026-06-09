// 1. PRIMITIVE DATA TYPES

// Number
let num = 42;
console.log("Number:", num);

// String
let str = "Hello, Rayees!";
console.log("String:", str);

// Boolean
let isActive = true;
console.log("Boolean:", isActive);

// Undefined
let notAssigned;
console.log("Undefined:", notAssigned);

// Null
let empty = null;
console.log("Null:", empty);

// BigInt
let bigIntNum = 123456789012345678901234567890n;
console.log("BigInt:", bigIntNum);

// Symbol
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol:", sym1 === sym2); // false

// 2. NON-PRIMITIVE DATA TYPES

// Object
let person = {
  name: "Rayees",
  age: 21,
};
console.log("Object:", person);

// Array
let arr = [1, 2, 3, 4];
arr.push(5);
console.log("Array:", arr);

// Function
function greet() {
  return "Hello World!";
}
console.log("Function:", greet());

// Function as variable
let sayHi = function () {
  return "Hi!";
};
console.log("Function Variable:", sayHi());

// 3. TYPEOF CHECK (IMPORTANT)

console.log("\n--- TYPEOF CHECK ---");

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof isActive); // boolean
console.log(typeof notAssigned); // undefined
console.log(typeof empty); // object ❗ (JS bug)
console.log(typeof person); // object
console.log(typeof arr); // object
console.log(typeof greet); // function
