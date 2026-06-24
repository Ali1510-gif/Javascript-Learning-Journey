const form = document.getElementById("taxForm");
const resultEl = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const incomeInput = document.getElementById("income");
  const amount = parseInt(incomeInput.value);

  if (isNaN(amount) || amount < 0) {
    resultEl.textContent = "❌ Please enter a valid income!";
    return;
  }

  let totalTax = 0;

  // ✅ No tax case (professional message)
  if (amount <= 1200000) {
    resultEl.textContent =
      "✅ No tax applicable for this income (under ₹12,00,000)";
    return;
  } else if (amount <= 1600000) {
    totalTax = (amount - 1200000) * 0.15;
  } else if (amount <= 2000000) {
    totalTax = (amount - 1600000) * 0.2 + 60000;
  } else if (amount <= 2400000) {
    totalTax = (amount - 2000000) * 0.25 + 60000 + 80000;
  } else {
    totalTax = (amount - 2400000) * 0.3 + 60000 + 80000 + 100000;
  }

  resultEl.textContent = `💰 Total Tax: ₹${totalTax.toLocaleString()}`;
});
