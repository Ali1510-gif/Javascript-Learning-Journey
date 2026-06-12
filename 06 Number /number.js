// 1. Number Basics

let a = 10;
let b = 345.6821;

let fixedValue = b.toFixed(1); // Returns STRING
console.log("toFixed:", fixedValue, "| Type:", typeof fixedValue);

console.log("toPrecision:", b.toPrecision(4)); // Total digits
console.log("toString:", b.toString()); // Convert to string

// 2. Number Object vs Primitive

// ❌ Using Number object (not recommended)
let num1 = new Number(20);
let num2 = new Number(20);

console.log("Number object comparison (==):", num1 == num2); // false
console.log("Number object comparison (===):", num1 === num2); // false

// ✅ Primitive numbers
let num3 = 20;
let num4 = 20;

console.log("Primitive comparison (==):", num3 == num4); // true
console.log("Primitive comparison (===):", num3 === num4); // true

// 3. Boolean Conversion

console.log("Boolean(null):", Boolean(null)); // false

// 4. typeof Check

let value = 20;
console.log("Type of value:", typeof value); // number

// 5. Object Comparison (Reference Type)

// Case 1: Same reference
let obj1 = {
  name: "Rohit",
};

let obj2 = obj1;

console.log("Same reference objects:", obj1 == obj2); // true

// Case 2: Different objects (same content but different memory)
let obj3 = {
  name: "Rohit",
};

let obj4 = {
  name: "Rohit",
};

console.log("Different objects:", obj3 == obj4); // false

// 6. Primitive Copy (By Value)

let x = 10;
let y = x;

console.log("Primitive copy:", x == y); // true
