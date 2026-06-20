// forEach() Demo

console.log("=== Basic forEach Example ===");

const numbers = [1, 2, 3, 4, 5];

// Basic usage
numbers.forEach(function (num) {
  console.log(num);
});

console.log("\n=== Using Arrow Function ===");

numbers.forEach((num) => console.log(num * 2));

console.log("\n=== Access Index ===");

numbers.forEach((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});

console.log("\n=== Access Full Array ===");

numbers.forEach((num, index, arr) => {
  console.log(`Value: ${num}, Total Length: ${arr.length}`);
});

console.log("\n=== Modify External Array ===");

let doubled = [];

numbers.forEach((num) => {
  doubled.push(num * 2);
});

console.log("Doubled Array:", doubled);

console.log("\n=== forEach with Objects ===");

const users = [
  { name: "Rayees", age: 21 },
  { name: "Ali", age: 22 },
  { name: "John", age: 23 },
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old`);
});

console.log("\n=== Important Note ===");

// forEach does NOT return a new array
const result = numbers.forEach((num) => num * 2);

console.log("Result:", result); // undefined

console.log("\n=== When NOT to use forEach ===");

// If you want a new array, use map()
const mapped = numbers.map((num) => num * 2);
console.log("Using map():", mapped);
