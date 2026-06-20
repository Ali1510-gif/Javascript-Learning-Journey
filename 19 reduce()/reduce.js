console.log("=== 1. Basic reduce Example ===");

const numbers = [1, 2, 3, 4, 5];

// Sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Sum:", sum);

// --------------------------------------------------

console.log("\n=== 2. Find Maximum ===");

const max = numbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, numbers[0]);

console.log("Max Value:", max);

// --------------------------------------------------

console.log("\n=== 3. Multiply All Values ===");

const product = numbers.reduce((acc, curr) => acc * curr, 1);

console.log("Product:", product);

// --------------------------------------------------

console.log("\n=== 4. Count Occurrences ===");

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log("Fruit Count:", count);

// --------------------------------------------------

console.log("\n=== 5. Flatten Array ===");

const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log("Flattened:", flat);

// --------------------------------------------------

console.log("\n=== 6. Group By Property ===");

const users = [
  { name: "Rayees", age: 21 },
  { name: "Ali", age: 17 },
  { name: "Sara", age: 21 },
];

// Group users by age
const grouped = users.reduce((acc, user) => {
  const key = user.age;

  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(user);

  return acc;
}, {});

console.log("Grouped by Age:", grouped);

// --------------------------------------------------

console.log("\n=== 7. Real World Example (Total Price) ===");

const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mobile", price: 20000 },
  { item: "Tablet", price: 30000 },
];

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

console.log("Total Cart Price:", totalPrice);

// --------------------------------------------------

console.log("\n=== 8. Filter + Map using reduce ===");

const mixedNumbers = [1, 2, 3, 4, 5, 6];

// Even numbers doubled using reduce
const evenDoubled = mixedNumbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.push(num * 2);
  }
  return acc;
}, []);

console.log("Even Doubled:", evenDoubled);

// --------------------------------------------------

console.log("\n=== 9. Remove Duplicates ===");

const duplicateArray = [1, 2, 2, 3, 4, 4, 5];

const unique = duplicateArray.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log("Unique Values:", unique);

// --------------------------------------------------

console.log("\n=== 10. Custom reduce Function (Interview Level) ===");

function customReduce(arr, callback, initialValue) {
  let acc = initialValue;
  let startIndex = 0;

  if (acc === undefined) {
    acc = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
}

const testNums = [10, 20, 30];

const customSum = customReduce(testNums, (acc, curr) => acc + curr, 0);

console.log("Custom Reduce Sum:", customSum);

// --------------------------------------------------

console.log("\n=== 11. Important Notes ===");

// reduce returns a SINGLE value (not array)
const result = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Single Result:", result);

// Original array unchanged
console.log("Original Numbers:", numbers);

// Without initial value (be careful)
const noInitial = numbers.reduce((acc, curr) => acc + curr);
console.log("Without Initial Value:", noInitial);
