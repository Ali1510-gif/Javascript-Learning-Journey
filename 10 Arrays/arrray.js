console.log("===== PART 1: CREATION =====");

let empty = [];
let numbers = [98, 85, 100, 92];
let names = ["Alice", "Bob", "Charlie"];
let mixed = [10, "hello", true, null];

console.log(empty, numbers, names, mixed);

// LENGTH

console.log("\n===== LENGTH =====");
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length);

// ACCESS & MODIFY

console.log("\n===== ACCESS & MODIFY =====");

console.log(fruits[0]); // Apple

fruits[1] = "Blueberry";
console.log(fruits);

console.log("Last Element:", fruits[fruits.length - 1]);

console.log("Out of bound:", fruits[10]); // undefined

// PUSH / POP

console.log("\n===== PUSH / POP =====");

let tasks = ["Wash dishes"];
tasks.push("Do laundry", "Buy groceries");
console.log(tasks);

let removed = tasks.pop();
console.log("Removed:", removed);
console.log(tasks);

// SHIFT / UNSHIFT

console.log("\n===== SHIFT / UNSHIFT =====");

let queue = ["Person B", "Person C"];
queue.unshift("Person A");
console.log(queue);

let first = queue.shift();
console.log("Removed:", first);
console.log(queue);

// LOOPING

console.log("\n===== LOOPING =====");

let scores = [98, 85, 100];
let total = 0;

// for loop
for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}
console.log("Total:", total);

// for...of
for (let score of scores) {
  console.log("Score:", score);
}

// SPLICE (ADD / REMOVE / REPLACE)

console.log("\n===== SPLICE =====");

let months = ["Jan", "March", "April", "June"];

// remove
months.splice(1, 1);
console.log(months);

// add
months.splice(1, 0, "Feb");
console.log(months);

// replace
months.splice(2, 1, "May");
console.log(months);

// SLICE (COPY)

console.log("\n===== SLICE =====");

let animals = ["ant", "bison", "camel", "duck", "elephant"];

let mid = animals.slice(2, 4);
console.log(mid);

let rest = animals.slice(2);
console.log(rest);

let copy = animals.slice();
console.log(copy);

// SPREAD OPERATOR

console.log("\n===== SPREAD =====");

let arr1 = ["a", "b"];
let arr2 = ["c", "d"];

let copyArr = [...arr1];
console.log(copyArr);

let combined = [...arr1, ...arr2];
console.log(combined);

let withMiddle = [...arr1, "x", "y", ...arr2];
console.log(withMiddle);

// JOIN

console.log("\n===== JOIN =====");

let list = ["Alice", "Bob", "Charlie"];
console.log(list.join(", "));

// SEARCHING

console.log("\n===== SEARCHING =====");

let nums = [10, 20, 30, 20, 40];

console.log(nums.indexOf(20));
console.log(nums.lastIndexOf(20));
console.log(nums.includes(30));
console.log(nums.includes(99));

// SORTING

console.log("\n===== SORTING =====");

let strArr = ["Cherry", "Apple", "Banana"];
strArr.sort();
console.log(strArr);

// WRONG numeric sort
let numArr = [100, 2, 5, 25, 1];
numArr.sort();
console.log("Wrong sort:", numArr);

// Correct numeric sort
numArr.sort((a, b) => a - b);
console.log("Ascending:", numArr);

numArr.sort((a, b) => b - a);
console.log("Descending:", numArr);

// FLAT

console.log("\n===== FLAT =====");

let nested = [1, 2, [3, 4]];
console.log(nested.flat());

let deep = [1, [2, [3, [4]]]];
console.log(deep.flat(2));
console.log(deep.flat(Infinity));

// DELETE VS SPLICE

console.log("\n===== DELETE VS SPLICE =====");

let letters = ["a", "b", "c"];
delete letters[1];

console.log("After delete:", letters);
console.log("Length:", letters.length);

// proper way
let items = ["a", "b", "c", "d"];
items.splice(2, 1);
console.log("After splice:", items);

// SPARSE ARRAY

console.log("\n===== SPARSE ARRAY =====");

let sparse = [];
sparse[0] = "first";
sparse[1000] = "last";

console.log(sparse.length);
console.log(sparse[500]); // undefined

// HETEROGENEOUS ARRAY

console.log("\n===== MIXED TYPES =====");

let mix = [10, "hello", true, { id: 1 }];
console.log(mix);

console.log("\n===== DONE: ALL ARRAY DEMOS COMPLETED =====");
