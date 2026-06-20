console.log("=== 1. Basic map Example ===");

const numbers = [1, 2, 3, 4, 5];

// Multiply each number by 2
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// --------------------------------------------------

console.log("\n=== 2. Using Arrow Function ===");

const squared = numbers.map((num) => num * num);
console.log("Squared:", squared);

// --------------------------------------------------

console.log("\n=== 3. Access index & array ===");

const withIndex = numbers.map((num, index, arr) => {
  return `Index ${index} → ${num} (Total: ${arr.length})`;
});

console.log("With Index Info:", withIndex);

// --------------------------------------------------

console.log("\n=== 4. Map with Objects ===");

const users = [
  { name: "Rayees", age: 21 },
  { name: "Ali", age: 22 },
  { name: "Sara", age: 23 },
];

// Extract names
const names = users.map((user) => user.name);
console.log("Names:", names);

// Transform object
const userInfo = users.map((user) => ({
  fullName: user.name,
  isAdult: user.age >= 18,
}));

console.log("Transformed Users:", userInfo);

// --------------------------------------------------

console.log("\n=== 5. Add New Property ===");

const updatedUsers = users.map((user) => ({
  ...user,
  country: "India",
}));

console.log("Updated Users:", updatedUsers);

// --------------------------------------------------

console.log("\n=== 6. Chaining map ===");

const chained = numbers.map((num) => num * 2).map((num) => num + 1);

console.log("Chained Result:", chained);

// --------------------------------------------------

console.log("\n=== 7. Real World Example (Products) ===");

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 30000 },
];

// Add GST (18%)
const withGST = products.map((product) => ({
  ...product,
  priceWithGST: product.price * 1.18,
}));

console.log("Products with GST:", withGST);

// --------------------------------------------------

console.log("\n=== 8. Formatting Data ===");

const prices = [100, 250, 399];

// Convert to currency format
const formattedPrices = prices.map((price) => `₹${price}`);
console.log("Formatted Prices:", formattedPrices);

// --------------------------------------------------

console.log("\n=== 9. Custom Map Function (Interview Level) ===");

function customMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

const testNums = [5, 10, 15];

const customResult = customMap(testNums, (num) => num * 3);
console.log("Custom Map Result:", customResult);

// --------------------------------------------------

console.log("\n=== 10. Combine map with filter ===");

const mixedNumbers = [1, 2, 3, 4, 5, 6];

// Even numbers doubled
const evenDoubled = mixedNumbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);

console.log("Even Doubled:", evenDoubled);

// --------------------------------------------------

console.log("\n=== 11. Convert Array of Strings ===");

const words = ["hello", "world", "javascript"];

// Capitalize first letter
const capitalized = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1),
);

console.log("Capitalized Words:", capitalized);

// --------------------------------------------------

console.log("\n=== 12. Important Notes ===");

// map ALWAYS returns a new array
const newArray = numbers.map((num) => num + 100);
console.log("New Array:", newArray);

// Original array unchanged
console.log("Original Numbers:", numbers);

// Wrong usage (no return)
const wrong = numbers.map((num) => {
  num * 2; // missing return
});
console.log("Wrong Result:", wrong); // [undefined, undefined...]
