/******************** 1. BASIC FUNCTION ********************/
function greeting() {
  console.log("Hello Coder Army 🚀");
  return "Greeting Done";
}

console.log("Return Value:", greeting());

/******************** 2. FUNCTION WITH PARAMETERS ********************/
function addNumbers(num1, num2, num3 = 0, num4 = 0) {
  const sum = num1 + num2 + num3 + num4;
  return sum;
}

console.log("Sum:", addNumbers(3, 4));
console.log("Sum:", addNumbers(3, 4, 5, 6));

/******************** 3. REST OPERATOR ********************/
function addAllNumbers(...nums) {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  return sum;
}

console.log("Rest Sum:", addAllNumbers(10, 20));
console.log("Rest Sum:", addAllNumbers(1, 2, 3, 4, 5));

/******************** 4. FUNCTION EXPRESSION ********************/
const multiply = function (a, b) {
  return a * b;
};

console.log("Multiply:", multiply(4, 5));

/******************** 5. ARROW FUNCTION ********************/
const subtract = (a, b) => {
  return a - b;
};

console.log("Subtract:", subtract(10, 3));

// Short arrow function
const square = (num) => num * num;
console.log("Square:", square(6));

/******************** 6. RETURN OBJECT FROM ARROW FUNCTION ********************/
const getUser = () => ({
  name: "Rayees",
  role: "Java Developer",
});

console.log("User:", getUser());

/******************** 7. ARRAY + FUNCTION ********************/
let arr = [10, 5, 20, 3];

// Sorting using arrow function
arr.sort((a, b) => b - a);
console.log("Sorted Array:", arr);

/******************** 8. DESTRUCTURING ********************/
const numbers = [100, 200, 300, 400, 500];

const [first, second, ...rest] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);

/******************** 9. IIFE (Immediately Invoked Function Expression) ********************/
(function () {
  console.log("IIFE executed immediately 🔥");
})();

(() => {
  console.log("Arrow IIFE executed 🚀");
})();

/******************** 10. CALLBACK FUNCTION ********************/
function greet() {
  console.log("Hello Ji 👋");
}

function dance() {
  console.log("I am dancing 💃");
}

function meet(callback) {
  console.log("Meeting started...");
  callback();
  console.log("Meeting ended.");
}

meet(greet);
meet(dance);

/******************** 11. REAL-WORLD CALLBACK (PAYMENT SYSTEM) ********************/
function blinkitOrderPlaced() {
  console.log("📦 Blinkit: Packing your order");
}

function zomatoOrderPlaced() {
  console.log("🍔 Zomato: Preparing your food");
}

function payment(amount, callback) {
  console.log(`💰 Payment of ₹${amount} initiated`);
  console.log("✅ Payment successful");

  // Callback execution
  callback();

  console.log("📊 Distribution: GST + Company + Delivery Partner");
}

payment(500, zomatoOrderPlaced);
payment(300, blinkitOrderPlaced);

/******************** 12. HIGHER ORDER FUNCTION ********************/
function calculator(a, b, operation) {
  return operation(a, b);
}

const add = (a, b) => a + b;
const mul = (a, b) => a * b;

console.log("Calculator Add:", calculator(5, 3, add));
console.log("Calculator Multiply:", calculator(5, 3, mul));

/******************** 13. FUNCTION INSIDE FUNCTION ********************/
function outer() {
  console.log("Outer function");

  function inner() {
    console.log("Inner function");
  }

  inner();
}

outer();

/******************** 14. CLOSURE ********************/
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const increment = counter();

increment();
increment();
increment();

console.log("🎯 All function concepts covered!");
