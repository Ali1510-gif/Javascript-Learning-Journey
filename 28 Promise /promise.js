console.log("=================================================");
console.log("        JAVASCRIPT PROMISE COMPLETE DEMO");
console.log("=================================================");

/**********************************************************************
1. CALLBACK VS PROMISE
**********************************************************************/

console.log("\n1. CALLBACK VS PROMISE\n");

function callbackExample(callback) {
  setTimeout(() => {
    callback("Data received using Callback");
  }, 1000);
}

callbackExample((data) => {
  console.log(data);
});

const promiseExample = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data received using Promise");
  }, 1000);
});

promiseExample.then((data) => {
  console.log(data);
});

/**********************************************************************
2. CREATING PROMISE
**********************************************************************/

console.log("\n2. Creating Promise\n");

const p1 = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise Fulfilled");
  } else {
    reject("Promise Rejected");
  }
});

p1.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
});

/**********************************************************************
3. ASYNCHRONOUS PROMISE
**********************************************************************/

console.log("\n3. Async Promise\n");

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task Completed");
  }, 2000);
});

p2.then((message) => {
  console.log(message);
});

/**********************************************************************
4. REJECT EXAMPLE
**********************************************************************/

console.log("\n4. Reject Example\n");

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Server Error");
  }, 1000);
});

p3.catch((error) => {
  console.log(error);
});

/**********************************************************************
5. FINALLY
**********************************************************************/

console.log("\n5. Finally\n");

const p4 = new Promise((resolve) => {
  resolve("Success");
});

p4.then((msg) => {
  console.log(msg);
}).finally(() => {
  console.log("Cleanup completed");
});

/**********************************************************************
6. PROMISE CHAINING
**********************************************************************/

console.log("\n6. Promise Chaining\n");

Promise.resolve(10)

  .then((value) => {
    console.log(value);
    return value + 10;
  })

  .then((value) => {
    console.log(value);
    return value + 10;
  })

  .then((value) => {
    console.log(value);
  });

/**********************************************************************
7. RETURNING PROMISE INSIDE THEN
**********************************************************************/

console.log("\n7. Returning Promise\n");

Promise.resolve("Step 1")

  .then((data) => {
    console.log(data);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 2");
      }, 1000);
    });
  })

  .then((data) => {
    console.log(data);
  });

/**********************************************************************
8. ERROR PROPAGATION
**********************************************************************/

console.log("\n8. Error Propagation\n");

Promise.resolve()

  .then(() => {
    throw new Error("Something Went Wrong");
  })

  .catch((error) => {
    console.log(error.message);
  });

/**********************************************************************
9. Promise.resolve()
**********************************************************************/

console.log("\n9. Promise.resolve()\n");

Promise.resolve("Instant Success")

  .then((data) => {
    console.log(data);
  });

/**********************************************************************
10. Promise.reject()
**********************************************************************/

console.log("\n10. Promise.reject()\n");

Promise.reject("Instant Failure")

  .catch((error) => {
    console.log(error);
  });

/**********************************************************************
11. Promise.all()
**********************************************************************/

console.log("\n11. Promise.all()\n");

const pa = new Promise((resolve) => {
  setTimeout(() => resolve("HTML"), 1000);
});

const pb = new Promise((resolve) => {
  setTimeout(() => resolve("CSS"), 2000);
});

const pc = new Promise((resolve) => {
  setTimeout(() => resolve("JavaScript"), 3000);
});

Promise.all([pa, pb, pc])

  .then((data) => {
    console.log(data);
  });

/**********************************************************************
12. Promise.allSettled()
**********************************************************************/

console.log("\n12. Promise.allSettled()\n");

const ps1 = Promise.resolve("React");

const ps2 = Promise.reject("Angular Failed");

const ps3 = Promise.resolve("Node");

Promise.allSettled([ps1, ps2, ps3])

  .then((result) => {
    console.log(result);
  });

/**********************************************************************
13. Promise.race()
**********************************************************************/

console.log("\n13. Promise.race()\n");

const r1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("First");
  }, 1000);
});

const r2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Second");
  }, 3000);
});

Promise.race([r1, r2])

  .then((data) => {
    console.log(data);
  });

/**********************************************************************
14. Promise.any()
**********************************************************************/

console.log("\n14. Promise.any()\n");

const a1 = Promise.reject("Error 1");

const a2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Google");
  }, 2000);
});

const a3 = Promise.reject("Error 3");

Promise.any([a1, a2, a3])

  .then((data) => {
    console.log(data);
  });

/**********************************************************************
15. JSON
**********************************************************************/

console.log("\n15. JSON\n");

const obj = {
  name: "Rohit",
  age: 30,
  city: "Delhi",
};

const json = JSON.stringify(obj);

console.log(json);

const jsObject = JSON.parse(json);

console.log(jsObject);

/**********************************************************************
16. FETCH API
**********************************************************************/

console.log("\n16. Fetch API\n");

/*

fetch("https://api.github.com/users")

.then((response)=>{

    if(!response.ok){

        throw new Error("Unable to fetch");

    }

    return response.json();

})

.then((data)=>{

    console.log(data);

})

.catch((error)=>{

    console.log(error);

});

*/

/**********************************************************************
17. REAL WORLD EXAMPLE (ZOMATO)
**********************************************************************/

console.log("\n17. ZOMATO APPLICATION\n");

const orderDetail = {
  orderId: 123123,
  food: ["Pizza", "Burger", "Coke"],
  cost: 620,
  customer: "Rohit",
  restaurant: "Delhi",
  address: "Dwarka",
};

function placedOrder(order) {
  console.log("Payment Processing...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log("Payment Successful");

        resolve(order);
      } else {
        reject("Payment Failed");
      }
    }, 2000);
  });
}

function preparingOrder(order) {
  console.log("Preparing Food...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.05) {
        console.log("Food Prepared");

        resolve(order);
      } else {
        reject("Food Out of Stock");
      }
    }, 3000);
  });
}

function pickupOrder(order) {
  console.log("Delivery Partner Reached Restaurant");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.05) {
        console.log("Order Picked");

        resolve(order);
      } else {
        reject("Delivery Partner Cancelled");
      }
    }, 3000);
  });
}

function deliverOrder(order) {
  console.log("Delivering Order...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order Delivered");

      resolve(order);
    }, 3000);
  });
}

placedOrder(orderDetail)
  .then((order) => {
    return preparingOrder(order);
  })

  .then((order) => {
    return pickupOrder(order);
  })

  .then((order) => {
    return deliverOrder(order);
  })

  .then((order) => {
    console.log("Final Order");

    console.log(order);
  })

  .catch((error) => {
    console.log("ERROR :", error);
  })

  .finally(() => {
    console.log("Cleanup Completed");
  });

/**********************************************************************
18. INTERVIEW QUESTIONS
**********************************************************************/

console.log("\n18. Interview Questions\n");

/*

Q1 What is Promise?
Ans:
An object representing eventual completion or failure of an asynchronous task.

--------------------------------------------

Q2 Promise States?

Pending
Fulfilled
Rejected

--------------------------------------------

Q3 Difference between Callback and Promise?

Callback -> Pyramid of Doom
Promise -> Cleaner chaining

--------------------------------------------

Q4 then() returns what?

A new Promise.

--------------------------------------------

Q5 catch() handles?

All previous errors.

--------------------------------------------

Q6 finally() purpose?

Cleanup code.

--------------------------------------------

Q7 Promise.all()

Waits for all promises.

Fails immediately if one rejects.

--------------------------------------------

Q8 Promise.allSettled()

Waits for all.

Never rejects.

--------------------------------------------

Q9 Promise.race()

Returns first settled promise.

--------------------------------------------

Q10 Promise.any()

Returns first fulfilled promise.

Ignores rejected promises.

--------------------------------------------

Q11 Difference between resolve() and return?

resolve() changes Promise state.

return returns value from function.

--------------------------------------------

Q12 Can then() return Promise?

YES.

--------------------------------------------

Q13 Can Promise be resolved twice?

NO.

Only first resolve/reject works.

--------------------------------------------

Q14 fetch() returns?

A Promise<Response>

--------------------------------------------

Q15 response.json() returns?

A Promise.

--------------------------------------------

Q16 Promise chaining?

Returning values/promises from then().

--------------------------------------------

Q17 What is Promise Hell?

Long nested then() chains (rare).

--------------------------------------------

Q18 How async-await works?

Built on top of Promises.

*/

console.log("\n===================== END =====================");
