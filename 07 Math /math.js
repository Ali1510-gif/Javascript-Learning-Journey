// 1. Math Constants & Basic Functions

console.log("Absolute:", Math.abs(-4));
console.log("PI:", Math.PI);
console.log("LN10:", Math.LN10);
console.log("SQRT2:", Math.SQRT2);

console.log("Ceil:", Math.ceil(6.3)); // 7
console.log("Floor:", Math.floor(6.3)); // 6

console.log("Log10:", Math.log10(20));
console.log("Max:", Math.max(20, 11, 3421, 12));

// 2. Math.random() Basics

// Range: [0, 1)
let randomValue = Math.random();
console.log("Random (0-1):", randomValue);

// 3. Random Numbers (0–9)

let random0to9 = Math.floor(Math.random() * 10);
console.log("Random (0-9):", random0to9);

// 4. Random Numbers (1–10)

let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random (1-10):", random1to10);

// 5. Dice (1–6)

let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice Roll:", dice);

// 6. General Formula Function

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage
console.log("Random (15-25):", getRandom(15, 25));

// 7. OTP Generator (4-digit)

let otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
console.log("4-digit OTP:", otp);

// 8. Clean Shortcut Versions

// Random 15–25
console.log("15-25 (direct):", Math.floor(Math.random() * 11) + 15);

// OTP shortcut
console.log("OTP (shortcut):", Math.floor(1000 + Math.random() * 9000));
