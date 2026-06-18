// Function as Argument
function greet(name) {
  return "Hello " + name;
}

function processUser(callback) {
  const name = "Rayees";
  console.log(callback(name));
}

processUser(greet);

// Function Returning Function

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Double:", double(5)); // 10
console.log("Triple:", triple(5)); // 15

// Real-world HOF (Array Methods)

const numbers = [1, 2, 3, 4, 5];

// map
const squared = numbers.map((n) => n * n);
console.log("Squared:", squared);

// filter
const even = numbers.filter((n) => n % 2 === 0);
console.log("Even:", even);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// Custom Higher Order Function

function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log("Add:", operate(2, 3, add));
console.log("Multiply:", operate(2, 3, multiply));
