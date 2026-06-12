// 1. if statement

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote");
}

// 2. if...else

let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside");
} else {
  console.log("Weather is cool");
}

// 3. if...else if...else

let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 4. switch statement

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Day");
}

// 5. Ternary Operator

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome User" : "Please Login";
console.log(message);

// 6. Logical Operators in Conditions

let isAdmin = true;
let isVerified = false;

if (isAdmin && isVerified) {
  console.log("Full Access");
} else {
  console.log("Limited Access");
}

// 7. Truthy & Falsy Demo

let value = "";

if (value) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

// 8. Nested if

let user = {
  name: "Rayees",
  isActive: true,
};

if (user) {
  if (user.isActive) {
    console.log("User is active");
  }
}

// 9. Short-circuiting

let username = "";
let displayName = username || "Guest";
console.log(displayName);

// 10. Real-world Example (Login)

let inputPassword = "12345";
let storedPassword = "12345";

if (inputPassword === storedPassword) {
  console.log("Login Successful");
} else {
  console.log("Wrong Password");
}

// 11. Edge Case (== vs ===)

console.log(0 == false); // true (not recommended)
console.log(0 === false); // false (recommended)
