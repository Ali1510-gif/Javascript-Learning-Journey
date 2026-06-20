console.log("=== 1. Basic Set Example ===");

// Create a Set (stores unique values only)
const mySet = new Set([1, 2, 3, 3, 4, 4]);

console.log("Set:", mySet); // duplicates removed

// --------------------------------------------------

console.log("\n=== 2. Add Values ===");

mySet.add(5);
mySet.add(2); // duplicate (ignored)

console.log("After Add:", mySet);

// --------------------------------------------------

console.log("\n=== 3. Check Value (has) ===");

console.log("Has 3:", mySet.has(3));
console.log("Has 10:", mySet.has(10));

// --------------------------------------------------

console.log("\n=== 4. Delete Value ===");

mySet.delete(2);
console.log("After Delete:", mySet);

// --------------------------------------------------

console.log("\n=== 5. Size of Set ===");

console.log("Size:", mySet.size);

// --------------------------------------------------

console.log("\n=== 6. Iterate Set ===");

mySet.forEach((value) => console.log("forEach:", value));

for (let value of mySet) {
  console.log("for...of:", value);
}

// --------------------------------------------------

console.log("\n=== 7. Convert Set to Array ===");

const arrFromSet = [...mySet];
console.log("Array:", arrFromSet);

// --------------------------------------------------

console.log("\n=== 8. Remove Duplicates (Real Use) ===");

const numbers = [1, 2, 2, 3, 4, 4, 5];

// Using Set
const uniqueNumbers = [...new Set(numbers)];

console.log("Unique Numbers:", uniqueNumbers);

// --------------------------------------------------

console.log("\n=== 9. Set with Strings ===");

const words = ["apple", "banana", "apple", "orange"];

const uniqueWords = new Set(words);

console.log("Unique Words:", uniqueWords);

// --------------------------------------------------

console.log("\n=== 10. Set Operations (Union, Intersection, Difference) ===");

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Union
const union = new Set([...setA, ...setB]);
console.log("Union:", union);

// Intersection
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log("Intersection:", intersection);

// Difference (A - B)
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log("Difference:", difference);

// --------------------------------------------------

console.log("\n=== 11. Real World Example (Unique Visitors) ===");

const visits = ["user1", "user2", "user1", "user3", "user2"];

const uniqueVisitors = new Set(visits);

console.log("Unique Visitors Count:", uniqueVisitors.size);

// --------------------------------------------------

console.log("\n=== 12. Custom Set-like Function ===");

// Mimic Set using array (basic idea)
function customSet(arr) {
  const result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

const customUnique = customSet([1, 2, 2, 3, 4]);
console.log("Custom Unique:", customUnique);

// --------------------------------------------------

console.log("\n=== 13. Important Notes ===");

// Set stores ONLY unique values
// Order is maintained (insertion order)
// Works with primitives + object references

const objSet = new Set();

const obj1 = { a: 1 };
const obj2 = { a: 1 };

objSet.add(obj1);
objSet.add(obj2);

console.log("Objects in Set:", objSet); // both are different references

// Clear all values
objSet.clear();
console.log("After Clear:", objSet);
