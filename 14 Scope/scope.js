// Global Scope
let globalVar = "I am Global";

function testScope() {
  // Function Scope
  let functionVar = "I am Function Scoped";

  console.log("Inside function:");
  console.log(globalVar); // ✅ accessible
  console.log(functionVar); // ✅ accessible

  if (true) {
    // Block Scope
    let blockLet = "I am block scoped (let)";
    const blockConst = "I am block scoped (const)";
    var blockVar = "I am NOT block scoped (var)";

    console.log(blockLet); // ✅
    console.log(blockConst); // ✅
    console.log(blockVar); // ✅
  }

  console.log(blockVar); // ✅ var leaks outside block
  // console.log(blockLet); ❌ Error
}

testScope();

console.log("Outside function:");
console.log(globalVar); // ✅
// console.log(functionVar); ❌ Error

// LEXICAL SCOPE

function outer() {
  let outerVar = "Outer Variable";

  function inner() {
    console.log("Lexical Scope:", outerVar); // ✅
  }

  inner();
}

outer();
