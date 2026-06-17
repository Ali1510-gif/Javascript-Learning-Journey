//  CREATION

console.log("===== OBJECT CREATION =====");

const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

console.log(person);

// Empty object
const emptyObj = {};
console.log(emptyObj);

// ACCESSING PROPERTIES

console.log("\n===== ACCESSING =====");

// Dot notation
console.log(person.name);

// Bracket notation
console.log(person["age"]);

// Dynamic key
let key = "isStudent";
console.log(person[key]);

// MODIFY / ADD / DELETE

console.log("\n===== MODIFY / ADD / DELETE =====");

// Modify
person.age = 26;

// Add
person.city = "Bhopal";

// Delete
delete person.isStudent;

console.log(person);

// NESTED OBJECTS

console.log("\n===== NESTED OBJECTS =====");

const user = {
  name: "Rayees",
  address: {
    city: "Bhopal",
    pincode: 462001,
  },
};

console.log(user.address.city);

// Optional chaining (safe access)
console.log(user.address?.pincode);

// OBJECT METHODS (FUNCTIONS)

console.log("\n===== METHODS =====");

const calculator = {
  a: 10,
  b: 5,
  add() {
    return this.a + this.b;
  },
  subtract: function () {
    return this.a - this.b;
  },
};

console.log(calculator.add());
console.log(calculator.subtract());

// LOOPING OBJECT

console.log("\n===== LOOPING =====");

const student = {
  name: "Ali",
  age: 22,
  course: "CSE",
};

// for...in
for (let key in student) {
  console.log(key, ":", student[key]);
}

// Object.keys()
console.log(Object.keys(student));

// Object.values()
console.log(Object.values(student));

// Object.entries()
console.log(Object.entries(student));

// OBJECT COPY (IMPORTANT)

console.log("\n===== COPY =====");

const original = { a: 1, b: 2 };

// Shallow copy (spread)
const copy1 = { ...original };

// Shallow copy (assign)
const copy2 = Object.assign({}, original);

copy1.a = 100;

console.log(original); // unchanged
console.log(copy1);

// NESTED COPY ISSUE (SHALLOW)

console.log("\n===== SHALLOW COPY ISSUE =====");

const nestedObj = {
  user: {
    name: "John",
  },
};

const shallowCopy = { ...nestedObj };

shallowCopy.user.name = "Changed";

console.log(nestedObj.user.name); // Changed (same reference)

// DEEP COPY

console.log("\n===== DEEP COPY =====");

const deepOriginal = { x: 1, y: { z: 2 } };

const deepCopy = JSON.parse(JSON.stringify(deepOriginal));

deepCopy.y.z = 999;

console.log(deepOriginal.y.z); // 2
console.log(deepCopy.y.z);

// DESTRUCTURING

console.log("\n===== DESTRUCTURING =====");

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

const { brand, year } = car;
console.log(brand, year);

// Rename variable
const { model: carModel } = car;
console.log(carModel);

// DEFAULT VALUES

console.log("\n===== DEFAULT VALUES =====");

const { price = 1000 } = car;
console.log(price);

// OPTIONAL CHAINING

console.log("\n===== OPTIONAL CHAINING =====");

const obj = {};
console.log(obj?.data?.value); // undefined (no error)

// OBJECT FREEZE & SEAL

console.log("\n===== FREEZE & SEAL =====");

const freezeObj = { a: 1 };

Object.freeze(freezeObj);
freezeObj.a = 100; // ignored

console.log(freezeObj);

const sealObj = { b: 2 };

Object.seal(sealObj);
sealObj.b = 200; // allowed
delete sealObj.b; // not allowed

console.log(sealObj);

// HAS OWN PROPERTY

console.log("\n===== HAS OWN PROPERTY =====");

console.log(person.hasOwnProperty("name")); // true

// MERGING OBJECTS

console.log("\n===== MERGING =====");

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };
console.log(merged);

// THIS KEYWORD

console.log("\n===== THIS KEYWORD =====");

const userObj = {
  name: "Rayees",
  greet() {
    console.log("Hello " + this.name);
  },
};

userObj.greet();

// OBJECT AS MAP (KEY-VALUE)

console.log("\n===== OBJECT AS MAP =====");

const mapObj = {};
mapObj["key1"] = "value1";
mapObj["key2"] = "value2";

console.log(mapObj);

// CHECK PROPERTY EXISTENCE

console.log("\n===== PROPERTY CHECK =====");

console.log("name" in person);
console.log(person.age !== undefined);

// JSON

console.log("\n===== JSON =====");

const jsonObj = { name: "Ali", age: 20 };

const jsonString = JSON.stringify(jsonObj);
console.log(jsonString);

const parsed = JSON.parse(jsonString);
console.log(parsed);

console.log("\n===== DONE: OBJECTS COMPLETE =====");
