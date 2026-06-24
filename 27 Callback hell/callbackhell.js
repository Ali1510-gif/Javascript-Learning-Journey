// =======================
// 🍔 ZOMATO ORDER OBJECT
// =======================

const orderDetail = {
  orderId: 123123,
  food: ["Pizza", "Biryani", "Coke"],
  cost: 620,
  customer_name: "Rohit",
  customer_location: "Dwarka",
  restaurant_location: "Delhi",
};

// =======================
// ❌ CALLBACK HELL VERSION
// =======================

function placedOrderCB(order, callback) {
  console.log(`\n[CB] ${order.cost} Payment is in progress`);
  setTimeout(() => {
    console.log("[CB] Payment done, order placed");
    order.status = true;
    callback(order);
  }, 1000);
}

function preparingOrderCB(order, callback) {
  console.log("[CB] Food preparation started:", order.food);
  setTimeout(() => {
    console.log("[CB] Food prepared");
    order.token = 123;
    callback(order);
  }, 1000);
}

function pickupOrderCB(order, callback) {
  console.log(
    "[CB] Delivery boy going to restaurant:",
    order.restaurant_location,
  );
  setTimeout(() => {
    console.log("[CB] Order picked up");
    order.received = true;
    callback(order);
  }, 1000);
}

function deliverOrderCB(order) {
  console.log("[CB] Out for delivery to:", order.customer_location);
  setTimeout(() => {
    console.log("[CB] Order delivered ✅");
    order.delivery = true;
  }, 1000);
}

// 👉 CALLBACK HELL EXECUTION
function runCallbackHell() {
  console.log("\n=========== CALLBACK HELL ===========");

  placedOrderCB(orderDetail, (order) => {
    preparingOrderCB(order, (order) => {
      pickupOrderCB(order, (order) => {
        deliverOrderCB(order);
      });
    });
  });
}

// =======================
// ✅ PROMISE VERSION
// =======================

function placedOrderPR(order) {
  return new Promise((resolve) => {
    console.log(`\n[PR] ${order.cost} Payment is in progress`);
    setTimeout(() => {
      console.log("[PR] Order placed");
      order.status = true;
      resolve(order);
    }, 1000);
  });
}

function preparingOrderPR(order) {
  return new Promise((resolve) => {
    console.log("[PR] Preparing food:", order.food);
    setTimeout(() => {
      console.log("[PR] Food ready");
      order.token = 456;
      resolve(order);
    }, 1000);
  });
}

function pickupOrderPR(order) {
  return new Promise((resolve) => {
    console.log("[PR] Picking up from:", order.restaurant_location);
    setTimeout(() => {
      console.log("[PR] Picked up");
      order.received = true;
      resolve(order);
    }, 1000);
  });
}

function deliverOrderPR(order) {
  return new Promise((resolve) => {
    console.log("[PR] Delivering to:", order.customer_location);
    setTimeout(() => {
      console.log("[PR] Delivered ✅");
      order.delivery = true;
      resolve(order);
    }, 1000);
  });
}

// 👉 PROMISE CHAIN EXECUTION
function runPromises() {
  console.log("\n=========== PROMISES ===========");

  placedOrderPR(orderDetail)
    .then(preparingOrderPR)
    .then(pickupOrderPR)
    .then(deliverOrderPR)
    .catch((err) => console.log("Error:", err));
}

// =======================
// 🚀 ASYNC / AWAIT VERSION
// =======================

async function runAsyncAwait() {
  console.log("\n=========== ASYNC / AWAIT ===========");

  try {
    const order1 = await placedOrderPR(orderDetail);
    const order2 = await preparingOrderPR(order1);
    const order3 = await pickupOrderPR(order2);
    await deliverOrderPR(order3);
  } catch (err) {
    console.log("Error:", err);
  }
}

// =======================
// ▶️ RUN ALL (SEQUENTIALLY)
// =======================

async function runAll() {
  runCallbackHell();

  // wait before next demo
  setTimeout(() => {
    runPromises();
  }, 5000);

  setTimeout(() => {
    runAsyncAwait();
  }, 10000);
}

runAll();
