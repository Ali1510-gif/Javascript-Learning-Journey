// Basic Closure Example
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Counter:", count);
  };
}

const counter1 = createCounter();

counter1(); // 1
counter1(); // 2
counter1(); // 3

// Private Variables using Closure

function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Deposited:", amount, "Balance:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Withdrawn:", amount, "Balance:", balance);
    },
  };
}

const account = createBankAccount();

account.deposit(1000);
account.withdraw(300);

// console.log(account.balance); ❌ Not accessible (private)

// Closure in Loop (Important)

console.log("Using var (wrong way):");

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("var i:", i); // ❌ 4, 4, 4
  }, 1000);
}

// Fix using closure (IIFE)
console.log("Fix using closure:");

for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log("fixed i:", j); // ✅ 1, 2, 3
    }, 1000);
  })(i);
}
