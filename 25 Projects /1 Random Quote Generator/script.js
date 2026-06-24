const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",
  "Success is not final, failure is not fatal. — Winston Churchill",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Don't watch the clock; keep going. — Sam Levenson",
  "It does not matter how slowly you go. — Confucius",
  "Opportunities don't happen, you create them. — Chris Grosser",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "In the middle of difficulty lies opportunity. — Albert Einstein",
  "What lies within us matters most. — Emerson",
  "Dream big and dare to fail. — Norman Vaughan",
  "Don’t let yesterday take today. — Will Rogers",
  "The future belongs to dreamers. — Eleanor Roosevelt",
  "It always seems impossible until done. — Nelson Mandela",
  "Start now. — Walt Disney",
  "Success comes to the busy. — Henry David Thoreau",
  "Get up every time you fall. — Lombardi",
  "Your time is limited. — Steve Jobs",
  "Everything is on the other side of fear. — George Addair",
];

const quoteEl = document.getElementById("quote");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const tweetBtn = document.getElementById("tweetBtn");

// Generate quote
generateBtn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * quotes.length);

  quoteEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.textContent = quotes[index];
    quoteEl.style.opacity = 1;
  }, 200);
});

// Copy quote
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteEl.textContent);
  alert("Copied to clipboard!");
});

// Tweet quote
tweetBtn.addEventListener("click", () => {
  const text = encodeURIComponent(quoteEl.textContent);
  window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
});
