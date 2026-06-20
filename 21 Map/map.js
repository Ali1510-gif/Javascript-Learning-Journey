console.log("=== 1. Basic Map Example ===");

// Create a Map (key-value pairs)
const myMap = new Map();

myMap.set("name", "Rayees");
myMap.set("age", 21);

console.log("Map:", myMap);

// --------------------------------------------------

console.log("\n=== 2. Get Values ===");

console.log("Name:", myMap.get("name"));
console.log("Age:", myMap.get("age"));

// --------------------------------------------------

console.log("\n=== 3. Check Key (has) ===");

console.log("Has name:", myMap.has("name"));
console.log("Has city:", myMap.has("city"));

// --------------------------------------------------

console.log("\n=== 4. Delete Key ===");

myMap.delete("age");
console.log("After Delete:", myMap);

// --------------------------------------------------

console.log("\n=== 5. Size of Map ===");

console.log("Size:", myMap.size);

// --------------------------------------------------

console.log("\n=== 6. Iterate Map ===");

// forEach
myMap.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// for...of
for (let [key, value] of myMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// --------------------------------------------------

console.log("\n=== 7. Keys, Values, Entries ===");

console.log("Keys:", [...myMap.keys()]);
console.log("Values:", [...myMap.values()]);
console.log("Entries:", [...myMap.entries()]);

// --------------------------------------------------

console.log("\n=== 8. Map with Different Key Types ===");

const map2 = new Map();

map2.set(1, "Number Key");
map2.set(true, "Boolean Key");
map2.set({ id: 1 }, "Object Key");

console.log("Different Keys:", map2);

// --------------------------------------------------

console.log("\n=== 9. Convert Object ↔ Map ===");

const obj = { a: 1, b: 2 };

// Object → Map
const objToMap = new Map(Object.entries(obj));
console.log("Object to Map:", objToMap);

// Map → Object
const mapToObj = Object.fromEntries(objToMap);
console.log("Map to Object:", mapToObj);

// --------------------------------------------------

console.log("\n=== 10. Real World Example (Count Occurrences) ===");

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const countMap = new Map();

fruits.forEach((fruit) => {
  countMap.set(fruit, (countMap.get(fruit) || 0) + 1);
});

console.log("Fruit Count:", countMap);

// --------------------------------------------------

console.log("\n=== 11. Store Complex Data ===");

const users = [
  { id: 1, name: "Rayees" },
  { id: 2, name: "Ali" },
];

// Map userId → user object
const userMap = new Map();

users.forEach((user) => {
  userMap.set(user.id, user);
});

console.log("User Map:", userMap);
console.log("Get User 1:", userMap.get(1));

// --------------------------------------------------

console.log("\n=== 12. Remove Duplicates using Map ===");

const nums = [1, 2, 2, 3, 4, 4, 5];

const uniqueMap = new Map();

nums.forEach((num) => uniqueMap.set(num, true));

const uniqueNums = [...uniqueMap.keys()];

console.log("Unique Numbers:", uniqueNums);

// --------------------------------------------------

console.log("\n=== 13. Custom Map Implementation (Basic Idea) ===");

function customMapObject() {
  const data = {};

  return {
    set: (key, value) => (data[key] = value),
    get: (key) => data[key],
    has: (key) => key in data,
    delete: (key) => delete data[key],
    size: () => Object.keys(data).length,
    data,
  };
}

const myCustomMap = customMapObject();

myCustomMap.set("x", 10);
myCustomMap.set("y", 20);

console.log("Custom Map Get x:", myCustomMap.get("x"));
console.log("Custom Map Size:", myCustomMap.size());

// --------------------------------------------------

console.log("\n=== 14. Important Notes ===");

// Map maintains insertion order
// Keys can be ANY type (unlike objects)
// Faster lookups for large data

const testMap = new Map();
testMap.set("a", 1);
testMap.set("b", 2);

// Clear all
testMap.clear();
console.log("After Clear:", testMap);
