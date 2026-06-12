console.log("===== FOR LOOP =====");
for (let i = 0; i < 5; i++) {
  console.log("For Loop i:", i);
}

console.log("\n===== WHILE LOOP =====");
let j = 0;
while (j < 5) {
  console.log("While Loop j:", j);
  j++;
}

console.log("\n===== DO...WHILE LOOP =====");
let k = 0;
do {
  console.log("Do While k:", k);
  k++;
} while (k < 5);

console.log("\n===== FOR...OF LOOP (Array) =====");
let arr = [10, 20, 30];
for (let value of arr) {
  console.log("Value:", value);
}

console.log("\n===== FOR...IN LOOP (Object) =====");
let obj = { name: "Rayees", age: 21, city: "Bhopal" };
for (let key in obj) {
  console.log(key, ":", obj[key]);
}

console.log("\n===== BREAK EXAMPLE =====");
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log("Breaking at i =", i);
    break;
  }
  console.log(i);
}

console.log("\n===== CONTINUE EXAMPLE =====");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Skipping i =", i);
    continue;
  }
  console.log(i);
}

console.log("\n===== NESTED LOOP =====");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

console.log("\n===== PATTERN PRINTING =====");
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

console.log("\n===== INFINITE LOOP (DON'T RUN) =====");
// while (true) {
//   console.log("This will run forever");
// }

console.log("\n===== REAL USE CASE (ARRAY SUM) =====");
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let num of numbers) {
  sum += num;
}

console.log("Sum of array:", sum);
