console.log("=== 1. Basic filter Example ===");

const numbers = [1, 2, 3, 4, 5, 6];

// Even numbers
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evens);

// Odd numbers
const odds = numbers.filter((num) => num % 2 !== 0);
console.log("Odd Numbers:", odds);

// --------------------------------------------------

console.log("\n=== 2. Filter with Conditions ===");

// Numbers greater than 3
const greaterThanThree = numbers.filter((num) => num > 3);
console.log("Greater than 3:", greaterThanThree);

// --------------------------------------------------

console.log("\n=== 3. Filter with Objects ===");

const users = [
  { name: "Rayees", age: 21, isActive: true },
  { name: "Ali", age: 17, isActive: false },
  { name: "Sara", age: 25, isActive: true },
  { name: "John", age: 16, isActive: true },
];

// Adults only
const adults = users.filter((user) => user.age >= 18);
console.log("Adults:", adults);

// Active + Adult users (custom logic)
const validUsers = users.filter((user) => user.isActive && user.age >= 18);
console.log("Valid Users:", validUsers);

// --------------------------------------------------

console.log("\n=== 4. Access index & array ===");

numbers.filter((num, index, arr) => {
  console.log(`Index: ${index}, Value: ${num}, Length: ${arr.length}`);
  return num > 3;
});

// --------------------------------------------------

console.log("\n=== 5. Chaining filter ===");

const chainedResult = numbers
  .filter((num) => num > 2)
  .filter((num) => num % 2 === 0);

console.log("Chained Result:", chainedResult);

// --------------------------------------------------

console.log("\n=== 6. Custom Filter Logic ===");

const nums2 = [10, 25, 30, 45, 50, 60];

// Divisible by 5 AND greater than 30
const customNumbers = nums2.filter((num) => num % 5 === 0 && num > 30);

console.log("Custom Filtered Numbers:", customNumbers);

// --------------------------------------------------

console.log("\n=== 7. Reusable Custom Filter Function ===");

function customFilter(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

const testNums = [5, 12, 18, 7, 20];

const filteredNums = customFilter(testNums, (num) => num > 10);
console.log("Custom Function Result:", filteredNums);

// --------------------------------------------------

console.log("\n=== 8. Search Filter (Case-Insensitive) ===");

const products = ["Laptop", "Mobile", "Tablet", "Camera"];

function searchFilter(arr, keyword) {
  return arr.filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase()),
  );
}

const searchResult = searchFilter(products, "tab");
console.log("Search Result:", searchResult);

// --------------------------------------------------

console.log("\n=== 9. Remove Duplicates ===");

const duplicateArray = [1, 2, 2, 3, 4, 4, 5];

const unique = duplicateArray.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});

console.log("Unique Values:", unique);

// --------------------------------------------------

console.log("\n=== 10. Real World Example (Orders) ===");

const orders = [
  { id: 1, amount: 500, status: "delivered" },
  { id: 2, amount: 200, status: "pending" },
  { id: 3, amount: 800, status: "delivered" },
  { id: 4, amount: 150, status: "cancelled" },
];

// Delivered orders with amount > 300
const highValueDelivered = orders.filter(
  (order) => order.status === "delivered" && order.amount > 300,
);

console.log("High Value Delivered Orders:", highValueDelivered);

// --------------------------------------------------

console.log("\n=== 11. Important Notes ===");

// filter ALWAYS returns a new array
const noMatch = numbers.filter((num) => num > 100);
console.log("No Match:", noMatch); // []

// Original array unchanged
console.log("Original Numbers:", numbers);

// Wrong usage example (no return → undefined behavior)
const wrong = numbers.filter((num) => {
  num > 2; // missing return
});
console.log("Wrong Result:", wrong); // []
